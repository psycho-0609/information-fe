<template lang="">
  <div class="box-form">
    <div class="box-medium">
      <div class="box-sm-form">
        <form @submit.prevent="handleOnSubmit">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Category</label>
            <select class="form-select" v-model="categoryId">
              <option v-for="item in categories" :key="item.id" :value="item.id">{{item.name}}</option>
            </select>
            <!-- <input class="form-check-input" type="radio" :value="item.id" name="flexRadioDefault" :id="item.id" v-model="categoryId">
                            <label class="form-check-label" :for="item.id">
                                {{item.name}}
                            </label> -->
              <div class="errorMes"><span>{{errorMesCate}}</span></div>
          </div>
          <div class="mb-3">
            <label for="clientId" class="form-label">Client Id</label>
            <input type="text" v-model="clientId" class="form-control" id="ClientId">
            <div class="errorMes"><span>{{erorrMesClientId}}</span></div>
          </div>
          <div class="mb-3">
            <label for="clientSecret" class="form-label">Client Secret</label>
            <input type="text" v-model="clientSecret" class="form-control" id="clientSecret">
            <div class="errorMes"><span>{{erorrMesClientSecret}}</span></div>
          </div>
          <div class="mb-3">
            <label for="urlIn" class="form-label">Url In</label>
            <input type="text" v-model="urlIn" class="form-control" id="urlIn">
            <div class="errorMes"><span>{{erorrMesUrlIn}}</span></div>
          </div>
          <div class="mb-3">
            <label for="urlOut" class="form-label">Url Out</label>
            <input type="text" v-model="urlOut" class="form-control" id="urlOut">
            <div class="errorMes"><span>{{erorrMesUrlOut}}</span></div>
          </div>
          <div class="mb-3">
            <label for="note" class="form-label">Note</label>
            <textarea class="form-control" v-model="note" id="note"> </textarea>
            <div class="errorMes"><span>{{erorrNote}}</span></div>
          </div>
          <div class="message-error" v-if="errorMessForm">{{errorMessForm}}</div>
          <div class="button-box">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="submit" @click="close" class="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import categoryApi from "@/apis/user/categoryApis";
  export default {
    created() {
      this.getCategory();
      this.setInformationData();
    },
    props: ["information", "handleAddInformation", "errorMessForm"],
    data() {
      return {
        categories: [],
        id: "",
        categoryId: "",
        clientId: "",
        clientSecret: "",
        urlIn: "",
        urlOut: "",
        note: "",
        errorMesCate: "",
        erorrMesClientId: "",
        erorrMesClientSecret: "",
        erorrMesUrlIn: "",
        erorrMesUrlOut: "",
        erorrNote: "",
      };
    },
    methods: {
      close() {
        this.$emit("close", false);
      },
      getCategory() {
        categoryApi.getCategories().then((response) => {
          this.categories = response;
        });
      },
      setInformationData() {
        if (this.information) {
          this.id = this.information.id;
          this.categoryId = this.information.category.id;
          this.clientId = this.information.clientId.trim();
          this.clientSecret = this.information.clientSecret.trim();
          this.urlIn = this.information.urlIn.trim();
          this.urlOut = this.information.urlOut.trim();
          this.note = this.information.note.trim();
        }
      },
      handleOnSubmit() {
        if (this.validateData()) {
          let infor = {
            categoryId: this.categoryId,
            clientId: this.categoryId,
            clientSecret: this.clientSecret,
            urlIn: this.urlIn,
            urlOut: this.urlOut,
            note: this.note,
          };
          if (this.id) {
            infor["id"] = this.id;
          }
          this.handleAddInformation(infor);
        }
      },
      validateData() {
        let count = 0;
        if (!this.categoryId) {
          this.errorMesCate = "Please select category";
          count++;
        }
        if (!this.clientId) {
          this.erorrMesClientId = "Please input Client Id";
          count++;
        }
        if (!this.clientSecret) {
          this.erorrMesClientSecret = "Please input Client Secret";
          count++;
        }
        if (!this.urlIn) {
          this.erorrMesUrlIn = "Please input URL In";
          count++;
        }
        if (!this.urlOut) {
          this.erorrMesUrlOut = "Please input URL Out";
          count++;
        }
        if (count > 0) {
          return false;
        }
        return true;
      },
    },
  };
</script>
<style>
  .box-form {
    width: 100%;
    height: 100vh;
    background-color: rgba(7, 7, 7, 0.5);
    margin: 0;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
  }

  .box-sm-form {
    z-index: 1000;
    width: 500px;
    background-color: white;
    padding: 2rem;
    height: fit-content;
    overflow: auto;
    border-radius: 5px;
  }

  .box-medium {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .button-box {
    display: flex;
    justify-content: space-between;
  }

  .errorMes {
    color: red;
    font-size: 13px;
  }

  .message-error {
    color: red;
    font-size: 14px;
    text-align: center;
    padding: .5rem;
    background: rgb(252, 196, 196);
    margin-bottom: 1rem;
  }
</style>
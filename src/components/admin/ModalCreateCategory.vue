<template lang="">
  <div class="box-form">
    <div class="box-medium">
      <div class="box-sm-form">
        <form @submit.prevent="handleOnSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" v-model="name" class="form-control" id="name">
            <div class="errorMes"><span>{{erorrMesName}}</span></div>
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
  export default {
    created() {
      this.setCateogryData();
    },
    props: ["category", "handleAddCategory", "errorMessForm"],
    data() {
      return {
        id: "",
        name: "",
        erorrMesName: "",
      };
    },
    methods: {
      close() {
        this.$emit("close", false);
      },
      setCateogryData() {
        if (this.category) {
          this.id = this.category.id;
          this.name = this.category.name;
        }
      },
      handleOnSubmit() {
        if (this.validateData()) {
          let infor = {
            name: this.name,
          };
          if (this.id) {
            infor["id"] = this.id;
          }
          this.handleAddCategory(infor);
        }
      },
      validateData() {
        if (!this.name) {
          this.erorrMesName = "Please input name";
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
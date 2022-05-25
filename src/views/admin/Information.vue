<template lang="">
    <div class="p-2">
        <ModalCreateInformation @close="showModal = $event" v-if="showModal" :errorMessForm="errorMessForm" :handleAddInformation="handleAddInformation" :information="information"/>
        <div class="text-end">
            <button @click="handleShowModal" class="btn btn-primary">Create New</button>
        </div>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Client Id</th>
                    <th scope="col">Client Secret</th>
                    <th scope="col">Url In</th>
                    <th scope="col">Url out</th>
                    <th scope="col">Note</th>
                    <th scope="col">Action</th>
                    <!-- <th scope="col">Last</th>
                    <th scope="col">Handle</th> -->
                  </tr>
                </thead>
                <tbody>
                    <tr v-if="informationList.length > 0" v-for="item in informationList" :key="item">
                        <InformationItem :handleEdit="handleEdit" :handleDelete="handleDelete" :item="item"/>
                    </tr>
                    <tr v-if="informationList.length <= 0" >
                        <td class="text-center" colspan="7">There is nothing here</td>
                    </tr>
                </tbody>
              </table>
    </div>
</template>
<script>
import InformationItem from "@/components/admin/InformationItem.vue";
import informationApi from "@/apis/admin/informationApisAdmin";
import ModalCreateInformation from "@/components/ModalCreateInformation.vue";
import loginApi from "@/apis/authApis";
export default {
  created() {
    this.getInformations();
  },
  data() {
    return {
      informationList: [],
      showModal: false,
      information: "",
      errorMessForm: "",
    };
  },
  components: { InformationItem, ModalCreateInformation },
  methods: {
    getInformations() {
      informationApi.getInformations().then((res) => {
        this.informationList = res;
      });
    },
    handleShowModal() {
      this.showModal = true;
      this.information = "";
      this.errorMessForm = "";
    },
    handleAddInformation(params) {
      informationApi
        .addInformation(params)
        .then(() => {
          this.getInformations();
          this.showModal = false;
          this.errorMessForm = "";
        })
        .catch((err) => {
          this.errorMessForm = err.response.data.message;
        });
    },
    handleEdit(id) {
      informationApi
        .getOne(id)
        .then((res) => {
          this.information = res;
          this.showModal = true;
          this.errorMessForm = "";
        })
        .catch((err) => {
          this.errorMessForm = err.response.data.message;
        });
    },
    handleDelete(id) {
      informationApi.deleteOne(id).then(() => {
        this.getInformations();
      });
    },
 
  },
};
</script>
<style>
table {
  width: 100%;
}
</style>
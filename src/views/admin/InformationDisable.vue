<template lang="">
    <div class="p-2">
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
                        <InformationItem :handleActive="handleActive" :handleReject="handleReject" :item="item"/>
                    </tr>
                    <tr v-if="informationList.length <= 0" >
                        <td class="text-center" colspan="7">There is nothing here</td>
                    </tr>
                </tbody>
              </table>
    </div>
</template>
<script>
import InformationItem from "@/components/admin/InformationItemDisable.vue";
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
    };
  },
  components: { InformationItem, ModalCreateInformation },
  methods: {
    getInformations() {
      const status = 3;
      informationApi.getInformations(status).then((res) => {
        this.informationList = res;
      });
    },
    handleActive(id) {
      informationApi
        .active(id)
        .then((res) => {
          this.getInformations();
        })
        .catch((err) => {
          this.errorMessForm = err.response.data.message;
        });
    },
    handleReject(id) {
      informationApi
        .reject(id)
        .then((res) => {
          this.getInformations();
        })
        .catch((err) => {
          this.errorMessForm = err.response.data.message;
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
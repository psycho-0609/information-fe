<template lang="">
    <div class="p-2">
        <ModalCreateCategory @close="showModal = $event" v-if="showModal" :errorMessForm="errorMessForm" :handleAddCategory="handleAddCategory" :category="category"/>
        <div class="text-end">
            <button @click="handleShowModal" class="btn btn-primary">Create New</button>
        </div>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <!-- <th scope="col">Last</th>
                    <th scope="col">Handle</th> -->
                  </tr>
                </thead>
                <tbody>
                    <tr v-if="categoryList.length > 0" v-for="item in categoryList" :key="item">
                        <CategoryItem :handleEdit="handleEdit" :handleDelete="handleDelete" :item="item"/>
                    </tr>
                    <tr v-if="categoryList.length <= 0" >
                        <td class="text-center" colspan="7">There is nothing here</td>
                    </tr>
                </tbody>
              </table>
    </div>
</template>
<script>
import categoryApi from "@/apis/admin/categoryApisAdmin";
import ModalCreateCategory from "@/components/admin/ModalCreateCategory.vue";
import CategoryItem from "@/components/admin/CategoryItem.vue";
export default {
  created() {
    this.getCategories();
  },
  data() {
    return {
      categoryList: [],
      showModal: false,
      category: "",
      errorMessForm: "",
    };
  },
  components: { CategoryItem, ModalCreateCategory },
  methods: {
    getCategories() {
      categoryApi.getCategories.then((res) => {
        this.categoryList = res;
      });
    },
    handleShowModal() {
      this.showModal = true;
      this.category = "";
      this.errorMessForm = "";
    },
    handleAddCategory(params) {
      categoryApi
        .addCategory(params)
        .then(() => {
          this.getCategories();
          this.showModal = false;
          this.errorMessForm = "";
        })
        .catch((err) => {
          this.errorMessForm = err.response.data.message;
        });
    },
    handleEdit(id) {
      categoryApi
        .getOne(id)
        .then((res) => {
          this.category = res;
          this.showModal = true;
          this.errorMessForm = "";
        })
        .catch((err) => {
          this.errorMessForm = err.response.data.message;
        });
    },
    handleDelete(id) {
      categoryApi
        .deleteOne(id)
        .then(() => {
          this.getCategories();
        })
        .catch((err) => {
        //   this.errorMessForm = err.response.data.message;
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
<template lang="">
    <td>{{item.category.name}}</td>
    <td>{{item.clientId}}</td>
    <td>{{item.clientSecret}}</td>
    <td>{{item.urlIn}}</td>
    <td>{{item.urlOut}}</td>
    <td>{{item.note}}</td>
    <!-- <td>{{item.user}}</td> -->
    <!-- <td>{{item.createAt}}</td> -->
    <!-- <td>{{item.updateAt}}</td> -->
    <td class="btn-box">
        <button @click="handleEditClick" class="btn btn-warning btn-edit">Edit</button>
        <button @click="handleDeleteClick" class="btn btn-danger">Delete</button>
    </td>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
    handleEdit: {
      type: Function,
    },
    handleDelete: {
      type: Function,
    },
  },
  methods: {
    handleEditClick() {
      this.handleEdit(this.item.id);
    },
    handleDeleteClick() {
      if (confirm("Are you sure to delete")) {
        this.handleDelete(this.item.id);
      }
    },
  },
};
</script>
<style>
.btn-edit {
  margin-right: 1rem;
}
.btn-box {
  width: fit-content;
}
</style>
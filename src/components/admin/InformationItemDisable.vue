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
        <button @click="handleActiveClick" class="btn btn-primary btn-edit">Accept</button>
        <button @click="handleRejectClick" class="btn btn-secondary btn-edit">Reject</button>
    </td>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
    handleActive: {
      type: Function,
    },
    handleReject: {
      type: Function,
    },
  },
  methods: {
    handleActiveClick() {
      this.handleActive(this.item.id);
    },
    handleRejectClick() {
      this.handleReject(this.item.id);
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
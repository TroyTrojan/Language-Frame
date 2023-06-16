<template>
  <div>
    首页
    <ul>
      <li>
        <router-link :to="{ path: '/ticketList', query: { id: '001' } }">这是一条列表</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>
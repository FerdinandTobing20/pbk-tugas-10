<template>
  <button @click="logout" class="btn-logout">Logout</button>
</template>

<script>
export default {
  name: "LogoutButton",
  methods: {
    logout() {
      localStorage.removeItem("userRole");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.btn-logout {
  background-color: #e74c3c;
  border: none;
  padding: 8px 16px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}
.btn-logout:hover {
  background-color: #c0392b;
}
</style>

<template>
  <div class="page login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="email"
          placeholder="Masukkan email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Kata Sandi</label>
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="Masukkan kata sandi"
          required
        />
      </div>
      <button type="submit" class="btn-primary">Masuk</button>
    </form>
        <router-view />
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      const { email } = this;

      // Simulasi login dan simpan role ke localStorage
      if (email === "student@example.com") {
        localStorage.setItem("userRole", "student");
        this.$router.push("/student");
      } else if (email === "lecturer@example.com") {
        localStorage.setItem("userRole", "lecturer");
        this.$router.push("/lecturer");
      } else if (email === "admin@example.com") {
        localStorage.setItem("userRole", "admin");
        this.$router.push("/admin");
      } else {
        alert("Login gagal! Email tidak dikenal.");
      }

      this.email = "";
      this.password = "";
    },
  },
};
</script>

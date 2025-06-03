<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Login ke EduManage</h2>
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
    </div>
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

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
}

.login-card {
  background: white;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
  color: #2c3e50;
}

.login-form .form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.login-form label {
  margin-bottom: 5px;
  font-weight: 600;
}

.login-form input {
  padding: 10px;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.login-form input:focus {
  border-color: #3498db;
  outline: none;
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>

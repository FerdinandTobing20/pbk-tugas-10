<template>
  <div id="app">
    <header class="app-header">
      <div class="logo">Edumanage</div>
      <nav class="nav-links">
        <router-link to="/" exact-active-class="active-link" exact>Login</router-link>
        <router-link to="/student" active-class="active-link">Student</router-link>
        <router-link to="/lecturer" active-class="active-link">Lecturer</router-link>
        <router-link to="/admin" active-class="active-link">Admin</router-link>
      </nav>
      <LogoutButton v-if="isLoggedIn" />
    </header>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import LogoutButton from './components/LogoutButton.vue'

export default {
  name: "App",
  components: { LogoutButton },
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem("userRole");
    }
  }
};
</script>


<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f9fc;
  color: #2c3e50;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3498db;
  color: white;
  padding: 14px 24px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  cursor: default;
  user-select: none;
}

.nav-links {
  display: flex;
  gap: 22px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 6px 12px;
  border-radius: 8px;
  transition: background-color 0.25s ease;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.active-link {
  background-color: rgba(255, 255, 255, 0.35);
}

.main-content {
  flex-grow: 1;
  padding: 25px 15px 40px 15px;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
}

.app-footer {
  text-align: center;
  padding: 15px 10px;
  background-color: #ecf0f1;
  color: #7f8c8d;
  font-size: 0.9rem;
  user-select: none;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

@media (max-width: 600px) {
  .nav-links {
    gap: 12px;
  }
  .nav-links a {
    font-size: 0.9rem;
    padding: 5px 8px;
  }
}
</style>

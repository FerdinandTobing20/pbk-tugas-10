<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <div class="profile-section">
        <div class="avatar">👨‍🏫</div>
        <h3></h3>
        <p>Teknik Informatika</p>
      </div>

      <nav class="menu">
        <router-link to="/lecturer" exact-active-class="active" class="menu-item">Dashboard</router-link>
        <router-link to="/lecturer/courses" class="menu-item">Mata Kuliah</router-link>
        <router-link to="/lecturer/grades" class="menu-item">Input Nilai</router-link>
        <router-link to="/lecturer/students" class="menu-item">Mahasiswa</router-link>
        <router-link to="/lecturer/profile" class="menu-item">Profil</router-link>
      </nav>
    </aside>

    <main class="main-content">
      <h1>Dashboard Dosen</h1>
      <p>Selamat datang kembali, <strong>M RIZKI FADHILAH, S.T.,M.Eng</strong>!</p>

      <div class="summary-cards">
        <div class="card">
          <h2>3</h2>
          <p>Mata Kuliah Diampu</p>
        </div>
        <div class="card">
          <h2>120</h2>
          <p>Mahasiswa Terdaftar</p>
        </div>
        <div class="card">
          <h2>30</h2>
          <p>Nilai Terkirim</p>
        </div>
      </div>

      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'LecturerDashboard',
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f2f5;
  color: #333;
}

/* Sidebar kiri */
.sidebar {
  width: 250px;
  background: #2c3e50;
  color: white;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-section {
  text-align: center;
  margin-bottom: 3rem;
}

.avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.profile-section h3 {
  margin: 0 0 0.25rem;
  font-weight: 700;
}

.profile-section p {
  margin: 0;
  font-size: 0.9rem;
  color: #a0aec0;
}

.menu {
  width: 100%;
}

.menu-item {
  display: block;
  padding: 0.9rem 1rem;
  margin-bottom: 0.5rem;
  color: #cbd5e0;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.menu-item:hover,
.menu-item.active {
  background-color: #4a90e2;
  color: white;
}

/* Konten utama kanan */
.main-content {
  flex-grow: 1;
  padding: 2rem 3rem;
}

.main-content h1 {
  font-size: 2.5rem;
  margin-bottom: 0.3rem;
}

.main-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

/* Ringkasan kartu */
.summary-cards {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.card {
  background: white;
  flex: 1;
  padding: 1.8rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
  text-align: center;
  cursor: default;
  user-select: none;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 15px rgb(0 0 0 / 0.15);
}

.card h2 {
  font-size: 2.8rem;
  margin-bottom: 0.4rem;
  color: #2c3e50;
}

.card p {
  font-size: 1rem;
  color: #718096;
}
</style>

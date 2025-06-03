<template>
  <div class="admin-dashboard-container">
    <aside class="sidebar">
      <div class="profile-section">
        <div class="avatar">🛡️</div>
        <h3>Admin</h3>
        <p>Administrator Sistem</p>
      </div>

      <nav class="menu">
        <router-link to="/admin" exact-active-class="active" class="menu-item">Dashboard</router-link>
        <router-link to="/admin/students" class="menu-item">Data Mahasiswa</router-link>
        <router-link to="/admin/lecturers" class="menu-item">Data Dosen</router-link>
        <router-link to="/admin/courses" class="menu-item">Mata Kuliah</router-link>
        <router-link to="/admin/reports" class="menu-item">Laporan</router-link>
      </nav>
    </aside>

    <main class="main-content">
      <h1>Dashboard Admin</h1>
      <p>Selamat datang kembali, <strong>Admin</strong>!</p>

      <div class="summary-cards">
        <div class="card">
          <h2>1500</h2>
          <p>Mahasiswa Terdaftar</p>
        </div>
        <div class="card">
          <h2>85</h2>
          <p>Dosen Aktif</p>
        </div>
        <div class="card">
          <h2>120</h2>
          <p>Mata Kuliah</p>
        </div>
        <div class="card">
          <h2>20</h2>
          <p>Laporan Bulanan</p>
        </div>
      </div>

      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
};
</script>

<style scoped>
.admin-dashboard-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  color: #2d3748;
}

/* Sidebar kiri */
.sidebar {
  width: 260px;
  background-color: #1a202c;
  color: #e2e8f0;
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
  padding: 1rem 1.2rem;
  margin-bottom: 0.5rem;
  color: #cbd5e0;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.menu-item:hover,
.menu-item.active {
  background-color: #3182ce;
  color: white;
}

/* Konten utama kanan */
.main-content {
  flex-grow: 1;
  padding: 2.5rem 3.5rem;
}

.main-content h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.main-content p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #4a5568;
}

/* Ringkasan kartu */
.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.card {
  background-color: white;
  padding: 2rem 2.5rem;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 0.1);
  text-align: center;
  cursor: default;
  user-select: none;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 25px rgb(0 0 0 / 0.15);
}

.card h2 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #2c5282;
}

.card p {
  font-size: 1.1rem;
  color: #718096;
}
</style>

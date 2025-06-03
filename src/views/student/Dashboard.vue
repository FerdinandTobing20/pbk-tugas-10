<template>
  <div class="student-dashboard">
    <aside class="sidebar">
      <h2>Mahasiswa</h2>
      <ul>
        <li><router-link to="/student">Dashboard</router-link></li>
        <li><router-link to="/student/schedule">Jadwal</router-link></li>
        <li><router-link to="/student/krs">KRS</router-link></li>
        <li><router-link to="/student/grades">Nilai</router-link></li>
        <li><router-link to="/student/profile">Profil</router-link></li>
      </ul>
    </aside>

    <main class="content">
      <h1>Dashboard Mahasiswa</h1>
      <p>Selamat datang, <strong>{{ profile.name }}</strong>!</p>
      <ul>
        <li><strong>Nomor Induk:</strong> {{ profile.studentId }}</li>
        <li><strong>Jurusan:</strong> {{ profile.major }}</li>
        <li><strong>Semester:</strong> {{ profile.semester }}</li>
      </ul>

      <!-- Untuk menampilkan child route (schedule, grades, etc) -->
      <router-view />
    </main>
  </div>
</template>

<script>
const studentProfile = {
  name: "Ferdinand Tobing",
  studentId: "233510397",
  major: "Teknik Informatika",
  semester: 4
};

export default {
  name: 'StudentDashboard',
  data() {
    return {
      profile: studentProfile,
    };
  }
};
</script>

<style scoped>
.student-dashboard {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 200px;
  background: #2c3e50;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.sidebar h2 {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 12px;
}

.sidebar a {
  color: white;
  text-decoration: none;
}

.sidebar a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

.content {
  flex: 1;
  padding: 30px;
  background: #f9fafb;
}
</style>

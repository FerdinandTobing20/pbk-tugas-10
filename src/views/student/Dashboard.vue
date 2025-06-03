<template>
  <div>
    <h1>Dashboard Mahasiswa</h1>
    <p>Selamat datang, {{ profile.name }}!</p>
    <ul>
      <li><strong>Nomor Induk:</strong> {{ profile.studentId }}</li>
      <li><strong>Jurusan:</strong> {{ profile.major }}</li>
      <li><strong>Semester:</strong> {{ profile.semester }}</li>
    </ul>

    <!-- Tambahkan ini agar halaman child tampil -->
    <router-view />
  </div>
</template>

<script>
const studentProfile = {
  name: "Ahmad Zulkarnain",
  studentId: "20211040123",
  major: "Teknik Informatika",
  semester: 6
};

export default {
  name: 'StudentDashboard',
  data() {
    return {
      profile: studentProfile,
    }
  }
}
</script>

<template>
  <div>
    <h1>Profil Mahasiswa</h1>
    <ul>
      <li><strong>Nama:</strong> {{ profile.name }}</li>
      <li><strong>NIM:</strong> {{ profile.studentId }}</li>
      <li><strong>Email:</strong> {{ profile.email }}</li>
      <li><strong>Jurusan:</strong> {{ profile.major }}</li>
      <li><strong>Semester:</strong> {{ profile.semester }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StudentProfile',
  data() {
    return {
      profile: {
        name: "Ahmad Zulkarnain",
        studentId: "20211040123",
        email: "ahmad.zul@student.edu",
        major: "Teknik Informatika",
        semester: 6
      }
    };
  }
};
</script>

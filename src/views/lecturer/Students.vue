<template>
  <section class="lecturer-students container">
    <h2 class="title">Daftar Mahasiswa</h2>
    <ul class="student-list">
      <li>ferdinandtobing (233510397)</li>
      <li>Budi Santoso (190002)</li>
      <li>Citra Dewi (190003)</li>
    </ul>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'LecturerStudents',
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

.title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.student-list {
  list-style-type: disc;
  padding-left: 1.5rem;
  font-size: 1.1rem;
  color: #444;
}

.student-list li {
  margin-bottom: 0.5rem;
}
</style>

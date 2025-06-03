<template>
  <section class="lecturer-grades container">
    <h2 class="title">Input Nilai Mahasiswa</h2>
    <p>Silakan pilih mata kuliah dan masukkan nilai mahasiswa.</p>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'LecturerGrades',
}
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.title {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #555;
}
</style>

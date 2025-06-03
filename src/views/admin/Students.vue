<template>
  <section class="admin-students container">
    <h2>Manajemen Mahasiswa</h2>
    <ul class="student-list">
      <li>Raka Putra - <span class="student-id">210001</span></li>
      <li>Mira Sari - <span class="student-id">210002</span></li>
      <li>Dito Pratama - <span class="student-id">210003</span></li>
    </ul>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'AdminStudents',
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 0.1);
  color: #2d3748;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2b6cb0;
}

.student-list {
  list-style: none;
  padding-left: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.student-list li {
  padding: 8px 12px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
}

.student-id {
  color: #4a5568;
  font-weight: 400;
}
</style>

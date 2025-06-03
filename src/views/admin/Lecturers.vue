<template>
  <section class="admin-lecturers container">
    <h2>Manajemen Dosen</h2>
    <ul class="lecturer-list">
      <li v-for="(lecturer, index) in lecturers" :key="index" class="lecturer-item">
        {{ lecturer }}
      </li>
    </ul>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'AdminLecturers',
  data() {
    return {
      lecturers: [
        "Dr. Ahmad Fauzi",
        "Dra. Siti Nurhaliza",
        "M. Arifin, M.Kom",
      ],
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2d3748;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 0.1);
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #2b6cb0;
}

.lecturer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lecturer-item {
  padding: 12px 18px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #f7fafc;
  font-weight: 600;
  transition: background-color 0.3s ease;
  cursor: default;
}

.lecturer-item:hover {
  background-color: #bee3f8;
}
</style>

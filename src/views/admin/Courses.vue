<template>
  <section class="admin-courses container">
    <h2>Manajemen Mata Kuliah</h2>
    <ul class="course-list">
      <li v-for="(course, index) in courses" :key="index" class="course-item">
        {{ course }}
      </li>
    </ul>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'AdminCourses',
  data() {
    return {
      courses: [
        "Pemrograman Berbasis Komponen",
        "Jaringan Komputer",
        "Rekayasa Perangkat Lunak",
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

.course-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.course-item {
  padding: 12px 18px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #f7fafc;
  font-weight: 600;
  transition: background-color 0.3s ease;
  cursor: default;
}

.course-item:hover {
  background-color: #bee3f8;
}
</style>

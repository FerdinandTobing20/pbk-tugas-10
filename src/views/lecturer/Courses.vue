<template>
  <div>
    <h2>Mata Kuliah Diampu</h2>
    <ul>
      <li v-for="(course, index) in courses" :key="index">
        {{ course }}
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'LecturerCourses',
  data() {
    return {
      courses: [
        'Pemrograman Berbasis Komponen'
      ]
    }
  }
}
</script>

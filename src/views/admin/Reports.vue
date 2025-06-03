<template>
  <div>
    <h2>Laporan Sistem</h2>
    <p>Berikut ini laporan ringkasan aktivitas akademik:</p>
    <ul>
      <li>Total Mahasiswa: 240</li>
      <li>Total Dosen: 35</li>
      <li>Total Mata Kuliah: 58</li>
    </ul>
  </div>
      <router-view />
</template>

<script>
export default {
  name: 'AdminReports'
}
</script>


<style scoped>
h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}
p {
  color: #555;
}
</style>

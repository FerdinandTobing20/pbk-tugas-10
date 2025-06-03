<template>
  <section class="admin-reports container">
    <h2>Laporan Sistem</h2>
    <p>Berikut ini laporan ringkasan aktivitas akademik:</p>
    <ul class="report-list">
      <li><strong>Total Mahasiswa:</strong> 240</li>
      <li><strong>Total Dosen:</strong> 35</li>
      <li><strong>Total Mata Kuliah:</strong> 58</li>
    </ul>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'AdminReports',
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
  margin-bottom: 0.75rem;
  color: #2b6cb0;
}

p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #4a5568;
}

.report-list {
  list-style: none;
  padding-left: 0;
  font-weight: 600;
}

.report-list li {
  margin-bottom: 10px;
  font-size: 1.05rem;
  border-left: 4px solid #2b6cb0;
  padding-left: 10px;
}
</style>

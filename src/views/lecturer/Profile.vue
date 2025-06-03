<template>
  <section class="lecturer-profile container">
    <h2 class="title">Profil Dosen</h2>
    <ul class="profile-list">
      <li><strong>Nama:</strong>M RIZKI FADHILAH, S.T.,M.Eng</li>
      <li><strong>NIP:</strong> 19800301 201001 1 002</li>
      <li><strong>Fakultas:</strong> TEKNIK INFORMATIKA</li>
      <li><strong>Email:</strong> m.rizki.fadhilah@example.com</li>
    </ul>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'LecturerProfile',
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
  margin-bottom: 1rem;
}

.profile-list {
  list-style: none;
  padding: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.profile-list li {
  margin-bottom: 0.7rem;
}

strong {
  color: #34495e;
}
</style>

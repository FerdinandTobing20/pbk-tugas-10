<template>
  <div>
    <h1>Halaman KRS</h1>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th>Kode Mata Kuliah</th>
          <th>Nama Mata Kuliah</th>
          <th>SKS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in krs" :key="index">
          <td>{{ item.code }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.credits }}</td>
        </tr>
      </tbody>
    </table>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'StudentKRS',
  data() {
    return {
      krs: studentKRS,
    }
  }
}
</script>

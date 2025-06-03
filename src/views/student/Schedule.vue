<template>
  <div>
    <h1>Jadwal Kuliah</h1>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th>Hari</th>
          <th>Mata Kuliah</th>
          <th>Waktu</th>
          <th>Ruang</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in schedule" :key="index">
          <td>{{ item.day }}</td>
          <td>{{ item.course }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.room }}</td>
        </tr>
      </tbody>
    </table>
  </div>
      <router-view />
</template>

<script>

export default {
  name: 'StudentSchedule',
  data() {
    return {
      schedule: studentSchedule,
    }
  }
}
</script>

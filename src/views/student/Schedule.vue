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
</template>

<script>
export default {
  name: 'StudentSchedule',
  data() {
    return {
      schedule: [
        { day: "Senin", course: "Algoritma & Struktur Data", time: "08:00 - 10:00", room: "Lab 1" },
        { day: "Selasa", course: "Basis Data", time: "10:00 - 12:00", room: "Lab 2" },
        { day: "Rabu", course: "Pemrograman Web", time: "13:00 - 15:00", room: "Ruang 3A" },
        { day: "Kamis", course: "Sistem Operasi", time: "08:00 - 10:00", room: "Ruang 2B" },
        { day: "Jumat", course: "Kecerdasan Buatan", time: "09:00 - 11:00", room: "Lab AI" }
      ]
    };
  }
}
</script>

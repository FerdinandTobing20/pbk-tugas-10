<template>
  <div>
    <h1>Nilai Akademik</h1>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th>Mata Kuliah</th>
          <th>Nilai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in grades" :key="index">
          <td>{{ item.course }}</td>
          <td>{{ item.grade }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'StudentGrades',
  data() {
    return {
      grades: [
        { course: "Pemrograman Berbasis Komponen", grade: "A" },
        { course: "Basis Data", grade: "B+" },
        { course: "Pemrograman Web", grade: "A-" },
        { course: "Sistem Operasi", grade: "B" },
        { course: "Jaringan Komputer", grade: "A" }
      ]
    }
  }
}
</script>

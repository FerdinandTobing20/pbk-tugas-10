// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// General
import Login from '../views/Login.vue'

// Student
import StudentDashboard from '../views/student/Dashboard.vue'
import StudentSchedule from '../views/student/Schedule.vue'
import StudentKRS from '../views/student/KRS.vue'
import StudentGrades from '../views/student/Grades.vue'
import StudentProfile from '../views/student/Profile.vue'

// Lecturer
import LecturerDashboard from '../views/lecturer/Dashboard.vue'
import LecturerCourses from '../views/lecturer/Courses.vue'
import LecturerGrades from '../views/lecturer/Grades.vue'
import LecturerStudents from '../views/lecturer/Students.vue'
import LecturerProfile from '../views/lecturer/Profile.vue'

// Admin
import AdminDashboard from '../views/admin/Dashboard.vue'
import AdminStudents from '../views/admin/Students.vue'
import AdminLecturers from '../views/admin/Lecturers.vue'
import AdminCourses from '../views/admin/Courses.vue'
import AdminReports from '../views/admin/Reports.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },

  {
    path: '/student',
    component: StudentDashboard,
    children: [
      { path: 'schedule', name: 'StudentSchedule', component: StudentSchedule },
      { path: 'krs', name: 'StudentKRS', component: StudentKRS },
      { path: 'grades', name: 'StudentGrades', component: StudentGrades },
      { path: 'profile', name: 'StudentProfile', component: StudentProfile }
    ]
  },

  {
    path: '/lecturer',
    component: LecturerDashboard,
    children: [
      { path: '', name: 'LecturerDashboard', component: LecturerDashboard },
      { path: 'courses', name: 'LecturerCourses', component: LecturerCourses },
      { path: 'grades', name: 'LecturerGrades', component: LecturerGrades },
      { path: 'students', name: 'LecturerStudents', component: LecturerStudents },
      { path: 'profile', name: 'LecturerProfile', component: LecturerProfile }
    ]
  },

  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: '', name: 'AdminDashboard', component: AdminDashboard },
      { path: 'students', name: 'AdminStudents', component: AdminStudents },
      { path: 'lecturers', name: 'AdminLecturers', component: AdminLecturers },
      { path: 'courses', name: 'AdminCourses', component: AdminCourses },
      { path: 'reports', name: 'AdminReports', component: AdminReports }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

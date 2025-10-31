# EduTrack 🎓

A school management system to manage students, teachers, and parents, with features to track grades, attendance, and homework.  
The system provides different roles for **Admin**, **Teacher**, and **Parent**, helping to organize the educational process efficiently.

---

## 👥 Users & Roles

| User | Permissions |
|------|-------------|
| **Admin** | Add / edit / delete students, teachers, and parents. Manage subjects and view all data. |
| **Teacher** | Add grades, record attendance, assign homework, add new students if needed, view their own students. |
| **Parent** | View **only their children**’s grades, attendance, and homework **if the student exists in the system**. Cannot see other students. |

> **Note:** A parent can only view their children if the student is added to the system. Any student not added cannot be accessed.

---

## ✨ Features

- **Full user management**: Admin can add and edit students, teachers, and parents.  

- **Grades management**:  
  - Teachers can add grades for students.  
  - **Prevents duplicate grades** for the same student and subject.

- **Attendance management**:  
  - Record attendance or absence for each student daily.

- **Homework management**:  
  - Teachers can assign homework by subject.  
  - Students and parents can view homework **if the student exists in the system**.  

- **Parent dashboard**:  
  - Login for each parent account.  
  - Can view **only their children** if they exist in the system.  
  - View grades, attendance, and homework.  
  - Cannot edit any data or see other students.

- **Secure role-based access** using **JWT Authentication** and `[Authorize]`.

- **Professional project structure**:  
  - DTOs  
  - Services  
  - Repositories 
  - Controllers  


---

## 🛠️ Technologies Used

| Technology | Usage |
|-----------|-------|
| ASP.NET Core Web API | Backend development |
| Entity Framework Core | ORM for database |
| SQL Server | Database |
| AutoMapper | Mapping Models ↔ DTOs |
| JWT Authentication | Login & role-based authorization |
| Swagger / Postman | API testing |
| (Optional) Angular / React | Frontend |

---



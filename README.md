## 💼 Company Overview – Logo and quick payroll stats

Salary configuration and report generation
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.72.0-61dafb.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.0%2B-green.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.0-336791.svg)
![Hosted on Railway](https://img.shields.io/badge/Hosted%20on-Railway-0B0D0E.svg)

---

# 🏷️ Project Info

- **Team Name:** 41  
- **Team Members:** Nevil Sequeira, Harsh Jingar, Raj Patel, Shrey Shukla  
- **Problem Statement:**  Smart Human Resource Management System 
- **Reviewer Name:** Mayur |  | [@ampa-odoo](https://github.com/mrsr-odoo) |
- **Video Presentation Link:** https://drive.google.com/drive/folders/1VM9op0e-axKvj3bfrkEVPRD0j4fmVBWN?usp=sharing

---

## WorkZen aims to modernize and simplify how organizations manage people, 
processes, and payroll through a comprehensive, all-in-one Human Resource 
Management System (HRMS).
---

# ✨ Features

- 🔐 ** Secure Login – Role-based authentication using system-generated IDs; only Admin/HR can create users.
- 🧭 **Dashboard – Central hub with company logo, search, quick employee creation, and attendance access.
- 👩‍💼** Admin Panel – Manage employees, roles, salary setup, and company settings.
- 🧑‍💻** Employee Profile – View and update personal info, resume, and change password securely.
- 🕒** Attendance – Track check-in/out time, work hours, extra hours, and status (present/absent).
- 🏖️** Time Off – Apply, approve, or reject paid/sick/unpaid leave.
- 💰** Payroll – Auto-generate payslips based on attendance and salary components.
- 📊** Reports – Generate and print salary and attendance reports.
---

# 📄 Smart Attendance & Payroll System

- **Automated Attendance:** Track employee check-in/out times, work hours, and extra hours.  
- **Status Tracking:** Auto-mark present, absent, or on-leave status.  
- **Payroll Integration:** Attendance directly linked to salary calculation.  
- **Secure Access:** Only employees can mark attendance; admins can view all records.  

---

# 📊 Centralized Dashboard

- **Reporting:** Generate and print attendance or salary reports anytime.  
- **Employee View:** Check attendance, time-off balance, and personal info.  
- **Admin View:** Manage employees, payroll, and reports from one place.  
- **Payroll View:** Auto-generate payslips with detailed computation.  

---

# 🧭 Role-Based Management

- **Admin Panel:** Create users, assign roles, and manage departments.  
- **Employee Access:** View personal profile, attendance, and payslips.  
- **Time-Off Workflow:** Apply, approve, or reject leave requests with manager-level control.  
- **Security Control:** Auto-generated credentials with password management.  

---



# 🚀 Quick Start

## Prerequisites

- Node.js 18.0+
- PostgreSQL database
- Railway account (for deployment)

# Installation

## 1. Clone the repository

```bash
git clone https://github.com/Raj-49/WorkZen-Smart-Human-Resource-Management-System.git
```

##  2. Install backend dependencies
```bash
cd Backend
npm install
```

## 3. Install frontend dependencies
```bash
cd ../Frontend
npm install
```

## 4. Set up environment variables

### Backend (.env)

#### (Create a .env file in the Backend folder with the following content)
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/expense_db?schema=public"
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d
PORT=5000

# Email Configuration (for password reset and notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM=noreply@expensemanager.com

# Frontend URL (for password reset links)
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
#### (Create a .env file in the Frontend folder with the following content)
```bash
REACT_APP_API_URL=http://localhost:5000
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

## 5. Initialize database (Prisma)
```bash
cd Backend

# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view database
npx prisma studio
```

## 6. Start development servers

### Backend
```bash
cd Backend
npm run dev
# Server will start at http://localhost:5000
```

### Frontend
```bash
cd Frontend
npm start
# App will open at http://localhost:3000
```

## 7. Test the API (Optional)

The backend includes PowerShell test scripts:

```powershell
cd Backend

# 🧪 Test Authentication
.\test-auth.ps1

# 🧪 Test Employee Registration & Role Assignment
.\test-employee-management.ps1

# 🧪 Test Attendance Check-in / Check-out
.\test-attendance.ps1

# 🧪 Test Time-off Creation & Approval
.\test-timeoff.ps1

# 🧪 Test Payroll & Payslip Generation
.\test-payroll.ps1

# 🧪 Test Complete HRMS Workflow (Login → Attendance → Payroll)
.\test-workzen-workflow.ps1
```

# 🏗️ Architecture

Here’s an overview of the project architecture:

![Architecture Diagram](https://github.com/shrey3108/news-frontend/blob/main/b.png)

---

# 🎨 UI Components

EcoFinds features a clean, modern interface with sustainability at its core:

- **Color Palette:** Earth tones (greens, browns, tans)  
- **Typography:** Rounded, friendly fonts  
- **Icons:** Custom eco-friendly icon set  
- **Layout:** Card-based design for products  

---

# 🗂️ Database Schema

![Database Schema](https://github.com/shrey3108/news-frontend/blob/main/a.png)

# 🔌 API Endpoints

## Authentication
| Method | Endpoint                    | Description                |
|--------|-----------------------------|----------------------------|
| POST   | `/api/auth/signup`          | Company admin registration |
| POST   | `/api/auth/login`           | User login                 |
| POST   | `/api/auth/forgot-password` | Password reset request     |
| POST   | `/api/auth/reset-password`  | Password reset             |

## User Management
| Method | Endpoint                        | Description                |
|--------|---------------------------------|----------------------------|
| GET    | `/api/users`                    | Get all users (Admin only) |
| POST   | `/api/users`                    | Create new user (Admin)    |
| PUT    | `/api/users/:id`                | Update user role/manager   |
| POST   | `/api/users/:id/reset-password` | Reset user password        |

## Employee Management
| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| POST   | `/api/employees`       | Submit new expense      |
| GET    | `/api/employees`       | Get user's expenses     |
| GET    | `/api/employees/:id`   | Get expense details     |
| PUT    | `/api/employees/:id`   | Update expense          |
| Delete   | `/api/employees/:id`   | Delete an employee (Admin only) |

## Attendance Management
| Method | Endpoint                            | Description        |
|--------|-------------------------------------|--------------------|
|  POST    | `/api/attendance/checkin`            | Record employee check-in time |
| POST   | `/api/attendance/checkout` | Record employee check-on time    |
| GET   | `/api/attendance`  | Get logged-in user’s attendance records     |
| GET    | `/api/attendance/all`              | Get attendance of all employees (Admin only) |
| GET    | `/api/attendance/:date`              | Get attendance by date |

## Time-Off Management
| Method | Endpoint                        | Description                |
|--------|---------------------------------|----------------------------|
| POST   | `/api/timeoff`                    | Apply for time off |
| GET   | `/api/timeoff`                    | Get user’s time-off requests    |
| GET   | `/api/timeoff/all`                | Get all time-off requests (Admin only)   |
| PUT   | `/api/timeoff/:id/approve` | Approve time-off (Manager/Admin)       |

## Payroll Management
| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| POST   | `/api/payroll`       | Get all payroll records (Admin only)      |
| GET    | `/api/payroll/generate`       | Generate payslips for all employees     |
| GET    | `/api/payroll/:employeeId`   | Get specific employee’s payroll details     |
| PUT    | `/api/payslip/:id`   | View or print payslip details          |

---

# 🚀 Deployment

# 🎯 User Roles & Permissions

## 👑 Admin
-Create and manage employee accounts
-Assign roles (Employee, Manager, Payroll Officer)
-Configure salary structure and company settings
-Approve or reject time-off requests
-View and manage attendance, payroll, and reports
-Access all employee profiles and override any data if needed

## 👨‍💻 Employee
-Mark daily Check-In / Check-Out for attendance
-View personal attendance records and work hours
-Apply for Paid / Sick / Unpaid time-off
-Update personal information and resume
-View and download monthly payslips

---

# 🔄 Approval Workflow System

## ✅ Sequential Approval Flow

> **[ Employee → Check-In/Check-Out → Manager Review → Payroll Calculation → Payslip Generation ]**
---

## ⚙️ Conditional Rules
-Attendance auto-calculates work hours and extra hours
-Leave approval updates attendance and payroll automatically
-Salary components (Basic, HRA, Allowances, Deductions) update when wage changes
-Missing attendance or unpaid leaves reduce payable days automatically

# 📱 Key Screens

## 🧑‍💻 Employee Dashboard
- Check-In/Check-Out buttons
-Attendance history and time-off summary
-Payslip preview and download option
-Profile view and password management  

## 👑 Admin Configuration
- Company overview with logo and quick stats
-Employee management and payroll setup
-Salary configuration and report generation  
---




### Backend (Railway , node.js)
```bash
cd backend
npn run dev
```
1. Connect your repository to Railway  
2. Set environment variables in the Railway dashboard  
3. Deploy automatically from the `main` branch  

### Frontend (react.js)

```bash
cd frontend
npn run dev
```
# Team Members:

| S.No. | Name | Role | GitHub Username:octocat: |
| --------------- | --------------- | --------------- | --------------- |
| 1. | Nevil sequeira | Frontend Development | [@Nevil1234](https://github.com/Nevil1234) |
| 2. | Harsh Jingar  | Frontend Development | [@Harsh-Jingar-19](https://github.com/Harsh-Jingar-19) |
| 3. | Raj Patel | Backend Development | [@Raj-49](https://github.com/Raj-49)  |
| 4. | Shukla Shrey | Backend Development  | [@shrey3108](https://github.com/shrey3108)  |

# Maintainers ✨

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Nevil1234">
        <img src="https://avatars.githubusercontent.com/Nevil1234" width="100px;"><br>
        <sub><b>Nevil Sequeira</b></sub>
      </a><br>
      <a href="https://github.com/Nevil1234/Team-dotenv-odoo" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/Harsh-Jingar-19">
        <img src="https://avatars.githubusercontent.com/Harsh-Jingar-19" width="100px;"><br>
        <sub><b>Harsh Jingar</b></sub>
      </a><br>
      <a href="https://github.com/Nevil1234/Team-dotenv-odoo" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/Raj-49">
        <img src="https://avatars.githubusercontent.com/Raj-49" width="100px;"><br>
        <sub><b>Raj Patel</b></sub>
      </a><br>
      <a href="https://github.com/Nevil1234/Team-dotenv-odoo" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/shrey3108">
        <img src="https://avatars.githubusercontent.com/shrey3108" width="100px;"><br>
        <sub><b>Shrey Shukla</b></sub>
      </a><br>
      <a href="https://github.com/Nevil1234/Team-dotenv-odoo" title="Code">💻</a>
    </td>
  </tr>
</table>

# 📝 License

This project is licensed under the MIT License.  
https://opensource.org/licenses/MIT



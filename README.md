# 🚀 Space Odyssey — Réservation de Voyages Spatiaux

> A fully interactive space tourism booking platform — built with vanilla JavaScript, dynamic forms, CRUD reservations, and printable tickets.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-181717?style=flat-square&logo=github)

---

## 🌐 Live Demo

🔗 **[View the live site →](https://lioubiarabi.github.io/SpaceOdyssey-reservations/)**

---

## 📄 Pages

| Page | Description |
|---|---|
| 🏠 **Home** | Landing page with destinations overview and featured trips |
| 🌍 **Destinations** | Browse all available space destinations with details and pricing |
| 📋 **Booking** | Dynamic multi-step booking form with real-time price calculation |
| 🗂 **My Bookings** | Dashboard to view, edit, cancel and search all reservations |
| 🔐 **Login** | Simulated JS authentication with session persistence |
| ℹ️ **About** | AstroTech Studio presentation and mission |

---

## ✨ Features

### 🔐 Authentication
- Simulated login system with session persistence via `localStorage`
- Protected pages — redirect to login if not authenticated
- User-aware UI (show/hide nav items based on session)

### 📋 Dynamic Booking Form
- Context-aware fields (destination, spacecraft, accommodation, extras)
- Multi-passenger support
- **Real-time price calculation** as options are selected
- Full client-side validation with regex (email, dates, required fields)
- Clear error messages under each invalid field

### 🗂 Bookings CRUD
- **Create** — new reservation via booking form
- **Read** — view all bookings in a dashboard with cards
- **Update** — edit existing reservations via modal
- **Delete** — cancel with confirmation dialog
- Unique booking ID per reservation
- Persistent storage via `localStorage`

### 🎫 Printable Ticket
- Professional ticket template generated per booking
- Native browser print support

### 🔍 Search & Filter
- Search bookings by destination, date, or status
- Filter dashboard by booking status
- Empty state message when no results found

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure |
| TailwindCSS | Utility-first responsive styling |
| JavaScript ES6+ | DOM manipulation, events, logic |
| localStorage | Client-side data persistence |
| JSON | Destinations, spacecraft & booking options data |
| GitHub Pages | Deployment and hosting |

---

## 🎯 Project Context

Built as part of the **[2023] Développeur Web et Web Mobile** curriculum at **Youcode**.

The brief: transform the existing Space Odyssey HTML/CSS site into a fully interactive booking application using modern JavaScript — keeping the original design while adding authentication, dynamic forms, CRUD operations, and printable tickets.

**Duration:** 5 days (Nov 7–14, 2025)

---

## 📁 Project Structure

```
SpaceOdyssey-reservations/
├── index.html          # Home — landing page
├── destinations.html   # Space destinations
├── booking.html        # Dynamic booking form
├── mybookings.html     # Bookings dashboard (CRUD)
├── login.html          # Simulated authentication
├── about.html          # About AstroTech Studio
└── assets/
    ├── css/            # Stylesheets
    ├── js/             # JavaScript modules
    ├── json/           # Data files (destinations, spacecraft...)
    └── images/         # Project images
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/lioubiarabi/SpaceOdyssey-reservations.git
cd SpaceOdyssey-reservations
```

Open `index.html` in your browser — no server or dependencies needed.

> 💡 Use the login page to create a session before accessing booking features.

---

## 💡 What I Learned

- Building a complete front-end app with simulated authentication and session management
- Implementing full CRUD operations using the DOM and `localStorage`
- Writing robust client-side form validation with regex patterns
- Managing complex application state without a framework
- Generating and printing dynamic content with native browser APIs
- Working with external JSON data files for dynamic content

---

## 👤 Author

**Lioubi Arabi** — Youcode Web Development Student  
[![GitHub](https://img.shields.io/badge/GitHub-lioubiarabi-181717?style=flat-square&logo=github)](https://github.com/lioubiarabi)

---

*Built with passion for space exploration and modern JavaScript 🚀🌌*

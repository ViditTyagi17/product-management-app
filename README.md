# 🛍️ Product Management App

A frontend **Product Management Application** built with **React** as part of a frontend internship assignment.  
The app allows users to add, edit, search, and view products in both list and card formats with pagination.

---

## 🚀 Live Demo

🔗 https://product-management-app-gamma-eight.vercel.app/

---

## 📂 GitHub Repository

🔗 https://github.com/ViditTyagi17/product-management-app

---

## ✨ Features

- Add new products
- Edit existing products
- Search products by **name or category**
- Debounced search (500ms)
- List view (table)
- Card view (grid)
- Pagination
- Form validation with error messages
- Empty state handling (No products found)
- Responsive UI

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS
- HTML5
- CSS3

---

## 🧠 Implementation Details

- Product data is stored in **local React state** (no backend / API)
- Single reusable form for **Add & Edit**
- `useEffect` used for:
  - Debounced search
  - Syncing edit form data
- Conditional rendering used for:
  - View toggle buttons
  - Empty search results
  - Pagination controls
- Fully responsive layout using Tailwind CSS utilities

---

## 📁 Project Structure
```
src/
│
├── components/
│ ├── ProductForm.jsx
│ ├── ProductTable.jsx
│ └── ProductCard.jsx
│
├── data/
│ └── initialProducts.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Run Locally

```bash
git clone  https://github.com/ViditTyagi17/product-management-app.git
cd product-management-app
npm install
npm run dev
```

## 📌 Notes

- No backend or API integration is used

- All data resets on page refresh (no backend used, as per assignment scope)

- Focused on clean logic, clarity, and usability

## 👤 Author

- Vidit Tyagi
- Frontend Developer (Internship Applicant)
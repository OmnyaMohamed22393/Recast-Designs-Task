# Recast Designs — E-commerce Frontend Challenge

A high-fidelity, responsive e-commerce product section built with **Vanilla JavaScript (OOP)**, featuring dynamic product rendering and a persistent shopping cart system.

## 🚀 Key Features

* **Dynamic UI Rendering**: Products are not hard-coded; they are fetched and rendered dynamically from a data constant to ensure scalability.
* **Class-Based Architecture**: Implemented a robust `CartManager` and `ProductRenderer` using ES6 Classes to ensure modularity and clean code separation.
* **Cart Persistence**: Full "Add to Cart" logic with real-time UI updates (cart count/list) using `localStorage` for data persistence.
* **Pixel-Perfect & Responsive**: A fully responsive layout built with CSS Grid/Flexbox, ensuring a seamless luxury experience across all breakpoints.

## 🛠 Technical Implementation & Challenges

### **Design Scaling & Viewport Mapping**
During development, I observed that the Figma source frames utilized a non-standard canvas width (e.g., **3704px** for Desktop). To maintain the **Pixel-Perfect** requirement on standard displays:
- I implemented a **Responsive Scaling** approach.
- All proportions, ratios, and geometric rotations (e.g., the specific angles for rings) were mapped from the large-scale design to a standard **1440px** viewport.
- This ensured that the visual integrity and luxury aesthetic and spatial relationships were preserved without sacrificing usability on actual hardware.

### **Advanced Geometry**
To match the artistic direction of the "Ring Collection":
- Used precise CSS `transform` values (rotations and scales) derived from Figma.
- Leveraged `transform-origin` and `object-fit` to ensure consistent alignment of products regardless of their rotation angle.

## 📂 Project Structure
* `index.html`: Semantic HTML5 structure.
* `assets/js/script.js`: Contains the `CartManager` and `ProductRenderer` classes.
* `assets/css/style.css`: Custom CSS3 including the luxury dark theme and responsive queries.
* `assets/fonts/`: Avenir Light integration for consistent branding.

## 🖥 Developer API (Console Access)
You can interact with the global `RECAST_CART` instance directly:
- `RECAST_CART.get()` — View current state.
- `RECAST_CART.clear()` — Reset cart.
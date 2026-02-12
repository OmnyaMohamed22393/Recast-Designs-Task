# Recast Designs — Frontend Demo

Short description:
This is a small frontend demo showcasing a dynamic product gallery (rings) and a local client-side shopping cart using `localStorage`.

Features

- Dynamic product rendering from a JavaScript data array (`assets/js/script.js`).
- `CartManager` (class-based) handles cart state, badge updates, preview, and item removal.
- `ProductRenderer` renders product cards into the `.products-grid` container.
- Cart state is persisted in `localStorage` under the key `recast_cart_v1`.
- Responsive CSS rules are included to improve layout on smaller screens.

Running the project

1. Open `index.html` in your browser (no server required).
2. Click an "Add To Cart" button and click the cart area to open the preview.

Developer API (use in browser console)

- `RECAST_CART.get()` — returns current cart state.
- `RECAST_CART.add({name, price, img})` — programmatically add an item.
- `RECAST_CART.removeAt(index)` — remove an item by index from the cart.
- `RECAST_CART.clear()` — clear the cart.

Developer notes

- The JavaScript is organized into two classes inside `assets/js/script.js`: `ProductRenderer` and `CartManager`, matching a class-based architecture requirement.
- If you prefer separating data and logic, move the `products` array to a separate `assets/js/products.js` file and import it.

Files changed

- `assets/js/script.js` — product rendering and class-based cart manager.
- `assets/css/style.css` — cart badge/preview styles and responsive tweaks.

Next steps (optional)

- Add confirmation before removing items, quantity controls, or a full cart page.
- Load product data from an external JSON file or API endpoint.

If you want any of these enhancements, tell me which one and I'll implement it.

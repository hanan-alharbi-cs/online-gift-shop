# Online Gift Shop | E-Commerce Website

A simple web-based gift shopping application built using HTML, CSS, and JavaScript.

The project demonstrates the core concepts of a front-end shopping experience, allowing users to browse gift product information, add products to a shopping cart, remove selected items, and view the calculated total price.

The application uses JavaScript LocalStorage to preserve cart data in the browser.

**My Role:** Frontend Development

**GitHub Repository:** [hanan-alharbi-cs/online-gift-shop](https://github.com/hanan-alharbi-cs/online-gift-shop)

---

## Project Overview

Online Gift Shop is a front-end e-commerce project designed to demonstrate basic online shopping functionality.

The application organizes gift products into product data objects containing their names, prices, images, and categories.

Its shopping cart functionality allows users to add products, review selected items, remove products, and calculate the total price dynamically.

The project focuses on fundamental web development concepts, including DOM manipulation, JavaScript functions, browser storage, CSS styling, and responsive layouts.

## Problem Statement

Online shopping interfaces need to provide users with a simple way to browse products and manage their selections.

Even a basic shopping experience requires several interconnected functions, including:

- Presenting product information clearly.
- Displaying product images and prices.
- Adding selected products to a shopping cart.
- Keeping track of cart contents.
- Removing unwanted products.
- Calculating the total price of selected items.
- Preserving cart data between page visits.

## Proposed Solution

The project implements a lightweight gift shop interface using HTML, CSS, and JavaScript.

Product information is maintained in a JavaScript data structure, while cart operations are handled through dedicated functions.

LocalStorage is used to save the cart contents in the browser, allowing the application to retrieve previously selected items when the page is loaded again.

---

## Key Features

### 1. Product Catalog

The project includes a product data structure containing:

- Product ID.
- Product name.
- Product price.
- Product image path.
- Product category.

The available sample products include:

| Product | Category | Price |
|---|---|---:|
| Pink Gift Box (صندوق هدايا وردي) | Women | 95 SAR |
| Luxury Men's Perfume (عطر فاخر رجالي) | Men | 120 SAR |
| Flower Bouquet (باقة ورد) | Women | 60 SAR |
| Men's Leather Watch (ساعة جلد رجالية) | Men | 150 SAR |

### 2. Shopping Cart

The cart functionality allows users to:

- Add selected products to the cart.
- Store product names, prices, and image paths.
- Display the selected products.
- Remove individual items.
- Calculate the total price dynamically.

### 3. Dynamic Cart Count

The cart count is updated whenever products are added or removed.

The current implementation calculates the count using the number of cart entries.

### 4. LocalStorage Persistence

The application uses browser LocalStorage to preserve cart data.

The cart is stored using the following key:

```javascript
localStorage.setItem("cart", JSON.stringify(cart));
```

When the application loads, it retrieves the saved cart:

```javascript
let cart = JSON.parse(localStorage.getItem("cart")) || [];
```

This allows the browser to restore the stored cart contents after page refreshes.

### 5. Dynamic Total Price

The cart total is calculated by iterating through the selected items and adding their prices.

The total is updated when items are rendered or removed from the cart.

### 6. Product Categories

Each product contains a category property that identifies whether it belongs to the men's or women's product category.

The available category values are:

- `women`
- `men`

### 7. Responsive Styling

The CSS stylesheet includes responsive layout adjustments for smaller screens.

The hero section changes from a two-column layout to a single-column layout when the viewport width is below 850 pixels.

### 8. Interactive UI Elements

The stylesheet includes visual interaction states for:

- Navigation links.
- Category buttons.
- Product cards.
- Product action buttons.
- Shopping cart items.
- Remove buttons.

Hover effects and transitions improve the visual feedback of interactive elements.

---

## How It Works

The application separates product information, cart logic, and visual styling into individual files.

1. **Product Data:** Product information is defined in `products.js`.
2. **Cart Initialization:** `cart.js` retrieves previously stored cart items from LocalStorage.
3. **Add to Cart:** The `addToCart()` function adds a selected product to the cart.
4. **Storage Update:** The updated cart is serialized and saved in LocalStorage.
5. **Cart Rendering:** The `renderCart()` function displays stored cart items when the cart container exists.
6. **Total Calculation:** The function calculates the total price by adding the prices of all cart entries.
7. **Remove Item:** The `removeItem()` function removes a selected item using its array index.
8. **Cart Count Update:** The navigation cart count is refreshed after cart operations.

---

## Application Logic

### Product Data – `products.js`

The product catalog is represented as a JavaScript array of objects.

Each product contains:

```javascript
{
    id: 1,
    name: "صندوق هدايا وردي",
    price: 95,
    img: "images/product1.jpg",
    type: "women"
}
```

The product array currently contains four sample gift products.

### Shopping Cart – `cart.js`

The cart implementation uses JavaScript functions to manage the selected products.

| Function | Responsibility |
|---|---|
| `updateCartCount()` | Updates the navigation cart count |
| `addToCart(name, price, img)` | Adds a product to the cart |
| `renderCart()` | Displays cart items and calculates the total |
| `removeItem(index)` | Removes a selected cart entry |

### Cart Data Structure

Each cart entry stores:

- Product name.
- Product price.
- Product image path.

The cart is stored as JSON in the browser's LocalStorage.

### Total Price Calculation

The total is calculated by summing the prices of all items:

```javascript
let total = 0;

cart.forEach((item) => {
    total += item.price;
});
```

The calculated value is displayed in the cart total element.

---

## Product Images

The repository contains four product images.

### 1. Pink Gift Box

![Pink Gift Box](product1.jpg)

### 2. Luxury Men's Perfume

![Luxury Men's Perfume](product2.jpg)

### 3. Flower Bouquet

![Flower Bouquet](product3.jpg)

### 4. Men's Leather Watch

![Men's Leather Watch](product4.jpg)

---

## Technology Stack

| Category | Technologies |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 |
| Programming Language | JavaScript |
| Browser Storage | LocalStorage |
| DOM Manipulation | JavaScript DOM API |
| Layout | CSS Grid, Flexbox |
| Responsive Design | CSS Media Queries |
| Version Control | Git |
| Code Hosting | GitHub |

---

## Project Structure

```text
online-gift-shop/
│
├── README.md
├── LICENSE
│
├── products.js
├── cart.js
├── style.css
│
├── product1.jpg
├── product2.jpg
├── product3.jpg
└── product4.jpg
```

### Main Files

| File | Description |
|---|---|
| `products.js` | Defines the product catalog and product information |
| `cart.js` | Handles cart initialization, adding products, removing items, rendering, and total calculation |
| `style.css` | Defines the application layout, colors, product cards, cart styling, and responsive behavior |
| `product1.jpg` – `product4.jpg` | Product image resources |
| `README.md` | Project documentation |
| `LICENSE` | MIT License |

---

## Getting Started

### Prerequisites

- A modern web browser.
- A code editor such as Visual Studio Code.
- Basic knowledge of HTML, CSS, and JavaScript.

### 1. Clone the Repository

```bash
git clone https://github.com/hanan-alharbi-cs/online-gift-shop.git

cd online-gift-shop
```

### 2. Open the Project

Open the repository folder in your preferred code editor.

The current repository contains the JavaScript data file, cart logic, stylesheet, and product images.

To run the complete browser interface, the required HTML page files must also be present and connected to the JavaScript and CSS files.

### 3. Configure the Frontend Files

The product data and cart logic should be included in the relevant HTML pages.

For example:

```html
<link rel="stylesheet" href="style.css">

<script src="products.js"></script>
<script src="cart.js"></script>
```

The HTML pages must provide the required product and cart containers and connect product actions to the corresponding JavaScript functions.

### 4. Run the Application

Once the HTML pages and referenced resources are available, open the main HTML page in a browser or use a local development server.

**Note:** The HTML entry pages are not currently included in the repository snapshot, so the complete website cannot be launched from the checked-in files alone.

---

## Limitations & Considerations

- The current repository contains the product data, cart logic, stylesheet, and four product images, but does not include the HTML page files.
- The product image paths in `products.js` currently reference an `images/` directory, while the image files are stored in the repository root.
- The cart stores each added product as a separate entry. Repeated additions are not combined into a product quantity.
- Cart persistence depends on browser LocalStorage.
- The current implementation does not include a backend or server-side database.
- The repository does not contain payment processing or a completed checkout integration.
- The current cart logic does not provide server-side order confirmation or inventory management.
- The project is a front-end shopping demonstration rather than a production e-commerce platform.

---

## Future Improvements

- Add the missing HTML pages for the home page, product listing, product details, and shopping cart.
- Organize product images in a dedicated `images/` directory or update the image paths.
- Implement product category filtering.
- Add product quantity controls.
- Improve cart item validation and handling.
- Add a complete checkout interface.
- Introduce order management and purchase confirmation.
- Connect the application to a backend API and database.
- Add user authentication and account management.
- Improve accessibility and responsive behavior across devices.

---

## License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.

---

## Project Links

- **GitHub Repository:** [Online Gift Shop](https://github.com/hanan-alharbi-cs/online-gift-shop)

---

**Online Gift Shop — A Front-End E-Commerce Project Built with HTML, CSS, and JavaScript.**

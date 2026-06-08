# 🐮 MilkyWay-UI
Under Progress 🚨🚧

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## 📁 Root Project Structure
<pre>
milky-way-frontend/
│
├── public/
│   ├── favicon.ico
│   └── logo.png
│
├── src/
│   └── ...
│
├── .env                           # Environment variables
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
</pre>

## 📁 Folder Structure
<pre>
src/
│
├── assets/
│   ├── images/                    # Product images, banners, logos
│   ├── icons/                     # SVG icons and custom icons
│   └── css/
│       ├── variables.css          # Global color palette & CSS variables
│       └── common.css             # Common utility styles
│
├── components/
│   ├── Navbar.jsx                 # Global navigation bar
│   ├── Footer.jsx                 # Global footer
│   ├── ProductCard.jsx            # Product display card
│   ├── SubscriptionCard.jsx       # Subscription plan card
│   └── Loader.jsx                 # Loading spinner
│
├── pages/
│   ├── Home.jsx                   # Landing page
│   ├── Products.jsx               # Product listing page
│   ├── ProductDetails.jsx         # Single product details page
│   ├── Cart.jsx                   # Shopping cart page
│   ├── Checkout.jsx               # Checkout & payment page
│   ├── Orders.jsx                 # User order history
│   ├── Subscriptions.jsx          # User subscriptions
│   ├── Login.jsx                  # Login page
│   ├── Register.jsx               # Registration page
│   └── Profile.jsx                # User profile page
│
├── services/
│   ├── api.js                     # Axios configuration & interceptors
│   ├── authService.js             # Authentication APIs
│   ├── productService.js          # Product APIs
│   ├── cartService.js             # Cart APIs
│   ├── orderService.js            # Order APIs
│   ├── subscriptionService.js     # Subscription APIs
│   └── paymentService.js          # Razorpay APIs
│
├── layouts/
│   └── AppWrapper.jsx             # Global layout (Navbar + Footer + Outlet)
│
├── routes/
│   └── ProtectedRoute.jsx         # Route protection using JWT
│
├── context/
│   └── AuthContext.jsx            # Authentication context provider
│
├── hooks/
│   └── useAuth.js                 # Custom auth hook
│
├── data/
│   └── dummyProducts.js           # Mock product data
│
├── utils/
│   ├── constants.js               # Application constants
│   └── helpers.js                 # Utility/helper methods
│
├── App.jsx                        # Main routing configuration
├── main.jsx                       # React entry point
└── index.css                      # Global styles & Tailwind imports
</pre>

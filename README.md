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


## Folder Structure of our Application
src/
├── assets/                  # Static assets
│   ├── images/              # Graphic images and banners
│   ├── icons/               # SVG/Image icons
│   └── css/                 # Global styling sheets
│       ├── variables.css    # CSS custom properties (design tokens)
│       └── common.css       # Utility classes and global styles
│
├── components/              # Reusable presentation components
│   ├── Navbar.jsx           # Global navigation header
│   ├── Footer.jsx           # Global footer
│   ├── ProductCard.jsx      # Individual product display card
│   ├── SubscriptionCard.jsx # Subscription plan display card
│   └── Loader.jsx           # Global loading spinner
│
├── pages/                   # Application views/screens (routed)
│   ├── Home.jsx             # Landing page
│   ├── Products.jsx         # Product listing page
│   ├── ProductDetails.jsx   # Detailed single product view
│   ├── Cart.jsx             # Shopping cart summary
│   ├── Checkout.jsx         # Payment and shipping forms
│   ├── Orders.jsx           # User order history
│   ├── Subscriptions.jsx    # User active/past subscriptions
│   ├── Login.jsx / Register.jsx # Authentication pages
│   └── Profile.jsx          # User account settings
│
├── services/                # API communication layer
│   ├── api.js               # Axios/Fetch base configuration
│   ├── authService.js       # Auth endpoints (Login, Signup, Logout)
│   ├── productService.js   # Product data fetching
│   ├── cartService.js       # Cart backend sync
│   ├── orderService.js      # Order processing endpoints
│   ├── subscriptionService.js # Subscription billing endpoints
│   └── paymentService.js    # Payment gateway integrations
│
├── layouts/                 # Page layouts wrappers
│   └── AppWrapper.jsx       # Global layout wrapper (Navbar, Footer, Toast containers)
│
├── routes/                  # Routing logic and guards
│   └── ProtectedRoute.jsx   # Route guard for authenticated users
│
├── context/                 # React Context providers for global state
│   └── AuthContext.jsx      # Manages user session and authentication state
│
├── hooks/                   # Custom reusable React hooks
│   └── useAuth.js           # Shortcut hook for accessing AuthContext
│
├── data/                    # Local mock data for development
│   └── dummyProducts.js     # Mock product JSON data
│
├── utils/                   # Helper functions and constants
│   ├── constants.js         # Application-wide static constants
│   └── helpers.js           # Shared utility functions (formatting, validation)
│
├── App.jsx                  # Main application router setup
├── main.jsx                 # Application entry point
└── index.css                # Global entry-level styles
│
├── routes/
│   ├── ProtectedRoute.jsx
│
├── data/
│   ├── dummyProducts.js
│
├── hooks/
│   ├── useAuth.js
│
├── utils/
│   ├── constants.js
│   ├── helpers.js
│
├── context/
│   ├── AuthContext.jsx
│
├── App.jsx
├── main.jsx
├── index.css






















├── index.css

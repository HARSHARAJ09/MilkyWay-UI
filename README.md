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


#Folder Structure of our Application
src/

├── assets/
│   ├── images/
│   ├── icons/
│   ├── css/
│   │   ├── variables.css
│   │   ├── common.css
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── SubscriptionCard.jsx
│   ├── Loader.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Orders.jsx
│   ├── Subscriptions.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── productService.js
│   ├── cartService.js
│   ├── orderService.js
│   ├── subscriptionService.js
│   ├── paymentService.js
│
├── layouts/
│   ├── AppWrapper.jsx
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

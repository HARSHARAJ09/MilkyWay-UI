import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import OrderSuccess from "./pages/OrderSuccess";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Subscriptions from "./pages/Subscriptions";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";

const App = () => {

 return (

  <BrowserRouter>

   <Routes>

    <Route
      path="/MilkyWay-UI"
      element={<Login />}
    />

    <Route
      path="/register"
      element={<Register />}
    />

    <Route
      path="/home"
      element={<ProtectedRoute>
			<Home />
		</ProtectedRoute>}

    />

    <Route
      path="/products"
      element={<ProtectedRoute>
			<Products />
		</ProtectedRoute>}

    />


    <Route
      path="/orders"
      element={<ProtectedRoute>
			<Orders />
		</ProtectedRoute>}

    />


    <Route
      path="/cart"
      element={<ProtectedRoute>
      <Cart />
    </ProtectedRoute>}
    />

    <Route
      path="/productsdetails/:id"
      element={<ProtectedRoute>
      <ProductDetails />
    </ProtectedRoute>}
    />
    
   <Route
	path="/checkout"
	element={
		<ProtectedRoute>

			<Checkout />

		</ProtectedRoute>
	}
/>

<Route
	path="/order-success"
	element={
		<OrderSuccess />
	}
/>

<Route
	path="/profile"
	element={
		<ProtectedRoute>

			<Profile />

		</ProtectedRoute>
	}
/>



<Route
	path="/dashboard"
	element={
		<ProtectedRoute>

			<Dashboard />

		</ProtectedRoute>
	}
/>

<Route
	path="/subscriptions"
	element={
		<ProtectedRoute>

			<Subscriptions />

		</ProtectedRoute>
	}
/>

<Route
	path="/admin"
	element={
		<ProtectedRoute>

			<AdminDashboard />

		</ProtectedRoute>
	}
/>

<Route
	path="/admin/products"
	element={
		<ProtectedRoute>

			<AdminProducts />

		</ProtectedRoute>
	}
/>

   </Routes>



  </BrowserRouter>
 );
};

export default App;
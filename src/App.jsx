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

const App = () => {

 return (

  <BrowserRouter>

   <Routes>

    <Route
      path="/"
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
  path="subscriptions"
  element={
    <ProtectedRoute>
      <div style={{ padding: '20px' }}>
        <h1>Subscriptions</h1>
        <p>This is the subscriptions page. Here you can manage your subscriptions and view subscription details.</p>
      </div>
    </ProtectedRoute>
  }
/>

   </Routes>



  </BrowserRouter>
 );
};

export default App;
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

   </Routes>

  </BrowserRouter>
 );
};

export default App;
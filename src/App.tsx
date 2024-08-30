
import { Header} from './component'
import Allproduct from './pages/main/Sellingproduct'
import Landing from './pages/main/Landing'
import Biddingproduct from './pages/main/Biddingproduct'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Apprequest from './pages/main/apprequest';
import Contactus from './pages/main/contactus';
import Signup from './pages/auth/signup';
import Login from './pages/auth/login';
import Donation from './pages/main/donation';
import Cart from './pages/main/cart';
import Productdetail from './pages/main/productdetail';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Landing />} />
        <Route path="buy" element={<Allproduct />} />
        <Route path="bid" element={<Biddingproduct />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="donate" element={<Donation />} />
        <Route path="download" element={<Apprequest />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/:id" element={<Productdetail />} />
       
      </Route>
    )
  );
  

  return (
    <div className='bg-landing-banner bg-no-repeat min-h-screen bg-cover bg-center bg-fixed '>
      {/* <Header /> */}
      {/* <Landing /> */}
      {/* <Allproduct /> */}
      {/* <Biddingproduct /> */}
{/* <Card />
<Newsletter /> */}
 <RouterProvider router={router} />
    </div>
  )


}

export default App

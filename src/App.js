import {Routes,Route} from "react-router-dom"
import Navigation from "./routes/navigation/navbar.component";
import Home from "./routes/home/home.component";
import Auth from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";





const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
   
    
  );
};

export default App;

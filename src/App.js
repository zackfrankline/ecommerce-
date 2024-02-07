import {Routes,Route} from "react-router-dom"
import Navigation from "./routes/navigation/navbar.component";
import Home from "./routes/home/home.component";
import Auth from "./routes/authentication/authentication.component";


const Shop=()=>{
  return(
    <div>
      This is shop page 
    </div>
  )
}


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

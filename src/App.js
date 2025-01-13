import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage"
import Categories from "./pages/Categories/Categories"
import NotFound from "./components/Page404"
import ItalianCategory from "./pages/Categories/ItalianCategory/ItalianCategory"
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/italian" element={<ItalianCategory />} />
          <Route path="/login" element={<UnderConstruction />} />
          <Route path="/map" element={<UnderConstruction />} />
          <Route path="/profile" element={<UnderConstruction/> } />
          <Route path="/about" element={<UnderConstruction/> } />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
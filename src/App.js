import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage"
import Categories from "./pages/Categories/Categories"
import NotFound from "./pages/NotFound"
import ItalianCategory from "./pages/Categories/ItalianCategory/ItalianCategory"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/italian" element={<ItalianCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
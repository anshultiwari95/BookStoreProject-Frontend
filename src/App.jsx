import { Routes, Route } from "react-router-dom";
import ShowBook from "./pages/ShowBook";
import Home from "./pages/Home";
import Deletebook from "./pages/Deletebook";
import EditBook from "./pages/EditBook";
import CreateBooks from "./pages/CreateBooks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/delete/:id" element={<Deletebook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
    </Routes>
  );
};

export default App;

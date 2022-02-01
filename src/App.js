import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Form from "./pages/Form";
import PromiseDemo from "./pages/PromiseDemo";
import StudentsTable from "./pages/StudentsTable";
import { StudentContextProvider } from "./store/StudentContext";
import CardMenu from "./pages/CardMenu";

function App() {
  return (
    <StudentContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/promise" element={<PromiseDemo />} />
          <Route exact path="/studentstable" element={<StudentsTable />} />
          <Route exact path="/card" element={<CardMenu />} />
        </Routes>
      </BrowserRouter>
    </StudentContextProvider>
  );
}

export default App;

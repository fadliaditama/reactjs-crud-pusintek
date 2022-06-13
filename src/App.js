import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnggaranList from "./components/AnggaranList";
import Beranda from "./components/Beranda";
import AddAnggaran from "./components/AddAnggaran";
import EditAnggaran from "./components/EditAnggaran";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />}></Route>
          <Route path="/list-anggaran" element={<AnggaranList />}></Route>
          <Route path="/add-anggaran" element={<AddAnggaran />}></Route>
          <Route path="/list-anggaran/edit-anggaran/:id" element={<EditAnggaran />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

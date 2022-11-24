import React from "react";
import AddPage from "./pages/AddPage";
import HomePage from "./pages/Homepage";
import { Link,Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div>
      <header className="header">
        <h1>
          <Link to={'/'}  >Aplikasi Catatan</Link>
          </h1>
         <h1>
          <Link to={'/add'}>Tambah Catatan</Link>
         </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

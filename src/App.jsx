import { useState } from "react";
import { Navbar } from "./section/navbar";
import { Hero } from "./section/hero";

function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;

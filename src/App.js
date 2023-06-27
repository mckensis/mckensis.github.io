import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Main open={open} />
      <Footer />
    </>
  );
}

export default App;

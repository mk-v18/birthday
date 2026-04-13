import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      {loading ? <Loader /> : <Home />}
    </>
  );
}

export default App;
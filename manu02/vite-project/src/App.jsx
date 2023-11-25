import { useState } from "react";
import items from "./data";
import "./App.css";
import Manu from "./Manu";
import Catagory from "./Catagory";

const allcatagories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [manuitems, setManuitems] = useState(items);
  const [catagories, setCatagories] = useState(allcatagories);

  const filterCatagory = (catagory) => {
    if (catagory === "all") {
      setManuitems(items);
      return;
    }
    const newCatagory = items.filter((item) => item.category === catagory);
    setManuitems(newCatagory);
  };

  return (
    <>
      <Catagory filterCatagory={filterCatagory} catagories={catagories} />
      <Manu showManuitems={manuitems} />
    </>
  );
}

export default App;

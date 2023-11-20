import React, { useEffect, useState } from "react";
import Categorytable from "./components/Categorytable";
import "./App.css";
import axios from "axios";

const App = () => {
  const [categories, setCategories] = useState([]);
  // const [loading,setLoading]=useState(false)
  const getData = async () => {
    const res = await axios.get("https://northwind.vercel.app/api/categories");
    setCategories(res.data)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Categorytable categories={categories}></Categorytable>
    </div>
  );
};

export default App;

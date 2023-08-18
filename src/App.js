import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const getData = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=g6czJGUascwFWLF7cATGiq7BtQQflaNoyveFqNTG"
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {loading && (
        <>
          <h1>{data.title}</h1>
          <img src={data.hdurl} />
        </>
      )}
    </div>
  );
}

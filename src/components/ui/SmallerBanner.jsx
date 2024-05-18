import { useState, useEffect } from "react";

function SmallerBanner({ title, items = [] }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./items.json");
        const jsonData = await res.json();
        setData(jsonData);
        console.log(data);
      } catch (error) {
        console.error("error fetching data :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section>
        <section className="bg-purple text-white text-center rounded-md max-w-[15rem] px-4 py-4 ">
          <h2>{title}</h2>
        </section>
        <ul>
          {data &&
            data.items &&
            data.items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>
    </>
  );
}

export default SmallerBanner;

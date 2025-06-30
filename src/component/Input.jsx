import { useEffect, useState } from "react";
import Card from "./Card";

export default function Input() {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(
    "https://dattebayo-api.onrender.com/characters"
  );
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoints = [
    {
      id: 1,
      name: "Karakter",
      url: "https://dattebayo-api.onrender.com/characters",
    },
    {
      id: 2,
      name: "Akatsuki",
      url: "https://dattebayo-api.onrender.com/akatsuki",
    },
    { id: 3, name: "Kara", url: "https://dattebayo-api.onrender.com/kara" },
    {
      id: 4,
      name: "Tailed Beasts",
      url: "https://dattebayo-api.onrender.com/tailed-beasts",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(selected);
        const data = await res.json();

        // Ambil array pertama dari object
        const result = Object.values(data)[0];
        setDataList(result);
      } catch (err) {
        console.error("Error fetching data:", err);
        setDataList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selected]);

  // Filter berdasarkan input pencarian
  const filteredData = dataList.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <div className="flex gap-2 w-full p-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Cari koleksi ini"
          className="flex-[5] p-2 rounded bg-white text-black"
        />
        <select
          className="flex-[2] p-2 rounded bg-white text-black"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {endpoints.map((item) => (
            <option key={item.id} value={item.url}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <Card key={i} loading={true} />)
          : filteredData.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                image={item.images}
                loading={false}
              />
            ))}
      </div>
    </>
  );
}

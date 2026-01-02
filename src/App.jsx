import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const nextImage = () => {
    setIndex((prev) => {
      let next = prev + 1;
      console.log(next);
      return next;
    });
  };

  const prevImage = () => {
    setIndex((prev) => {
      if (prev > 1) {
        let previous = prev - 1;
        console.log(previous);
        return previous;
      }
      return prev;
    });
  };

  // Return karna jaroori hai yha

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData(); // fetch
    setUserData([]); // reset
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-500 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading......
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div>
      <div className="bg-black h-screen overflow-auto text-white">
        <div className="flex flex-wrap gap-4 h-[85%] m-4 justify-center items-center">
          {printUserData}
        </div>
        <div className="flex justify-center gap-10 item-center mb-4">
          <button
            style={{ opacity: index == 1 ? 0.5 : 1 }}
            onClick={prevImage}
            className="bg-amber-300 text-sm px-4 py-2 font-bold rounded cursor-pointer active:scale-95 "
          >
            Prev
          </button>
          <h4 className="text-center font-semibold px-2 flex justify-center items-center">
            Page {index}
          </h4>
          <button
            onClick={nextImage}
            className="bg-amber-300 text-sm px-4 py-2 font-bold rounded cursor-pointer active:scale-95"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

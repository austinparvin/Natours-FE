import { useState } from "react";
import TourCard from "./tourCard/tourCard";

const Tours = () => {
  const [tours, setTours] = useState([
    { name: "test" },
    { name: "test2" },
    { name: "test3" },
  ]);
  const [loading, setLoading] = useState(false);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="card-container">
      {tours.map((tour, i) => (
        <TourCard tour={tour} key={i} />
      ))}
    </div>
  );
};

export default Tours;

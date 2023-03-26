import { useState } from "react";
import TourCard from "../tourCard/tourCard";
import "./allTours.scss";

const AllTours = () => {
  const [tours, setTours] = useState([{ name: "test" }, { name: "test2" }]);
  const [loading, setLoading] = useState(false);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="cards">
      {tours.map((tour, i) => (
        <TourCard tour={tour} key={i} />
      ))}
    </div>
  );
};

export default AllTours;

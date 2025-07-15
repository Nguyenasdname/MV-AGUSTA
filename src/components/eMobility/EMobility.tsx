import { useEffect, useState } from "react";
import EMobilityItem from "../eMobilityItem/EMobilityItem";
import "./EMobility.css";

interface EMobilityData {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const EMobility = () => {
  const [items, setItems] = useState<EMobilityData[]>([]);

  useEffect(() => {
    fetch("/Data/eMobility.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Failed to load eMobility data", err));
  }, []);

  return (
    <div className="section-wrapper">
      <div className="card-list" data-selected="emobility">
        {items.map((item, index) => (
          <EMobilityItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default EMobility;

import { useState, useEffect } from "react";
import EMobilityItem from "../eMobilityItem/EMobilityItem";
import "../eMobility/EMobility.css";

interface CatalogueData {
    title: string;
    subtitle: string;
    image: string;
    link: string;
}

const Catalogue = () => {
    const [catalogs, setCatalogs] = useState<CatalogueData[]>([]);

    useEffect(() => {
        fetch("/Data/catalogue.json")
            .then((res) => res.json())
            .then((data) => setCatalogs(data))
            .catch((err) => console.error("Failed to load Catalogue data", err));
    }, []);

    return (
        <div className="section-wrapper">
            <div className="card-list">
                {catalogs.map((ctl, index) => (
                    /* ctl là viết tắt của catalogue */
                    <EMobilityItem
                        key={`catalog_${index}`}
                        title={ctl.title}
                        subtitle={ctl.subtitle}
                        image={ctl.image}
                        link={ctl.link}
                        ctaText="View on →"
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalogue
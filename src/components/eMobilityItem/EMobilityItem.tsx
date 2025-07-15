import { useRef, useState } from "react";
import './EMobilityItem.css'

interface EMobilityItemProps {
    title: string;
    subtitle: string;
    image: string;
    link: string;
    ctaText?: string;
}

const EMobilityItem = ({
    title,
    subtitle,
    image,
    link,
    ctaText = "Shop now →",
}: EMobilityItemProps) => {
    const[isHovered, setIsHovered] = useState(false);
    const[isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () =>{
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true)
            setIsHovered(true);
        }, 25);
    }

    const handleMouseLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
            setTimeout(() => setIsVisible(false), 25);
        }, 25);
    }

    return (
        <div className="mobility-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>

            <a className="mobility-link" href={link} rel='noopener' target="_blank">
                <div className="mobility-info">
                    <div className="mobility-title">{title}</div>
                    <div className="mobility-subtitle">{subtitle}</div>
                </div>

                <img className="mobility-image" src={image} alt={image} />

                {isVisible && (
                    <div className={`mobility-cta ${isHovered ? 'visible' : 'hidden'}`}>
                        {ctaText}
                    </div>
                )}
            </a>
        </div>
    );
};

export default EMobilityItem
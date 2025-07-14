import type { ReactNode } from "react";
import './DropDown.css'
import { motion } from 'framer-motion';
interface DropDownProps {
    children: ReactNode;
}

const DropDown = ({ children }: DropDownProps) => {
    return (
        <div className="frame">
            {children}
        </div>
    );
};

export default DropDown;

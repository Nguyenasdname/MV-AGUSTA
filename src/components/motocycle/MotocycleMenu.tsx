import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const itemVariants:any = {
    hidden: { x: 20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            opacity: { duration: 0.2 }, // xuất hiện nhanh
            x: { duration: 0.6, ease: "easeOut" } // chạy từ phải sang chậm
        }
    },
};

const listVariants:any = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // thời gian trễ giữa các <li>
        },
    },
};

const MotocycleMenu = () => {
    return (
        <motion.ul
            initial="hidden"
            animate="visible"
            variants={listVariants}
            style={{ listStyle: "none", padding: 0 }}
        >
            <motion.li variants={itemVariants}>
                <Link to="/motocycle/sport" className="nav-link">Sport</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <Link to="/motocycle/sport" className="nav-link">Sport</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <Link to="/motocycle/sport" className="nav-link">Sport</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <Link to="/motocycle/sport" className="nav-link">Sport</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <Link to="/motocycle/sport" className="nav-link">Sport</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <Link to="/motocycle/sport" className="nav-link">Sport</Link>
            </motion.li>
        </motion.ul>
    )
}
export default MotocycleMenu
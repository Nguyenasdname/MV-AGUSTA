import { Link } from "react-router-dom"
import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react";
import type { Moto } from "../../model/MotoModel";
import { Col, Row } from "react-bootstrap";
import VehiclePreview from "./VehiclePreview";

const itemVariants: Variants = {
    hidden: { x: 20, opacity: 0 }, //từ phải sang trái
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            x: { duration: 0.1, ease: "easeOut" }
        }
    },
};

const listVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // thời gian trễ giữa các <li>
        },
    },
};

const RenderTypeMenu = (data: { motoType: string, motoImage: string }[], onHover: (type: string) => void, hover: string) => {
    return (
        <>
            {(data != null && data.length > 0) && ( //có data rồi mới render
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={listVariants}
                    style={{ listStyle: "none", padding: 0 }}
                >
                    {data.map((moto: { motoType: string, motoImage: string }, index: number) => (
                        <motion.li className="d-flex justify-content-between"
                            key={'motoType_' + index} variants={itemVariants}
                            onMouseEnter={() => {
                                onHover(moto.motoType)

                            }}
                            onAnimationStart={() => onHover(data[0].motoType)}
                        >
                            <Link className={`${hover === moto.motoType ? 'text-black' : 'text-secondary'}`}
                                style={{ textDecoration: "none", fontWeight: "bolder", fontSize: "30px", paddingBottom: "10px" }}
                                to="">
                                {moto.motoType}
                            </Link>
                            <img style={{ width: "20%", height: "20%" }} src={moto.motoImage} />
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </>
    )
}

const RenderMotoCycleMenu = (data: Moto[], setHoverMoto: (type: Moto | null) => void, hoverMoto: Moto | null) => {
    return (
        <>
            {(data != null && data.length > 0) && ( //có data rồi mới render
                <motion.ul
                    key={data.map((moto: Moto) => moto.motoName).join('-')}
                    initial="hidden"
                    animate="visible"
                    variants={listVariants}
                    style={{ listStyle: "none" }}
                >
                    {data.map((moto: Moto, index: number) => (
                        <motion.li
                            key={'motoName_' + index} variants={itemVariants}
                            onMouseEnter={() => setHoverMoto(moto)}
                            onAnimationStart={() => setHoverMoto(data[0])}
                        >
                            <Link
                                className={`${hoverMoto && hoverMoto.motoName === moto.motoName ? 'text-black' : 'text-secondary'}`}
                                style={{ textDecoration: "none", fontWeight: "bolder", fontSize: "30px" }}
                                to="">
                                {moto.motoName}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </>
    )
}

const MotocycleMenu = () => {
    const [motoData, setMotoData] = useState<Moto[]>([])
    const [hoverMotoType, setHoverMotoType] = useState<string>("")
    const [hoverMoto, setHoverMoto] = useState<Moto | null>(null);


    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch('/Data/motocycleData.json');
                const data = await res.json();
                setMotoData(data)
            } catch (error) {
                console.error('ERROR: ', error);
            }
        }
        loadData();
    }, [])

    const filterMoto: Moto[] = motoData.filter((moto) => moto.motoType === hoverMotoType)
    const motoType: { motoType: string, motoImage: string }[] = []
    motoData.forEach((moto) => {
        if (!motoType.some((item) => item.motoType === moto.motoType)) {
            motoType.push({
                motoType: moto.motoType,
                motoImage: moto.image
            })
        }
    })
    return (
        <Row style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <Col md={3}>
                <div>
                    {RenderTypeMenu(motoType, setHoverMotoType, hoverMotoType)}
                </div>

            </Col>
            <Col md={3} >
                <div
                    style={{ borderLeft: "0.1px solid black", height: "100%", borderRight: "0.1px solid black" }}>
                    {RenderMotoCycleMenu(filterMoto, setHoverMoto, hoverMoto)}
                </div>

            </Col>
            <Col md={6}
                onMouseEnter={() => {
                    if (hoverMoto == null) {
                        setHoverMoto(filterMoto[filterMoto.length - 1])
                    }
                }}
                onMouseLeave={() => setHoverMoto(null)}
            >
                <div style={{ alignItems: "center", height: "50%" }}>
                    <VehiclePreview moto={hoverMoto} />
                </div>
            </Col>
        </Row>

    )
}
export default MotocycleMenu
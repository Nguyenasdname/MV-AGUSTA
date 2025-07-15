import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import './Navbar.css'
import logoAgusta from '/images/Logo/logo-main.svg'
import hoverLogoAgusta from '/images/Logo/logo-main-white.svg'
import { useState } from "react";
import MotocycleMenu from "../motocycle/MotocycleMenu";
import DropDown from "../dropDown/DropDown";
import EMobility from "../eMobility/EMobility";
interface NavLinkItems {
    to: string;
    label: string;
    menuNavItem: any;
}

const Navbar = () => {
    const [hoverNav, setHoverNav] = useState(false);
    const [itemsMenuHover, setItemsMenuHover] = useState(null)
    const [activeLink, setActiveLink] = useState("")

    const NavLeft: NavLinkItems[] = [
        { to: "/motocycle", label: "Motocycle", menuNavItem: <MotocycleMenu /> },
        { to: "/eMobility", label: "eMobility", menuNavItem: <EMobility /> },
        { to: "/ownership", label: "Ownership", menuNavItem: "" }
    ]

    const NavRight: NavLinkItems[] = [
        { to: "/company", label: "Company", menuNavItem: "" },
        { to: "/dealers", label: "Dealers", menuNavItem: "" },
        { to: "/catalogue", label: "Catalogue", menuNavItem: "" }
    ]

    const RenderNavLink: any = (links: NavLinkItems[]) => {
        return links.map((link: NavLinkItems) => (
            <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => {
                    setHoverNav(true)
                    setItemsMenuHover(link.menuNavItem)
                    setActiveLink(link.label)
                }}
                onMouseLeave={() => {

                }}
                style={{
                    color: hoverNav ? "black" : "white",
                    fontWeight: activeLink === link.label ? "bold" : ""
                }}
            >
                {link.label}
            </Link>
        ));
    };
    return (
        <div className=""
            onMouseLeave={() => {
                setHoverNav(false)
                setItemsMenuHover(null)
                setActiveLink("")
            }}
        >
            <Row className={`mx-2 mt-3 px-4 py-2 navbar ${hoverNav != false ? 'bg-white ' : ''}`}>
                <Col md={4} className={`text-left items py-1`}>
                    {RenderNavLink(NavLeft)}
                </Col>

                <Col md={4} className={`text-center ${hoverNav != false ? 'navHoverLogo' : 'navLogo'} `}
                    onMouseEnter={() => {
                        setHoverNav(false)
                        setActiveLink("")
                        setItemsMenuHover(null)
                    }}
                >
                    <Link to="/">
                        <img src={hoverNav != false ? hoverLogoAgusta : logoAgusta} />
                    </Link>
                </Col>

                <Col md={4} className={`text-end items`}>
                    {RenderNavLink(NavRight)}
                </Col>
            </Row>
            <Row className="mx-2"
                onMouseEnter={() => setHoverNav(true)}
            >
                <DropDown children={itemsMenuHover} />
            </Row>
        </div>
    )
}

export default Navbar;
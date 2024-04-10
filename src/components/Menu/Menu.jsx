import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Menu.css";

export function Menu() {
    const [scroll, setScroll] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY > 0);
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <section className={scroll ? "menu scrolled" : "menu"}>
            <Link to={"/"}>
                <img src="img/logo.png" alt="Logo" />
            </Link>
            
            <div className={`links ${showMenu ? "show" : ""}`}>
                <Link to={"/"} onClick={toggleMenu}>Home</Link>
                <Link to={"/skills"} onClick={toggleMenu}>Skills</Link>
                <Link to={"/projects"} onClick={toggleMenu}>Projects</Link>
                <a href="#contactsContent" onClick={toggleMenu}>Contacts</a>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className={showMenu ? "bar1 change" : "bar1"}></div>
                <div className={showMenu ? "bar2 change" : "bar2"}></div>
                <div className={showMenu ? "bar3 change" : "bar3"}></div>
            </div>
        </section>
    );
}

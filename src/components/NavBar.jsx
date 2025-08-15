import {useState, useEffect} from "react";
import DataImage from "../data";

const NavBar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);
    return ( 
        <div className="navbar py-7 flex items-center justify-between gap-2">
            <div className="logo">
                {/* <h1
                    className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portofolio</h1> */}
                <img src={DataImage.NavbarImage} alt="Navbar Image" className="w-35 rounded-md" loading="lazy"/>
            </div>
            <ul
                className={`menu flex items-center gap-4 sm:gap-10 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active
                    ? "top-0 opacity-100"
                    : "-top-10 opacity-0"}`}>
                <li>
                    <a className="text-base sm:text-lg font-medium" href="#beranda">Beranda</a>
                </li>
                <li>
                    <a className="text-base sm:text-lg font-medium" href="#tentang">Tentang</a>
                </li>
                <li>
                    <a className="text-base sm:text-lg font-medium" href="#proyek">Proyek</a>
                </li>
                <li>
                    <a className="text-base sm:text-lg font-medium" href="#kontak">Kontak</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
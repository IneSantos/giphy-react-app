import Hamburger from "components/atomic-ui/atoms/hamburger/hamburger";
import { useState } from "react";
import "./navbar.css";

interface Props {
    categories: string[],
    activeCat: string,
    generateGifByCat: (a: string) => void
}

const  NavBar = (props: Props) => {
    const {categories, activeCat, generateGifByCat} = props;
    const [active, setActiveNav] = useState(false);

    const toggleMenu = () => {
        setActiveNav(!active);
    }

    const clickCategory = (cat: string) => {
        generateGifByCat(cat);
        toggleMenu();
    }
    
  return (
    <>
        <Hamburger active={active} toggleMenu={toggleMenu}/>
        <nav className={`${active ? 'active' : ''} side-nav-content`}>
            <ul className={`${active ? 'active' : ''} nav-list`}>
                {categories.map((cat, index) => (
                    <li key={index} className={activeCat === cat ? 'active' : ''}>
                        <a onClick={() => clickCategory(cat)}>{cat}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </>
    )
}

export default NavBar;
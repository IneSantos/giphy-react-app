import "./hamburger.css";

interface Props {
    active: boolean, 
    toggleMenu: () => void
}

const Hamburger = ({active, toggleMenu}: Props ) => {
    return  (
        <>
        <div className="header__hamburger" onClick={toggleMenu}>
            <div>
                <div className={`bar hamburger__bar1 ${active ? 'active' : ''}`}></div>
                <div className={`bar hamburger__bar2 ${active ? 'active' : ''}`}></div>
                <div className={`bar hamburger__bar3 ${active ? 'active' : ''}`}></div>
            </div>
        </div>
        <div className={`side-nav-overlay ${active ? 'active' : ''}`}></div>
        </>
    );
}

export default Hamburger;
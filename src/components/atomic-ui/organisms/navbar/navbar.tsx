import "./navbar.css";

interface Props {
    categories: string[],
    activeCat: string,
    generateGifByCat: (a: string) => void
}

const  NavBar = (props: Props) => {
    const {categories, activeCat, generateGifByCat} = props;

  return (
    <>
    <nav className="side-nav-content">
        <ul className="nav-list">
            {categories.map((cat, index) => (
                <li key={index} className={activeCat === cat ? 'active' : ''}>
                    <a onClick={() => generateGifByCat(cat)}>{cat}</a>
                </li>
            ))}
        </ul>
    </nav>
    </>
    )
}

export default NavBar;
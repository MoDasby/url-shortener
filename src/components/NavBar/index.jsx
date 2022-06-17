import { Link } from "react-router-dom";
import './style.css'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Início
                    </Link>
                </li>

                <li>
                    <Link to="/history">
                        Histórico
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
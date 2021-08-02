import { NavLink } from "react-router-dom";

const MenuLink = (props) => {
    return (
        <li className="menu-item">
          <NavLink to={props.link} exact>
            <div className="item-par">
              {props.children}<div className="item-line"></div>
            </div>
          </NavLink>
        </li>
    )
}

export default MenuLink

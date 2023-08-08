import React, { useState } from "react";
import { aboutDropdown } from "../menu/Menu";
import { Link } from "react-router-dom";
import "./dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {aboutDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.url}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;

import NavStyle from "./Nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={NavStyle.nav_ul}>
        <ListItem text="Home" />
        <ListItem text="Webshop" />
        <ListItem text="About us" />
        <ListItem text="Contant" />
      </ul>
    </nav>
  );
}

function ListItem(props) {
  return (
    <li className={NavStyle.list_item}>
      <a href="/" className={NavStyle}>
        {props.text}
      </a>
    </li>
  );
}

import logo from "../assets/images/logoKasa.svg"
const Header = () => {
  return (
    <header>
    <img src={logo} alt="logo de kasa" />
    <ul>
      <li>Accueil</li>
      <li>A propos</li>
    </ul>
    </header>
  );
};

export default Header;
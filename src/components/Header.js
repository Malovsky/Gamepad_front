import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header-container">
        <div className="header-logo-container">
          <img
            src="./gamepad-logo.png"
            alt="Logo gamepad"
            className="header-logo"
            onClick={() => navigate("/")}
          />
          <p>Gamepad</p>
        </div>

        <div className="header-connect-container">
          <p>My Collection</p>
          <button className="color-reverse color-reverse-hover">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

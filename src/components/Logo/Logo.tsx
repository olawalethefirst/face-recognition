import Tilt from "react-parallax-tilt";
import logoImage from "../../assets/images/logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div>
      <Tilt>
        <div className="logo-container">
          <img className="logo-image" src={logoImage} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
}

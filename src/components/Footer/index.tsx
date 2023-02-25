import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import logo from "/public/assets/logo.png"
import "./index.css"
export function Footer() {
  return (
    <footer>
      <div className="icons">
        <a href="">
          <InstagramLogo size={32} color="#fff"/>
        </a>
        <a href="">
          <TwitterLogo size={32} color="#fff"/>
        </a>
        <a href="">
          <FacebookLogo size={32} color="#fff"/>
        </a>
      </div>
      <img src={logo} alt="" />
      <h4>Developed by Ryan</h4>
    </footer>
  )
}
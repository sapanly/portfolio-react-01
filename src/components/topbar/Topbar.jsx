import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemx">
            <div className="itemContainer">
              <Person className="icon" />
              <span>+62 123 4567 890</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon" />
              <span>hello@genius.com</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="humberger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

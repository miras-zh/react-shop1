/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="d-flex justify-between align-center">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/image/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">best shop of sneakeres</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={40} height={40} src="/image/cart.png" />
          <span>1200 kz</span>
        </li>
        <li className="mr-30">
          <Link to="/favorite">
            <img width={40} height={40} src="/image/izbran.png" />
          </Link>
        </li>
        <li>
          <img width={40} height={40} src="/image/user.png" />
        </li>
      </ul>
    </header>
  );
}

export default Header;

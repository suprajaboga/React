import { useEffect, useRef } from "react";
import useAuth from "../Hooks/useAuth";
import useOnline from "../Hooks/useOnline";
import useLocalStorage from "../Hooks/useLocalStorage";
import { Link, useNavigate } from "react-router-dom";
import logo from "../utils/Images/logo.jpg";
import logo2 from "../utils/Images/logo2.jpg";
import { useSelector } from "react-redux";

//Title component to display logo
const Title = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      logoRef.current.style.transform = "translateX(-350px)";
      logoRef.current.style.transition = "transform 2s ease-in-out";
      logoRef.current.src = logo2;
    }, 1000);
    setTimeout(() => {
      logoRef.current.src = logo;
    }, 3500);
  }, []);

  return (
    <Link to="/">
      <img className="logo" ref={logoRef} src={logo2} alt="Food Image" />
    </Link>
  );
};

const Header = () => {
  const navigate = useNavigate();

  //Subscribing to the store using a selector, here we're just subscribing to the portion of the cart store
  const cartItems = useSelector((store) => store.cart.items);

  //call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");

  //call custom hook useAuth for user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useAuth();

  useEffect(() => {
    if (getLocalStorage == null) {
      setIsLoggedIn(false);
      console.log("Header - useEffect called");
    }
  }, [getLocalStorage]);

  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />

      {/* if user is loggedin then display userName */}
      {isLoggedIn && (
        <div data-testid="username" className="user-name">
          Hi {getLocalStorage?.userName}!
        </div>
      )}

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"> ({cartItems.length})</i>
            </Link>
          </li>
          {/*use conditional rendering for login and logout */}
          <li>
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => {
                  clearLocalStorage();
                  setIsLoggedIn(false);
                }}
              >
                Logout
                <span
                  className={isOnline ? "login-btn-green" : "login-btn-red"}
                >
                  {" "}
                  ●
                </span>
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
                <span
                  className={isOnline ? "login-btn-green" : "login-btn-red"}
                >
                  {" "}
                  ●
                </span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

/*
When we use <a href> tags, whole page used to get refreshed and it takes time to load the page, but when we use <Link> only 
that component gets rendered and page will not get refreshed.This is why React is a Single Page Application, only 1 page and 
everything re-renders based on the route
But, when we use <Link>, in the html in the console tab, it's shown as <a href> only. <Link> is given by React but it internally
uses <a href> tag
*/

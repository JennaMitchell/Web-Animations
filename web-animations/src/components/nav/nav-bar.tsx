import classes from "./nav-bar.module.css";
import logo from "../../assets/logo/logo.png";
const NavBar = (): JSX.Element => {
  return (
    <nav className={classes.navBarMainContainer}>
      <div className={classes.titleContainer}>
        <img src={logo} alt="logo" className={classes.navBarLogo} />
        <p className={classes.titleText}>Web Animations</p>
      </div>
      <div className={classes.navButtonsContainer}>
        <button className={classes.navButton}>Search</button>
        <button className={classes.navButton}>Categories</button>
        <button className={classes.navButton}>Login</button>
        <button className={classes.navButton}>Signup</button>
      </div>
    </nav>
  );
};
export default NavBar;

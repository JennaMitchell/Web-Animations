import classes from "./animation-select.module.css";
import NavBar from "../../components/nav/nav-bar";
import AnimationSelectionMenu from "./selection-menu/selection-menu";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import AnimationSelectionContainer from "./selection-container/selection-container";
const AnimationSelectMainPage = (): JSX.Element => {
  const [menuClicked, setMenuClicked] = useState(false);

  const menuButtonClickHandler = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <main className={classes.animationSelectionBackdrop}>
      <NavBar />
      <AnimationSelectionMenu menuClicked={menuClicked} />
      <button
        className={`${classes.menuButton} ${
          menuClicked && classes.menuButtonMoveOut
        }`}
        onClick={menuButtonClickHandler}
      >
        <Bars3Icon />
      </button>
      <AnimationSelectionContainer />
    </main>
  );
};
export default AnimationSelectMainPage;

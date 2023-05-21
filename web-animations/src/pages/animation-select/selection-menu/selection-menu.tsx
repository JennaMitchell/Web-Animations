import classes from "./selection-menu.module.css";
import backgroundSplashs from "../../../assets/backgrounds/paint-splashs-background.png";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import paintBrushUnderlineOne from "../../../assets/underlines/paint-brush-underline.png";
import { useState } from "react";
import SelectionMenuAnimationShapesSection from "./animation-shapes-section/selection-menu-animation-shapes-section";
const AnimationSelectionMenu = ({ menuClicked }: { menuClicked: boolean }) => {
  const [animationDropDownClicked, setAnimationDropDownClicked] =
    useState(false);

  const animationObjectDropDownClickHandler = () => {
    setAnimationDropDownClicked(!animationDropDownClicked);
  };
  return (
    <div
      className={`${classes.animationSelectionMenuTopContainer} ${
        menuClicked && classes.animationSelectionMenuTopContainerMovedOut
      }`}
    >
      <img
        src={backgroundSplashs}
        alt="background images"
        className={classes.animationSelectionBackgroundImage}
      />
      <p className={classes.animationMenuTitle}>Animation Settings</p>

      <img
        className={classes.underlineImage}
        src={paintBrushUnderlineOne}
        alt="paint brush underline"
      />

      <div className={classes.dropDownButtonContentContainer}>
        <button
          className={`${classes.animationMenuDropdownButton} ${
            animationDropDownClicked &&
            classes.animationMenuDropdownButtonActive
          }`}
          onClick={animationObjectDropDownClickHandler}
        >
          <p className={classes.animationMenuDropdownButtonTitle}>
            Animation Objects
          </p>
          {!animationDropDownClicked && (
            <ChevronDownIcon
              className={classes.animationMenuDropdownButtonIcon}
            />
          )}
          {animationDropDownClicked && (
            <ChevronUpIcon
              className={classes.animationMenuDropdownButtonIcon}
            />
          )}
        </button>
        {animationDropDownClicked && (
          <div className={classes.animationMenuDropDownContentContainer}>
            <SelectionMenuAnimationShapesSection />
          </div>
        )}
      </div>
    </div>
  );
};
export default AnimationSelectionMenu;

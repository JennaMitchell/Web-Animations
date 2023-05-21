import sharedClasses from "../animation-cards-shared-css.module.css";
import classes from "./rotate-animation-card-css.module.css";
import { useState } from "react";
import { useAppSelector } from "../../../../../store/typescript-hooks";
import { animationShapes } from "../../../../../assets/constants/constants";
const RotateAnimationCard = (): JSX.Element => {
  const [animationTrigger, setAnimationTrigger] = useState(true);
  const activeAnimationShape = useAppSelector(
    (state) => state.animationBrowser.activeAnimationShape
  );
  const shapeImageLocation = animationShapes[activeAnimationShape];
  const cursorEnterHandler = () => {
    if (!animationTrigger) {
      setAnimationTrigger(true);
    }
  };
  const cursorLeaveHandler = () => {
    if (animationTrigger) {
      setAnimationTrigger(false);
    }
  };
  return (
    <div
      className={sharedClasses.animationCardContainer}
      onMouseEnter={cursorEnterHandler}
      onMouseLeave={cursorLeaveHandler}
    >
      <div className={sharedClasses.animationWindow}>
        <div
          className={`${classes.objectToBeRotated} ${
            animationTrigger && classes.rotateAnimation
          }`}
        >
          <img
            src={shapeImageLocation}
            alt={`${activeAnimationShape}`}
            className={sharedClasses.animationShape}
          />
        </div>
      </div>
      <p className={sharedClasses.animationTitle}>Rotate</p>
      <p
        className={`${sharedClasses.moreInfoText} ${
          animationTrigger && sharedClasses.activeMoreInfoText
        }`}
      >
        More Info
      </p>
    </div>
  );
};
export default RotateAnimationCard;

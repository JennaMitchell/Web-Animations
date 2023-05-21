import classes from "./selection-menu-animation-shapes-section.module.css";
import { animationShapes } from "../../../../assets/constants/constants";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../store/typescript-hooks";
import { animationBrowserSliceActions } from "../../../../store/animation-browers-store";
import { MouseEvent } from "react";

const SelectionMenuAnimationShapesSection = (): JSX.Element => {
  const animationShapeKeys = Object.keys(animationShapes);
  const animationShapeValues = Object.values(animationShapes);
  const dispatch = useAppDispatch();
  const activeAnimationShape = useAppSelector(
    (state) => state.animationBrowser.activeAnimationShape
  );

  const animationShapeClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    let clickedElement = event.target as HTMLElement;
    let clickedElementId = clickedElement.id;
    if (clickedElementId.length === 0) {
      clickedElement = clickedElement.parentElement as HTMLElement;
      clickedElementId = clickedElement.id;
    }
    if (clickedElementId.length !== 0) {
      const splitIdArray = clickedElementId.split("-");
      const shapeSelected = splitIdArray[splitIdArray.length - 1];

      dispatch(
        animationBrowserSliceActions.setActiveAnimationShape(shapeSelected)
      );
    }
  };

  const animationShapeButtons = animationShapeValues.map((image, index) => {
    return (
      <button
        className={`${classes.animationShapeButton} ${
          activeAnimationShape === animationShapeKeys[index] &&
          classes.activeAnimationShapeButton
        }`}
        id={`animation-shape-button-${animationShapeKeys[index]}`}
        onClick={animationShapeClickHandler}
        key={`animation-shape-button-${animationShapeKeys[index]}-key`}
      >
        <img
          className={classes.animationShapeButtonImage}
          alt={`${animationShapeKeys[index]}`}
          src={image}
        />
      </button>
    );
  });

  return <>{animationShapeButtons}</>;
};
export default SelectionMenuAnimationShapesSection;

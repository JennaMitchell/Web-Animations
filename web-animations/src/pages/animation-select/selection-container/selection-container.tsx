import classes from "./selection-container.module.css";
import { useCallback, useEffect, useState } from "react";
import RotateAnimationCard from "./animation-cards/rotate/rotate-animation-card";
const AnimationSelectionContainer = (): JSX.Element => {
  const [activeAnimationSelection, setActiveAnimationSelection] = useState<
    string[]
  >([]);
  const [activeAnimationPageNumber, setActiveAnimationPageNumber] = useState(0);
  const numberOfItemsPerPage = 9;

  const activeAnimationPageHandler = useCallback(() => {
    const animationsNames = ["rotate"];
    let startingPageIndex = 0;
    let endingPageIndex = 0;

    if (activeAnimationPageNumber === 0) {
      endingPageIndex = numberOfItemsPerPage;
    } else {
      startingPageIndex = numberOfItemsPerPage * activeAnimationPageNumber;
      endingPageIndex = numberOfItemsPerPage * (activeAnimationPageNumber + 1);
    }

    if (startingPageIndex <= animationsNames.length) {
      if (endingPageIndex <= animationsNames.length) {
        setActiveAnimationSelection(
          animationsNames.slice(startingPageIndex, animationsNames.length)
        );
      } else {
        setActiveAnimationSelection(
          animationsNames.slice(startingPageIndex, endingPageIndex)
        );
      }
    }
  }, [activeAnimationPageNumber]);

  useEffect(() => {
    activeAnimationPageHandler();
  }, [activeAnimationPageHandler]);

  const renderReadyAnimationCards = activeAnimationSelection.map(
    (animationName: string, index: number) => {
      console.log(animationName);
      switch (animationName) {
        case "rotate":
          return (
            <div
              className={classes.animationTopCardContainer}
              key={`${animationName}-${index}`}
            >
              <RotateAnimationCard />
            </div>
          );
        default:
          return <div key={`${animationName}-${index}`}></div>;
      }
    }
  );

  return (
    <div className={classes.selectionTopContainer}>
      {activeAnimationSelection.length !== 0 && renderReadyAnimationCards}
    </div>
  );
};

export default AnimationSelectionContainer;

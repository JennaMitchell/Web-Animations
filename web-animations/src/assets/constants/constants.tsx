import catShape from "../animation-shapes/cat.png";
import cicleShape from "../animation-shapes/circle.png";
import crossShape from "../animation-shapes/cross.png";
import duckShape from "../animation-shapes/duck.png";
import hexagonShape from "../animation-shapes/hexagon.png";
import pentagonShape from "../animation-shapes/pentagon.png";
import rectangleShape from "../animation-shapes/rectangle.png";
import sawShape from "../animation-shapes/saw.png";
import squareShape from "../animation-shapes/square.png";
import starShape from "../animation-shapes/star.png";

import triangleShape from "../animation-shapes/triangle.png";

interface AnimationShapes {
  [key: string]: any;
}
export const animationShapes: AnimationShapes = {
  triangle: triangleShape,
  cat: catShape,
  circle: cicleShape,
  cross: crossShape,
  duck: duckShape,
  hexagon: hexagonShape,
  pentagon: pentagonShape,
  rectangle: rectangleShape,
  saw: sawShape,
  square: squareShape,
  star: starShape,
};

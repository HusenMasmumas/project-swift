import { ENUM_STATUS_MOVE } from "tools/util.enum";

export const moveShape = [
  {
    id: 1,
    span: 5,
    triangle: ["triangle-left"],
    status: ENUM_STATUS_MOVE.LEFT,
    footer: "moveShape",
  },
  {
    id: 2,
    span: 10,
    triangle: ["triangle-up", "triangle-down"],
    status: ENUM_STATUS_MOVE.UP_DOWN,
    footer: "movePosition",
  },
  {
    id: 3,
    span: 5,
    triangle: ["triangle-right"],
    status: ENUM_STATUS_MOVE.RIGHT,
    footer: "moveShape",
  },
];

export const shape = [
  {
    id: 1,
    name: "square",
  },
  {
    id: 2,
    name: "circle",
  },
  {
    id: 3,
    name: "oval",
  },
  {
    id: 4,
    name: "trapezoid",
  },
  {
    id: 5,
    name: "rectangle",
  },
  {
    id: 6,
    name: "parallelogram",
  },
];

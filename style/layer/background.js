"use strict";

import * as Color from "../constants/color.js";

/*
  Background Layer

  This is the base color of the map.
*/

export const base = {
  id: "background",
  type: "background",
  paint: {
    "background-color": Color.background,
  },
  layout: { visibility: "visible" },
};

export const pierArea = {
  id: "pierArea",
  type: "fill",
  source: "openmaptiles",
  "source-layer": "transportation",
  filter: ["all", ["==", "class", "pier"], ["==", "$type", "Polygon"]],
  paint: {
    "fill-color": Color.background,
  },
  layout: { visibility: "visible" },
};

export const pierLine = {
  id: "pierLine",
  type: "line",
  source: "openmaptiles",
  "source-layer": "transportation",
  filter: ["all", ["==", "class", "pier"], ["==", "$type", "LineString"]],
  paint: {
    "line-color": Color.background,
    "line-width": {
      base: 1.7,
      stops: [
        [14, 1],
        [20, 20],
      ],
    },
  },
  layout: {
    "line-cap": "butt",
    visibility: "visible",
  },
};

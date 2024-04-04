import { createEodash } from "@eodash/eodash";
import tools from "./tools";
import basedOnWms from "./basedOnWms";
import container from "./container";

export default createEodash((_store) => ({
  id: "template-id",
  stacEndpoint:
    "https://eodash.github.io/catalog-template/template_catalog/catalog.json",
  routes: [],
  brand: {
    name: "Dashboard",
    font: {
      family: "Poppins",
    },
    theme: {
      colors: {
        primary: "#880808",
        secondary: "#AA4A44",
        background: "#d3d3d3",
        surface: "#d3d3d3",
      },
    },
  },
  template: {
    gap: 6,
    background: {
      type: "internal",
      id: Symbol(),
      widget: {
        name: "EodashMap",
      },
    },
    widgets: [
      tools,
      basedOnWms,
      container,
      {
        type: "internal",
        id: Symbol(),
        layout: { x: 4, y: 0, h: 1, w: 4 },
        title: "Date Picker",
        slidable: false,
        widget: {
          name: "EodashDatePicker",
          properties: {
            inline: true,
          },
        },
      },
    ],
  },
}));

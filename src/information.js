import { store } from "@eodash/eodash";

const { currentUrl } = store.states;

/**
 * STAC information panel
 * @type {import("@eodash/eodash").FunctionalWidget}
 **/
export default {
  defineWidget: (selectedSTAC) => {
    // show "eox-stacinfo" web component if a stac object is selected and
    // hide it if not
    return selectedSTAC
      ? {
          id: "Information",
          title: "Information",
          type: "web-component",
          layout: { x: 9, y: 0, w: 3, h: 12 },
          widget: {
            // importing an installed dependency as a web component definition
            link: () => import("@eox/stacinfo"),
            tagName: "eox-stacinfo",
            // assigning `eox-stacinfo` attributes and properties
            properties: {
              // assigning currently selected endpoint from the store
              for: currentUrl,
              allowHtml: "true",
              styleOverride:
                "#properties li > .value {font-weight: normal !important;}",
              header: "[]",
              subheader: "[]",
              properties: '["description"]',
              featured: "[]",
              footer: "[]",
            },
          },
        }
      : null;
  },
};

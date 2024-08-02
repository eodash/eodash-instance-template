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
          layout: { x: 9, y: 0, w: 3, h: 8 },
          type: "web-component",
          widget: {
            // importing an installed dependency as a web component definition
            link: () => import("@eox/stacinfo"),
            // assigning `eox-stacinfo` attributes and properties
            properties: {
              class: "pa-5 fill-height",
              // assigning currently selected endpoint from the store
              for: currentUrl,
              allowHtml: "true",
              header: '["title"]',
              tags: '["themes"]',
              subheader: "[]",
              properties: '["satellite","sensor","agency","extent"]',
              featured: '["description","providers","assets","links"]',
              footer: '["sci:citation"]',
            },
            tagName: "eox-stacinfo",
          },
        }
      : null;
  },
};

import { createEodash } from "@eodash/eodash";
import light from "./templates/light";
import expert from "./templates/expert";
import compare from "./templates/compare";

export default createEodash({
    id: "demo",
    stacEndpoint: "https://esa-eodashboards.github.io/eodashboard-catalog/trilateral/catalog.json",
    brand: {
      name: "Demo",
      theme: {
        colors: {
          primary: "#fff",
          secondary: "#fff",
          surface: "#fff",
        },
      },
      footerText: "Demo configuration of eodash client",
    },
    templates: {
     light,
     expert,
     compare
    }
  });

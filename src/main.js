import { createEodash } from "@eodash/eodash";
import light from "./templates/light";
import expert from "./templates/expert";
import compare from "./templates/compare";

export default createEodash({
    id: "demo",
    stacEndpoint: "https://esa-eodashboards.github.io/eodashboard-catalog/trilateral/catalog.json",
    brand: {
      name: "Dashboard",
      font: {
        family: "Poppins",
        link: new URL("./assets/poppins.css", import.meta.url).href,
      },
      logo: "/logo.png",
      errorMessage:
        "something went wrong, please contact demo@email.com if the issue persists",
      footerText: "eodash instance template",
      theme: {
        colors: {
          primary: "#004170",
          secondary: "#004170",
          background: "#fff",
          surface: "#fff",
        },
      },
    },
    templates: {
     light,
     expert,
     compare
    }
  });

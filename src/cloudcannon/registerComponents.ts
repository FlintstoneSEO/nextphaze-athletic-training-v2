import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import { componentMap } from "./componentMap";

for (const [name, component] of Object.entries(componentMap)) {
  registerAstroComponent(name, component);
}

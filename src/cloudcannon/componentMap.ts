import RawHtml from "../components/RawHtml.astro";
import SiteFooter from "../components/SiteFooter.astro";
import SiteHeader from "../components/SiteHeader.astro";

export const componentMap = {
  visual_section: RawHtml,
  site_header: SiteHeader,
  site_footer: SiteFooter,
};

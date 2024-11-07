import { a as createComponent, r as renderTemplate, d as renderHead, e as addAttribute, b as renderComponent } from '../chunks/astro/server_C423uo1t.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from '../chunks/BaseHead_DAJ5a2tl.mjs';
import 'clsx';
import { a as getEntry } from '../chunks/_astro_content_Cwh9-dZd.mjs';
/* empty css                                 */
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_BuHq6iFx.mjs';
export { renderers } from '../renderers.mjs';

const $$Project = createComponent(async ($$result, $$props, $$slots) => {
  const project = await getEntry("projects", "arushi");
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${project.data.title}</title>${renderHead()}</head> <body> <header> <div class="polygon"> <div class="header-content"> <div class="header-title"> ${project.data.headerTitle} <div class="highlight">.</div> </div> </div> </div> </header> <!-- Median Section --> <div class="container"> <div class="content"> <p>${project.data.description1}</p> <p>${project.data.description2}</p> </div> </div> <div class="container"> <div class="text-blue"> ${project.data.sectionTitle} </div> </div> <div class="container"> <div class="content"> <p>${project.data.sectionDescription1}</p> <p>${project.data.sectionDescription2}</p> </div> </div> <!-- YouTube Iframe --> <iframe${addAttribute(project.data.youtubeUrl, "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe> </body> </html>`;
}, "C:/Users/Acer/OneDrive/Desktop/Astro/Astro/src/components/Project.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Project", $$Project, {})} </body></html>`;
}, "C:/Users/Acer/OneDrive/Desktop/Astro/Astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Acer/OneDrive/Desktop/Astro/Astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

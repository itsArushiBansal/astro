import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderHead, e as addAttribute, f as renderSlot } from './astro/server_C423uo1t.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from './BaseHead_DAJ5a2tl.mjs';
import { $ as $$Header, a as $$FormattedDate, b as $$Footer } from './FormattedDate_Bys7X8gj.mjs';
/* empty css                         */

const $$Astro = createAstro("http://localhost:4321");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "C:/Users/Acer/OneDrive/Desktop/Astro/Astro/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };

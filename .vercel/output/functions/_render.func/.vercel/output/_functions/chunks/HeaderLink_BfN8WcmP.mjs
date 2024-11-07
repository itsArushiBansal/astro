import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as renderSlot } from './astro/server_C423uo1t.mjs';
/* empty css                                                                  */
import 'clsx';

const $$Astro = createAstro("http://localhost:4321");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Users/Acer/OneDrive/Desktop/Astro/Astro/src/components/HeaderLink.astro", void 0);

export { $$HeaderLink as $ };
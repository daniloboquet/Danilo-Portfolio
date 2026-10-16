import type { ImageMetadata } from "astro";

// Covers — the tile images already used by the Earlier Work strip.
import juiceeCover from "../assets/earlier/jucee-site.jpg";
import zeusSmiteCover from "../assets/earlier/zeus-smite-site.jpg";
import tvapeCover from "../assets/earlier/tvape-site.jpg";
import royalCover from "../assets/earlier/royal-distributing.jpg";
import zeusCover from "../assets/earlier/zeus-arsenal-brand.jpg";
import officiumCover from "../assets/earlier/officium-brand.jpg";
import booksCover from "../assets/earlier/book-covers.jpg";
import printCover from "../assets/earlier/print-catalog.jpg";

// Galleries — curated legacy assets, reviewed for content and alt accuracy.
import jucee01 from "../assets/earlier/galleries/jucee/01.jpg";
import jucee02 from "../assets/earlier/galleries/jucee/02.jpg";
import jucee03 from "../assets/earlier/galleries/jucee/03.jpg";
import jucee04 from "../assets/earlier/galleries/jucee/04.jpg";
import tvape01 from "../assets/earlier/galleries/tvape/01.jpg";
import tvape02 from "../assets/earlier/galleries/tvape/02.jpg";
import tvape03 from "../assets/earlier/galleries/tvape/03.jpg";
import tvape04 from "../assets/earlier/galleries/tvape/04.jpg";
import tvape05 from "../assets/earlier/galleries/tvape/05.jpg";
import tvape06 from "../assets/earlier/galleries/tvape/06.jpg";
import royal01 from "../assets/earlier/galleries/royal/01.jpg";
import royal02 from "../assets/earlier/galleries/royal/02.jpg";
import royal03 from "../assets/earlier/galleries/royal/03.png";
import royal04 from "../assets/earlier/galleries/royal/04.jpg";
import royal05 from "../assets/earlier/galleries/royal/05.jpg";
import zeus01 from "../assets/earlier/galleries/zeus/01.jpg";
import zeus02 from "../assets/earlier/galleries/zeus/02.jpg";
import zeus03 from "../assets/earlier/galleries/zeus/03.jpg";
import zeus04 from "../assets/earlier/galleries/zeus/04.jpg";
import zeus05 from "../assets/earlier/galleries/zeus/05.jpg";
import zeus06 from "../assets/earlier/galleries/zeus/06.jpg";
import zeus07 from "../assets/earlier/galleries/zeus/07.jpg";
import zeus08 from "../assets/earlier/galleries/zeus/08.jpg";
import print01 from "../assets/earlier/galleries/print/01.jpg";
import print02 from "../assets/earlier/galleries/print/02.jpg";
import print03 from "../assets/earlier/galleries/print/03.jpg";
import print04 from "../assets/earlier/galleries/print/04.jpg";
import print05 from "../assets/earlier/galleries/print/05.jpg";
import print06 from "../assets/earlier/galleries/print/06.jpg";
import print07 from "../assets/earlier/galleries/print/07.jpg";
import print08 from "../assets/earlier/galleries/print/08.png";

export interface EarlierShot {
  src: ImageMetadata;
  alt: string;
}

export interface EarlierLink {
  label: string;
  href: string;
}

export interface EarlierProject {
  id: string;
  title: string;
  tag: string;
  context: string;
  cover: ImageMetadata;
  coverAlt: string;
  /** Role · duration — shown in the gallery header when present. */
  meta?: string;
  /** Present only where the material supports a real gallery. */
  gallery?: EarlierShot[];
  /** Verified live links (checked 2026-10-15). */
  live?: EarlierLink[];
}

export const earlierProjects: EarlierProject[] = [
  {
    id: "jucee",
    title: "Jücee",
    tag: "UX/UI · E-commerce",
    context: "A full brand and storefront, ready for launch — shelved when Canadian regulations changed.",
    cover: juiceeCover,
    coverAlt: "Jücee e-commerce experience shown on a phone",
    meta: "Lead UX & Brand Designer · 7 months",
    gallery: [
      { src: jucee01, alt: "Jücee mobile homepage — “Bursting with Flavour” hero with bottles artwork, shown in hand" },
      { src: jucee02, alt: "Jücee product page — the Uberfresh pod with flavor notes and purchase options" },
      { src: jucee03, alt: "Jücee flavor pages — Tropical Breeze, Zitronelon, and Uberfresh side by side" },
      { src: jucee04, alt: "Jücee storefront screens — product page, cart grid, and the Bō Plus device page" },
    ],
  },
  {
    id: "zeus-smite",
    title: "Zeus Smite",
    tag: "UX/UI · E-commerce",
    context: "Product-page UX for the Zeus Smite line.",
    cover: zeusSmiteCover,
    coverAlt: "Zeus Smite product page with a buy action",
  },
  {
    id: "tvape",
    title: "TVape Wholesale",
    tag: "E-commerce · B2B",
    context: "Wholesale ordering and product UX — desktop, checkout, and mobile.",
    cover: tvapeCover,
    coverAlt: "TVape Wholesale brand shown on a monitor",
    meta: "Lead UX/UI Designer · 5 months",
    gallery: [
      { src: tvape01, alt: "TVape Wholesale brand mark on a desktop monitor" },
      { src: tvape02, alt: "TVape homepage — critic-quote hero and category shortcuts" },
      { src: tvape03, alt: "TVape product page — Zeus Arc GT with pricing, reviews, and add-to-cart" },
      { src: tvape04, alt: "Product page detail — in-the-box accessories, spec tables, and how-it-works videos" },
      { src: tvape05, alt: "TVape Wholesale storefront — Zeus Smite hero with tiered wholesale pricing" },
      { src: tvape06, alt: "TVape Wholesale mobile flow — sign-in, search, filters, and tiered pricing screens" },
    ],
  },
  {
    id: "royal",
    title: "Royal Distributing",
    tag: "E-commerce · Mobile",
    context: "Three-plus years in-house — parts fitment, ride shopping, and the Riders program.",
    cover: royalCover,
    coverAlt: "Royal Distributing mobile storefront with rider profiles",
    meta: "Lead UX/UI Designer & Web Developer · 3.5 years",
    gallery: [
      { src: royal01, alt: "Royal Riders program on mobile — hero and featured rider cards" },
      { src: royal02, alt: "Royal Riders desktop page — rider profiles and stories" },
      { src: royal03, alt: "Rider stats cards and the “Become a Royal Rider” call to action" },
      { src: royal04, alt: "Shop Your Ride parts listing — fitment filters, prices, and ratings" },
      { src: royal05, alt: "Royal in the Community — Kelly Shires Foundation partnership page" },
    ],
    live: [
      { label: "Royal Riders", href: "https://www.royaldistributing.com/ca_en/royal-riders" },
      { label: "Shop Your Ride", href: "https://www.royaldistributing.com/ca_en/atv-utv/parts.html" },
      { label: "In the Community", href: "https://www.royaldistributing.com/ca_en/royal-in-the-community" },
    ],
  },
  {
    id: "zeus",
    title: "Zeus Arsenal",
    tag: "Brand & E-commerce",
    context: "Brand identity and storefront revamp — live today at zeusarsenal.com.",
    cover: zeusCover,
    coverAlt: "Zeus Arsenal brand and packaging lineup",
    meta: "Lead UX Designer · 6 months",
    gallery: [
      { src: zeus01, alt: "ZEUS Arsenal brand hero — wordmark over the product lineup" },
      { src: zeus02, alt: "Product lockup system — Zeus sub-brand wordmarks" },
      { src: zeus03, alt: "Wireframes — main page and product page layouts with callouts" },
      { src: zeus04, alt: "Sitemap — product taxonomy, buy flow, and cart across regions" },
      { src: zeus05, alt: "UI kit — navigation icons, search, and region selector" },
      { src: zeus06, alt: "Mobile product page — Zeus Smite hero with buy action" },
      { src: zeus07, alt: "Responsive plan — phone, tablet, and desktop layouts" },
      { src: zeus08, alt: "Brand guide — logo rules over dark and mixed backgrounds" },
    ],
    live: [{ label: "zeusarsenal.com", href: "https://zeusarsenal.com/" }],
  },
  {
    id: "officium",
    title: "Officium Design",
    tag: "Brand identity",
    context: "Brand identity for a design practice.",
    cover: officiumCover,
    coverAlt: "Officium Design brand mark",
  },
  {
    id: "books",
    title: "Book covers",
    tag: "Publishing design",
    context: "Cover and illustration work for children’s books.",
    cover: booksCover,
    coverAlt: "Stack of illustrated book covers",
  },
  {
    id: "print",
    title: "Catalogs & print",
    tag: "Print design",
    context: "Catalogs, menus, stationery, and covers from the Brazil years.",
    cover: printCover,
    coverAlt: "Printed children’s catalog",
    meta: "Graphic & print design",
    gallery: [
      { src: print01, alt: "Stack of illustrated children’s catalogs" },
      { src: print02, alt: "Catalog spread — illustrated table of contents for a publisher’s book list" },
      { src: print03, alt: "Menu covers — anniversary identity for a restaurant menu" },
      { src: print04, alt: "Party stationery — menus and invitation for a child’s birthday" },
      { src: print05, alt: "Globetrotter exchange agency — brand collateral and business cards" },
      { src: print06, alt: "Product catalog spread — houseware range with price lists" },
      { src: print07, alt: "Children’s book cover — “O segredo de Jacarelo” illustration" },
      { src: print08, alt: "E-liquid flavor cards — Quad Berry line with fruit artwork" },
    ],
  },
];

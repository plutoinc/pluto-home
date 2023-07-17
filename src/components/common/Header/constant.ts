import { ABOUT_PATH, HOME_PATH, PRODUCT_PATH } from "@/routes";

export interface HeaderMenu {
  href: string;
  label: string;
}

export const HEADER_MENU: HeaderMenu[] = [
  { href: HOME_PATH, label: "Home" },
  { href: PRODUCT_PATH, label: "Product" },
  { href: ABOUT_PATH, label: "About" },
];

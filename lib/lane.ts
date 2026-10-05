import type { Locale } from "./prefs";

export function lane(path: string, locale: Locale) {
  const prefix = locale === "en" ? "/en-gb" : "";
  return `https://www.laneportugal.pt${prefix}${path}`;
}

export const MAPS =
  "https://www.google.pt/maps/place/LANE+Exclusive+Real+Estate+Cascais+%7C+Luxury+Properties+Portugal/@38.6974639,-9.4238436,17z/data=!4m15!1m8!3m7!1s0xd1ec42f15a09e99:0x138c362259282863!2sR.+Afonso+Sanches+25B,+2750-338+Cascais!3b1!8m2!3d38.6974597!4d-9.4212633!16s%2Fg%2F11c2dzy_5n!3m5!1s0xd1ec42f15a24429:0x5efcd591a0ba7de3!8m2!3d38.6974597!4d-9.4212633!16s%2Fg%2F1tgc114l?hl=pt-PT&entry=ttu";

export const SOCIAL = {
  instagram: "https://www.instagram.com/lane_exclusive_real_estate/",
  facebook: "https://www.facebook.com/laneimobiliaria/",
  linkedin: "http://www.linkedin.com/in/lane-exclusive-real-estate-83456ba9/",
};

export const PHONE_TEL = "tel:+351210170425";
export const PHONE_DISPLAY = "(+351) 210 170 425";
export const EMAIL = "info@laneportugal.com";
export const RECRUIT_EMAIL = "recrutamento@laneportugal.com";

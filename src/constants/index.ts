import {
  bgBoostDesktop,
  bgBoostMobile,
  bgShortenMobile,
  bgShortenDesktop,
  iconBrandRecognition,
  iconDetailedRecords,
  iconFullyCustom,
  illustrationWorking,
  logo,
  hamburger,
} from "../assets/";

import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
} from "../components/socialIcons.tsx";

export const navLinks = [
  {
    label: "Features",
    href: "#features",
    extras: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    label: "Pricing",
    href: "#pricing",
    extras: ["Blog", "Developers", "Support"],
  },
  {
    label: "Resources",
    href: "#resources",
    extras: ["About", "Our Team", "Careers", "Contact"],
  },
];

export const hero = {
  heading: "More than just short links",
  p: "Build your brand's recognition and get detailed insights on how your links are performing.",
};

export const cta = {
  signup: {
    label: "Sign Up",
    href: "/signup",
  },
  login: {
    label: "Login",
    href: "/login",
  },
  getStarted: {
    label: "Get Started",
    href: "/signup",
  },
};

export const shorten = {
  img: { desktop: bgShortenDesktop, mobile: bgShortenMobile },
  input: {
    placeholder: "Shorten a link here...",
    error: "Please add a link.",
  },
  btnLabel: "Shorten it!",
};

export const advancedStatistics = {
  heading: {
    h1: "Advanced Statistics",
    p: "Track how your links are performing accross the web with our advanced statistics dashboard.",
  },
  section: [
    {
      img: iconBrandRecognition,
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content.",
    },
    {
      img: iconDetailedRecords,
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      img: iconFullyCustom,
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, superchargin audience engagement.",
    },
  ],
};

export const boost = {
  img: { mobile: bgBoostMobile, desktop: bgBoostDesktop },
  h1: "Boost your links today",
  cta: cta.getStarted,
};

export const socials = [
  {
    icon: Facebook,
    href: "https://facebook.com",
  },
  {
    icon: Twitter,
    href: "https://x.com",
  },
  {
    icon: Pinterest,
    href: "https://pinterest.com",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
  },
];
export { logo };

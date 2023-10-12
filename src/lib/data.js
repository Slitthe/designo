import webDesignCardMobileImg from "../../public/web-design/card-mobile.jpg";
import webDesignCardTabletImg from "../../public/web-design/card-tablet.jpg";
import webDesignCardDesktopImg from "../../public/web-design/card-desktop.jpg";
import expressImg from "../../public/web-design/image-express.jpg";
import transferImg from "../../public/web-design/image-transfer.jpg";
import photonImg from "../../public/web-design/image-photon.jpg";
import builderImg from "../../public/web-design/image-builder.jpg";
import blogrImg from "../../public/web-design/image-blogr.jpg";
import campImg from "../../public/web-design/image-camp.jpg";

import appDesignCardMobileImg from "../../public/app-design/card-mobile.jpg";
import appDesignCardTabletImg from "../../public/app-design/card-tablet.jpg";
import appDesignCardDesktopImg from "../../public/app-design/card-desktop.jpg";
import airfilterImg from "../../public/app-design/image-airfilter.jpg";
import eyecamImg from "../../public/app-design/image-eyecam.jpg";
import faceitImg from "../../public/app-design/image-faceit.jpg";
import loopstudiosImg from "../../public/app-design/image-loopstudios.jpg";
import todoImg from "../../public/app-design/image-todo.jpg";

import graphicDesignCardMobileImg from "../../public/graphic-design/card-mobile.jpg";
import graphicDesignCardTabletImg from "../../public/graphic-design/card-tablet.jpg";
import graphicDesignCardDesktopImg from "../../public/graphic-design/card-desktop.jpg";
import boxedWaterImg from "../../public/graphic-design/image-boxed-water.jpg";
import changeImg from "../../public/graphic-design/image-change.jpg";
import scienceImg from "../../public/graphic-design/image-science.jpg";

import australiaImg from "../../public/locations/image-map-australia.png";
import canadaImg from "../../public/locations/image-map-canada.png";
import ukImg from "../../public/locations/image-map-united-kingdom.png";

export const projects = [
  {
    slug: "web-design",
    name: "Web Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences..",
    imgSources: {
      mobile: webDesignCardMobileImg.src,
      tablet: webDesignCardTabletImg.src,
      desktop: webDesignCardDesktopImg.src,
    },
    projectSamples: [
      {
        imgSrc: expressImg.src,
        title: "Express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        imgSrc: transferImg.src,
        title: "Transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
      },
      {
        imgSrc: photonImg.src,
        title: "Photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        imgSrc: builderImg.src,
        title: "Builder",
        description:
          "Connects users with local contractors based on their location",
      },
      {
        imgSrc: blogrImg.src,
        title: "Blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
      },
      {
        imgSrc: campImg.src,
        title: "Camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
      },
    ],
  },
  {
    slug: "app-design",
    name: "App Design",
    description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    imgSources: {
      mobile: appDesignCardMobileImg.src,
      tablet: appDesignCardTabletImg.src,
      desktop: appDesignCardDesktopImg.src,
    },
    projectSamples: [
      {
        imgSrc: airfilterImg.src,
        title: "Airfilter",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        imgSrc: eyecamImg.src,
        title: "Eyecam",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        imgSrc: faceitImg.src,
        title: "Faceit",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        imgSrc: todoImg.src,
        title: "Todo",
        description:
          "A todo app that features cloud sync with light and dark mode",
      },
      {
        imgSrc: loopstudiosImg.src,
        title: "Loopstudios",
        description: "A VR experience app made for Loopstudios",
      },
    ],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    imgSources: {
      mobile: graphicDesignCardMobileImg.src,
      tablet: graphicDesignCardTabletImg.src,
      desktop: graphicDesignCardDesktopImg.src,
    },
    projectSamples: [
      {
        imgSrc: changeImg.src,
        title: "Tim Brown",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
      },
      {
        imgSrc: boxedWaterImg.src,
        title: "Boxed Water",
        description: "A simple packaging concept made for Boxed Water",
      },
      {
        imgSrc: scienceImg.src,
        title: "SCIENCE!",
        description:
          "A poster made in collaboration with the Federal Art Project",
      },
    ],
  },
];

export const locations = [
  {
    name: "Canada",
    locationImgSrc: canadaImg.src,
    illustrationSrc: "/illustration-canada.svg",
    address: {
      name: "Designo Central Office",
      street: "3886 Wellington",
      misc: "Toronto, Ontario M9C 3J5",
    },
    contact: {
      phone: "+1 253-863-8967",
      email: "contact@designo.co",
    },
  },
  {
    name: "Australia",
    locationImgSrc: australiaImg.src,
    illustrationSrc: "/illustration-australia.svg",

    address: {
      name: "Designo AU Office",
      street: "19 Balonne Street",
      misc: "New South Wales 2443",
    },
    contact: {
      phone: "(02) 6720 9092",
      email: "contact@designo.au",
    },
  },
  {
    name: "United Kingdom",
    locationImgSrc: ukImg.src,
    illustrationSrc: "/illustration-united-kingdom.svg",

    address: {
      name: "Designo UK Office",
      street: "13 Colorado Way",
      misc: "Rhyd-y-fro SA8 9GA",
    },
    contact: {
      phone: "078 3115 1400",
      email: "contact@designo.uk",
    },
  },
];

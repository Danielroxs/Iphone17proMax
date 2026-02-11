import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: ["Enter A19 Pro.", "Game‑changing chip."],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Pro Camera", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Advanced cooling system,",
      "Consistent peak performance.",
      "Game and create non-stop.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Stunning new colors.", "Choose your unique style."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 17 Pro Cosmic Orange",
    color: ["#EB5E28", "#1F2E3D", "#E5E6E8"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 17 Pro Deep Blue",
    color: ["#1F2E3D", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 17 Pro Silver",
    color: ["#E5E6E8", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
];

export const sizes = [
  { label: '6.3"', value: "small" },
  { label: '6.9"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

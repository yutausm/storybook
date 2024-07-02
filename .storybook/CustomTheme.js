import { create } from "@storybook/theming";
import brandLogo from "../src/stories/assets/BNFJ23Y4ZP.svg";

export default create({
  // base theme
  base: "light",

  // primary color
  colorPrimary: "hotpink",
  // side menu color
  colorSecondary: "deepskyblue",
  // -- UI --
  // background
  appBg: "white",
  // contents background
  appContentBg: "silver",
  // border color
  appBorderColor: "gray",
  // radius(small window on toolbar menu when slected)
  appBorderRadius: 4,

  // -- Typography --
  // font family
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  // font colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255, 0.9)",

  // -- Toolbar default and active colors --
  // toolber font color
  barTextColor: "silver",
  // menu font color on toolbar when selected
  barSelectedColor: "black",
  // toolbar background
  barBg: "hotpink",

  // -- Form colors --
  // input background
  inputBg: "white",
  // input border color
  inputBorder: "silver",
  // font color in input
  inputTextColor: "black",
  // radius for input
  inputBorderRadius: 4,

  // -- Logo --
  // logo alt text
  brandTitle: "Custom Storybook",
  // logo link url
  brandUrl: "https://example.com",
  // logo image
  brandImage: brandLogo,
});

import { create } from "@storybook/theming";
import brandLogo from "../src/stories/assets/storybook-logo.png";

const colors = {
  base: '#f9f8f6',
  assort: '#401d00',
  accsent: '#b67337',
  primary: '#401d00',
  secondary: '#2a4c60',
  border: '#401d00',
  font: '#401d00',
  inverse: 'rgba(64, 29, 0, 0.5)',
}
export default create({
  // base theme
  base: colors.base,

  // primary color
  colorPrimary: colors.primary,
  // side menu color
  colorSecondary: colors.secondary,
  // -- UI --
  // background
  appBg: colors.base,
  // contents background
  appContentBg: colors.base,
  // border color
  appBorderColor: colors.border,
  // radius(small window on toolbar menu when slected)
  appBorderRadius: 4,

  // -- Typography --
  // font family
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  // font colors
  textColor: colors.font,
  textInverseColor: colors.inverse,

  // -- Toolbar default and active colors --
  // toolber font color
  barTextColor: colors.font,
  // menu font color on toolbar when selected
  barSelectedColor: colors.font,
  // toolbar background
  barBg: colors.base,

  // -- Form colors --
  // input background
  inputBg: colors.base,
  // input border color
  inputBorder: colors.border,
  // font color in input
  inputTextColor: colors.font,
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

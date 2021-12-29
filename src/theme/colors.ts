import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#F3BB2F",
  primaryBright: "#C4B454",
  primaryDark: "#aa8929",
  secondary: "#FFBF00",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  title: "#000000",
  navBar: "#00151E",
  sideBar: "#001930",
  background: "#00151E",
  white: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#000000",
  input: "linear-gradient(to right, #dce35b, #45b649)",
  tertiary: "#EFF4F5",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#808191",
  borderColor: "#E9EAEB",
  card: "#001930",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  title: "#FFFFFF",
  navBar: "#27262c",
  sideBar: "#27262c",
  secondary: "#9A6AFF",
  background: "#343135",
  white: "#FFFFFF",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

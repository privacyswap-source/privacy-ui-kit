import { Colors } from "./types";

export const baseColors = {
  failure: "#F3BA2F",
  primary: "#F3BA2F",
  primaryBright: "#F3BA2F",
  primaryDark: "#F3BA2F",
  secondary: "#F3BA2F",
  success: "#F3BA2F",
  warning: "#F3BA2F",
};

export const brandColors = {
  binance: "#FABE41",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#00151e",
  backgroundDisabled: "#00151e",
  contrast: "#00151e",
  invertedContrast: "#00151e",
  input: "#00151e",
  tertiary: "#F3BA2F",
  text: "#F3BA2F",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#F3BA2F",
  card: "#00151e",
  heroColor: "#f2f5ff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
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
  heroColor: "#f2f5f",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

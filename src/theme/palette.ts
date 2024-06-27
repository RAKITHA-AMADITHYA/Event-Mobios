import { Color } from "@mui/material";
import { Palette, alpha } from "@mui/material/styles";
import {
  PaletteAugmentColorOptions,
  PaletteColor,
} from "@mui/material/styles/createPalette";

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#CB3066",
  dark: "#16BFFD",
  darker: "#091A7A",
};
const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#CB3066",
  dark: "#16BFFD",
  darker: "#091A7A",
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#B5334A",
  dark: "#2D388A",
  darker: "#04297A",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
};

const GREY: Color = {
  // 0: "#FFFFFF",
  50: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  // 500_8: alpha("#919EAB", 0.08),
  // 500_12: alpha("#919EAB", 0.12),
  // 500_16: alpha("#919EAB", 0.16),
  // 500_24: alpha("#919EAB", 0.24),
  // 500_32: alpha("#919EAB", 0.32),
  // 500_48: alpha("#919EAB", 0.48),
  // 500_56: alpha("#919EAB", 0.56),
  // 500_80: alpha("#919EAB", 0.8),
  A100: alpha("#919EAB", 0.08),
  A200: alpha("#919EAB", 0.08),
  A400: alpha("#919EAB", 0.24),
  A700: alpha("#919EAB", 0.56),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500],
  action: {
    hover: GREY[500],
    selected: GREY[500],
    disabled: GREY[500],
    disabledBackground: GREY[500],
    focus: GREY[500],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    selectedOpacity: 1,
    focusOpacity: 1,
    activatedOpacity: 1,
  },
};

const palette: { light: Palette; dark: Palette } = {
  light: {
    ...COMMON,
    mode: "light",
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: "#fff", default: "#fff" },
    action: { active: GREY[600], ...COMMON.action },
    contrastThreshold: 1,
    tonalOffset: 1,
    getContrastText: (background: string) => background,
    augmentColor: (palette: PaletteAugmentColorOptions) => {
      console.log(palette);

      const color: PaletteColor = {
        contrastText: "#ffff",
        dark: "#ffffff",
        light: "#000000",
        main: "#ddddd",
      };

      return color;
    },
  },
  dark: {
    ...COMMON,
    mode: "dark",
    text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900] },
    action: { active: GREY[500], ...COMMON.action },
    contrastThreshold: 1,
    tonalOffset: 1,
    getContrastText: (background: string) => background,
    augmentColor: (palette: PaletteAugmentColorOptions) => {
      console.log(palette);
      
      const color: PaletteColor = {
        contrastText: "#ffff",
        dark: "#ffffff",
        light: "#000000",
        main: "#ddddd",
      };

      return color;
    },
    grey: GREY,
  },
  // navbars: {
  //   main: "#212529",
  // },
};

export default palette;

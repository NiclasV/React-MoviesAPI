//Define Your Themes: Create two theme objects, one for the light theme and one for the dark theme. 
//Each theme should contain the color values and other styling properties specific to that theme.

interface Theme {
  [key: string]: string | number | Function | {};
}

const typography: Theme = {
  h1: {
    fontSize: "48",
    fontSizeMin: "32",
  },
  h2: {
    fontSize: "38",
    fontSizeMin: "28",
  },
  h3: {
    fontSize: "32",
    fontSizeMin: "24",
  },
  h4: {
    fontSize: "24",
    fontSizeMin: "18",
  },
  font: {
    header: 'Montserrat, sans-serif',
    main: 'Open Sans, sans-serif',
  },
}

export const lightTheme: Theme = {
  primary: {
    100: "#c9e3b3",
    200: "#b6d09e",
    300: "#aac590",
    400: "#9cbc7d",
    500: "#7b985f", 
    600: "#69894a",
    700: "#445a2f",
    800: "#344425",
    900: "#293919"
  },
  secondary: {
    100: "#f7e6bc",
    200: "#e3d2ac",
    300: "#d4bc83",
    400: "#c6a559",
    500: "#b88f30",
    600: "#937226",
    700: "#6b570d",
    800: "#403506",
    900: "#302304",
  },
  background: {
    100: "#e7e7e7",
    200: "#cfd0ce",
    300: "#b7b8b6",
    400: "#9fa19d",
    500: "#878985",
    600: "#6c6e6a",
    700: "#515250",
    800: "#41443e",
    900: "#282a28",
  },
  text: {
    100: "#181a16",
    200: "#30342d",
    300: "#474f43",
    400: "#5f695a",
    500: "#778370",
    600: "#929c8d",
    700: "#adb5a9",
    800: "#c9cdc6",
    900: "#e4e6e2"
  },
  typography
}

export const darkTheme: Theme = {
  primary: {
    100: "#293919",
    200: "#344425",
    300: "#445a2f",
    400: "#69894a",
    500: "#7b985f",
    600: "#9cbc7d",
    700: "#aac590",
    800: "#b6d09e",
    900: "#c9e3b3",
  },
  secondary: {
    100: "#302304",
    200: "#403506",
    300: "#6b570d",
    400: "#937226",
    500: "#b88f30",
    600: "#c6a559",
    700: "#d4bc83",
    800: "#e3d2ac",
    900: "#f7e6bc",
  },
  background: {
    100: "#282a28",
    200: "#41443e",
    300: "#515250",
    400: "#6c6e6a",
    500: "#878985",
    600: "#9fa19d",
    700: "#b7b8b6",
    800: "#cfd0ce",
    900: "#e7e7e7",
  },
  text: {
    100: "#e4e6e2",
    200: "#c9cdc6",
    300: "#adb5a9",
    400: "#929c8d",
    500: "#778370",
    600: "#5f695a",
    700: "#474f43",
    800: "#30342d",
    900: "#181a16"
  },
  typography
}
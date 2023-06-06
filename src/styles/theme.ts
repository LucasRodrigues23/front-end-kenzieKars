import { extendTheme } from "@chakra-ui/react";
import { ComponentStyleConfig } from "@chakra-ui/react";

const imputTheme: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};

const buttonTheme: ComponentStyleConfig = {
  defaultProps: {
    variant: "brand1",
    size: "md",
  },
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    fontWeight: "semibold",
  },
  sizes: {
    md: {
      height: "38px",
      px: "20px",
      fontSize: "button.md",
    },
    lg: {
      height: "48px",
      px: "15px",
      fontSize: "button.lg",
    },
  },
  variants: {
    grey1: {
      bg: "grey.0",
      color: "white.1",
      _hover: {
        bg: "grey.1",
        color: "white.1",
      },
    },
    negative: {
      bg: "grey.6",
      color: "grey.2",
      _hover: {
        bg: "grey.5",
      },
    },
    disable: {
      bg: "grey.5",
      color: "white.1",
    },
    brand1: {
      bg: "brand.1",
      color: "white.1",
      _hover: {
        bg: "brand.2",
      },
    },
    brandOpacity: {
      bg: "brand.4",
      color: "brand.1",
    },
    light: {
      bg: "grey.10",
      color: "grey.1",
    },
    outlineLight: {
      bg: "transparent",
      color: "grey.10",
      border: "2px solid",
      borderColor: "grey.10",
      _hover: {
        bg: "grey.10",
        color: "grey.1",
      },
    },
    outline1: {
      bg: "transparent",
      color: "grey.0",
      border: "2px solid",
      borderColor: "grey.0",
      _hover: {
        bg: "grey.1",
        color: "grey.10",
        borderColor: "transparent",
      },
    },
    outline2: {
      color: "grey.0",
      border: "2px solid",
      borderColor: "grey.4",
      _hover: {
        bg: "grey.1",
        color: "grey.10",
        borderColor: "transparent",
      },
    },
    outlineBrand1: {
      color: "brand.1",
      border: "2px solid",
      borderColor: "brand.1",
      _hover: {
        bg: "brand.4",
      },
    },
    btnLink: {
      color: "grey.0",
      textDecoration: "none",
      _hover: {
        bg: "grey.8",
      },
    },
    alert: {
      bg: "alert.3",
      color: "alert.1",
      _hover: {
        bg: "alert.2",
      },
    },
    success: {
      bg: "success.3",
      color: "success.1",
      _hover: {
        bg: "success.2",
      },
    },
    brandDisable: {
      bg: "brand.3",
      color: "brand.4",
    },
  },
};

const customTheme = extendTheme({
  colors: {
    brand: {
      1: "#4529E6",
      2: "#5126EA",
      3: "#B0A6F0",
      4: "#EDEAFD",
    },
    grey: {
      0: "#0B0D0D",
      1: "#212529",
      2: "#495057",
      3: "#868E96",
      4: "#ADB5BD",
      5: "#CED4DA",
      6: "#DEE2E6",
      7: "#E9ECEF",
      8: "#F1F3F5",
      9: "#F8F9FA",
      10: "#FDFDFD",
    },
    white: {
      1: "#ffffff",
    },
    sucesses: {
      1: "#18794E",
      2: "#CCEBD7",
      3: "#DDF3E4",
    },
    alert: {
      1: "#CD2B31",
      2: "#FDD8D8",
      3: "#FFE5E5",
    },
    randomProfile: {
      1: "#E34D8C",
      2: "#C04277",
      3: "#7D2A4D",
      4: "#7000FF",
      5: "#6200E3",
      6: "#36007D",
      7: "#349974",
      8: "#2A7D5F",
      9: "#153D2E",
      10: "#6100ff",
      11: "#5700E3",
      12: "#30007D",
    },
  },
  fontWeights: {
    black: 900,
    extrabold: 800,
    semibold: 600,
    bold: 700,
    medium: 500,
    normal: 400,
  },

  fontSizes: {
    heading: {
      1: "14px",
      2: "16px",
      3: "20px",
      4: "24px",
      5: "28px",
      6: "32px",
      7: "36px",
      8: "44px",
    },
    ipunt: {
      md: "16px",
      label: "14px",
    },
    body: {
      1: "24px",
      2: "28px",
    },
  },
  button: {
    lg: "16px",
    md: "14px",
    sm: "12px",
    xs: "10px",
  },
  components: {
    Inpunt: imputTheme,
    Button: buttonTheme,
  },
});

export default customTheme;

const colors = {
  primary: "#9966ff",
  secondary: "#ebf1f5",
  error: "#f00",
  black: "#000",
  text: {
    white: "#fff",
    black: "#333",
  },
  gray: {
    100: "#e9e9e9",
    200: "#d9d9d9",
    300: "#656565",
  },
};

const fontSize = {
  small: "16px",
  midium: "18px",
  large: "22px",
};

const fontWeight = {
  thin: 300,
  regular: 500,
  bold: 800,
};

//line-height, letter-spacing.....

// 객체에서 키와 값이 같으면 축약할 수 있다.
const theme = {
  // colors: colors
  colors,
  fontSize,
  fontWeight,
};
export default theme;

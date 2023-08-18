import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: "Kanit",
  fonts: [
    {
      src: `/assets/kanit/Kanit-Regular.ttf`,
      fontWeight: "normal",
    },
  ],
});

export const baseStyle = StyleSheet.create({
  page: {
    fontFamily: "Kanit",
    padding: "0.5in",
    fontSize: 9.5,
    position: 'relative',
    lineHeight: 1.25,
  },
  title: {
    fontSize: 16,
  },
});

import { StyleSheet } from "@react-pdf/renderer";
import { baseStyle } from "../styles";

export const styles = StyleSheet.create({
  ...baseStyle,
  footerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: "0.5in",
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
  },

  logo: {
    height: 65,
    width: 65,
    objectFit: "contain",
    marginHorizontal: "auto",
  },

  divider: {
    borderTop: 1,
    borderTopColor: "#CBCBCB",
    marginVertical: 7,
  },

  signContent: {
    flexDirection: "row",
    width: "100%",
    marginTop: "40px",
  },

  signText: {
    marginRight: "10px",
    width: "100%",
  },

  dateText: {
    width: "100%",
  },
});

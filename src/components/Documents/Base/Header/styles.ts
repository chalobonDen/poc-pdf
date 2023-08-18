import { StyleSheet } from "@react-pdf/renderer";
import { baseStyle } from "../styles";

export const getStyles = (color: string = "red") =>
  StyleSheet.create({
    header: {},
    title: {
      ...baseStyle.title,
      textAlign: "center",
      color,
    },
    subTitle: {
      textAlign: "center",
      color,
      fontSize: 10,
      marginTop: -2,
    },
    divider: {
      borderBottom: 1,
      borderBottomColor: "#CBCBCB",
      marginVertical: 7,
    },
    label: {
      color,
      width: 65,
    },
    customerLable: {
      color,
      marginTop: 20,
    },
    address: {
      maxWidth: 240,
    },
    contentLabel: {
      flexDirection: "row",
      lineHeight: 1.35,
    },
    contentLogo: {
      flexDirection: "row",
      alignItems: "center",
    },
    logo: {
      height: 40,
      width: 40,
      padding: 1,
      objectFit: "contain",
    },
    logoText: {
      height: 22,
      padding: 1,
      marginLeft: 3,
    },
  });

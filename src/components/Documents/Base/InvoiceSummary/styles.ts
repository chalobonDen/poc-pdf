import { StyleSheet } from "@react-pdf/renderer";
import { baseStyle } from "../styles";

export const getStyles = (color: string = "red") =>
  StyleSheet.create({
    ...baseStyle,
    summaryContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginTop: "20px",
    },

    detailContent: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    labelContent: {
      width: "100px",
    },
    labelText: {
      textAlign: "right",
      color: color,
    },

    divider: {
      borderBottom: 1,
      borderBottomColor: "#CBCBCB",
      marginVertical: 7,
    },
  });

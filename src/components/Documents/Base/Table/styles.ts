import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  table: {
    width: "auto",
  },
  tableHeader: {
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "#CBCBCB",
    borderTopWidth: 1,
    marginTop: 15,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    textAlign: "center",
    width: "20%",
    borderColor: "#CBCBCB",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRight: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    paddingVertical: 10,
    fontSize: 10,
  },
});

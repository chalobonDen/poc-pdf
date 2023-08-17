/* eslint-disable react-refresh/only-export-components */
import { Document, Page  } from "@react-pdf/renderer";

import { styles } from "./styles";
// import { renderText } from "./utils";
import Header from "../Base/Header";
import Triangle from "../../Triangle";

const color = "#744595";

const InvoiceDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Triangle color={color} size="55" />
        <Header
          data={{
            sellerName: `บริษัท โอลูฟาย จำกัด (สำนักงานใหญ่)`,
            sellerAddress: `138/37 ซอย ลาดพร้าว 41 แยก 6-9 แขวง จันทีเกษม เขต จตุจักร กรุงเทพมหานคร 10900`,
            sellerTaxpayNumber: `เลขประจำตัวผู้เสียภาษี 0105561066896`,
            sellerPhoneNumber: `0851404042`,
            customerName: `บริษัท เดโม่ เนม จำกัด (สำนักงานใหญ่)`,
            customerAddress: `120/8 หมู่ 12 ตำบลไร่ขิง อำเภอสามพราน นครปฐม 73210`,
            customertaxpayerNumber: `0115563011070`,
            title: `ใบวางบิล/ใบแจ้งหนี้`,
            subTitle: `main`,
            number: `RE2022120001`,
            date: `27/12/2022`,
            seller: `เดโม่ เนม`,
            expiredDate: `01/01/2023`,
          }}
          color={color}
        />
      </Page>
    </Document>
  );
};

export default InvoiceDocument;

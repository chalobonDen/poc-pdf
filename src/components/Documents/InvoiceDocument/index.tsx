/* eslint-disable react-refresh/only-export-components */
import { Document, Page } from "@react-pdf/renderer";

import { styles } from "./styles";
// import { renderText } from "./utils";
import Header from "../Base/Header";
import Triangle from "../Base/Triangle";
import Table, { TableColumn } from "../Base/Table";
import { renderText } from "./utils";
import { useMemo } from "react";
import { ISimpleInvoice } from "../../../types/modules/invoice";
import Footer from "../Base/Footer";

const color = "#744595";

const MOCK = [...Array(20).keys()].map((n) => ({
  orderId: n,
  description: renderText(`Server & Management ( Monthly Plan / 2022 )
บริการ บริหารและดูแลจัดการเซิร์ฟเวอร์ รายเดือน / ประจำเดือนธันวาคม 2565`),
  amount: 10,
  price: 250,
  discount: 15,
  value: 500,
}));

const InvoiceDocument = () => {
  // _Memo
  const columns = useMemo(() => {
    return [
      {
        dataIndex: "orderId",
        title: renderText(`#`),
        width: "5%",
        align: "center",
      },
      {
        dataIndex: "description",
        title: renderText(`รายละเอียด`),
        width: "40%",
        align: "left",
      },
      {
        dataIndex: "amount",
        title: renderText(`จำนวน`),
        width: "13.75%",
        align: "center",
      },
      {
        dataIndex: "price",
        title: renderText(`ราคาต่อหน่วย`),
        width: "13.75%",
        align: "center",
      },
      {
        dataIndex: "discount",
        title: renderText(`ส่วนลด`),
        width: "13.75%",
        align: "center",
      },
      {
        dataIndex: "value",
        title: renderText(`มูลค่า`),
        width: "13.75%",
        align: "center",
      },
    ] as TableColumn<ISimpleInvoice>[];
  }, []);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Triangle color={color} />
        <Header
          fixed={true}
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

        <Table columns={columns} dataSource={MOCK ?? []} />
        <Footer
          data={{
            customerName: `บริษัท เพลย์โพสต์ จํากัด`,
            sellerName: `บริษัท โอลูฟาย จํากัด`,
          }}
        />
      </Page>
    </Document>
  );
};

export default InvoiceDocument;

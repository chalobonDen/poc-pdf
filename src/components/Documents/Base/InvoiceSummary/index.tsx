import { View, Text } from "@react-pdf/renderer";
// import { FC } from "react";
import { renderText } from "../../InvoiceDocument/utils";
import { getStyles } from "./styles";
import { FC } from "react";

interface IInvoiceSummaryProps {
  data: {
    textBahtLabel: string;
    totalPrice: string | number;
    beforeVatPrice: string | number;
    vat: string | number;
    netPrice: string | number;
    tax: string | number;
    total: string | number;

    remark: string;
  };
  color: string;
}

const InvoiceSummary: FC<IInvoiceSummaryProps> = ({ color, data }) => {
  const styles = getStyles(color);

  return (
    <View wrap={false}>
      {/* summary */}
      <View style={styles.summaryContent}>
        {/* text baht */}
        <View>
          <Text>
            ({renderText(`แปดพันสองร้อยสี่สิบเจ็ดบาทสี่สิบสองสตางค์`)})
          </Text>
        </View>

        {/* summary list */}
        <View>
          {/* top */}
          <View style={styles.detailContent}>
            <View style={styles.labelContent}>
              <Text style={styles.labelText}>
                {renderText(`ราคารวม`)}
              </Text>
            </View>
            <Text style={{ marginLeft: "24px", maxWidth: "150px" }}>
              {renderText(`${data.totalPrice} บาท`)}
            </Text>
          </View>
          <View style={styles.detailContent}>
            <View style={styles.labelContent}>
              <Text style={styles.labelText}>
                {renderText(`ราคาก่อน VAT`)}
              </Text>
            </View>
            <Text style={{ marginLeft: "24px", maxWidth: "150px" }}>
              {renderText(`${data.beforeVatPrice} บาท`)}
            </Text>
          </View>
          <View style={styles.detailContent}>
            <View style={styles.labelContent}>
              <Text style={styles.labelText}>
                {renderText(`ภาษีมูลค่าเพิ่ม 7%`)}
              </Text>
            </View>
            <Text style={{ marginLeft: "24px", maxWidth: "150px" }}>
              {renderText(`${data.vat} บาท`)}
            </Text>
          </View>

          <View style={styles.divider}></View>

          {/* bottom */}
          <View style={{ ...styles.detailContent }}>
            <View style={styles.labelContent}>
              <Text style={styles.labelText}>
                {renderText(`รวมราคาสุทธิ`)}
              </Text>
            </View>
            <Text style={{ marginLeft: "24px", maxWidth: "150px" }}>
              {renderText(`${data.netPrice} บาท`)}
            </Text>
          </View>
          <View style={styles.detailContent}>
            <View style={styles.labelContent}>
              <Text style={styles.labelText}>
                {renderText(`หักภาษี ณ ที่จ่าย 3%`)}
              </Text>
            </View>
            <Text style={{ marginLeft: "24px", maxWidth: "150px" }}>
              {renderText(`${data.tax} บาท`)}
            </Text>
          </View>
          <View style={styles.detailContent}>
            <View style={styles.labelContent}>
              <Text style={styles.labelText}>
                {renderText(`ยอดที่ต้องชำระ`)}
              </Text>
            </View>
            <Text style={{ marginLeft: "24px", maxWidth: "150px" }}>
              {renderText(`${data.total} บาท`)}
            </Text>
          </View>
        </View>
      </View>

      {/* remark */}
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: color }}>{renderText(`หมายเหตุ`)}</Text>
        <Text>
          {renderText(
            `-กรุณาชำระเงินที่บัญชี\nชื่อบัญชี : บริษัท โอลูฟาย จำกัด
            ชื่อบัญชี : บริษัท โอลูฟาย จำกัด`
          )}
        </Text>
      </View>
    </View>
  );
};

export default InvoiceSummary;

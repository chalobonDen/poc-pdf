import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./style";
import { renderText } from "../../InvoiceDocument/utils";
import { FC, Fragment } from "react";
// import Checkbox from "../Checkbox";

interface IFooterProps {
  data: {
    customerName: string;
    sellerName: string;
  };
}

const Footer: FC<IFooterProps> = ({ data: { sellerName, customerName } }) => {
  return (
    <Fragment>
      <View style={{ position: "relative", height: 100 }}></View>
      <View wrap={false} style={styles.footerContent}>
        {/* invoice footer */}
        {/* <View style={styles.InvoiceCheckbox}>
          <Text>
            {renderText(
              `การชำระเงินจะสมบูรณ์เมื่อบริษัทได้รับเงินเรียบร้อยแล้ว`
            )}
          </Text>
          <Checkbox customStyle={ styles.checkbox } size={15} checked={false} label="เงินสด" />
          <Checkbox customStyle={ styles.checkbox } size={15} checked={false} label="เช็ค" />
          <Checkbox customStyle={ styles.checkbox } size={15} checked={true} label="โอนเงิน" />
          <Checkbox customStyle={ styles.checkbox } size={15} checked={false} label="บัตรเครดิต" />
          <Checkbox customStyle={ styles.checkbox } size={15} checked={false} label="เครดิต" />
        </View>  */}

        {/* invoice signed */}
        <View style={styles.invoiceSignature}>
          {/* payor */}
          <View style={{ width: "35%" }}>
            <Text>{renderText(`ในนาม ${sellerName}`)}</Text>
            <View style={styles.signContent}>
              <View style={{ ...styles.divider, ...styles.signText }}>
                <Text style={{ textAlign: "center" }}>
                  {renderText(`ผู้จ่ายเงิน`)}
                </Text>
              </View>
              <View style={{ ...styles.divider, ...styles.dateText }}>
                <Text style={{ textAlign: "center" }}>
                  {renderText(`วันที่`)}
                </Text>
              </View>
            </View>
          </View>

          {/* logo */}
          <View style={{ width: "30%" }}>
            <Image src="/assets/image/logo-footer.jpg" style={styles.logo} />
          </View>

          {/* payee */}
          <View style={{ width: "35%" }}>
            <Text style={{ textAlign: "right" }}>
              {renderText(`ในนาม ${customerName}`)}
            </Text>
            <View style={styles.signContent}>
              <View style={{ ...styles.divider, ...styles.signText }}>
                <Text style={{ textAlign: "center" }}>
                  {renderText(`ผู้รับเงิน`)}
                </Text>
              </View>
              <View style={{ ...styles.divider, ...styles.dateText }}>
                <Text style={{ textAlign: "center" }}>
                  {renderText(`วันที่`)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default Footer;

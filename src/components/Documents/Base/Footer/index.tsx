import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./style";
import { renderText } from "../../InvoiceDocument/utils";
import { FC } from "react";

interface IFooterProps {
  data: {
    customerName: string;
    sellerName: string;
  };
}

const Footer: FC<IFooterProps> = ({ data: { sellerName, customerName } }) => {
  return (
    <View style={styles.footerContent}>
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
            <Text style={{ textAlign: "center" }}>{renderText(`วันที่`)}</Text>
          </View>
        </View>
      </View>

      {/* logo */}
      <View style={{ width: "30%" }} debug>
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
            <Text style={{ textAlign: "center" }}>{renderText(`วันที่`)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Footer;

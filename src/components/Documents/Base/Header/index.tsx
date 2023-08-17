import { Text, View, Image } from "@react-pdf/renderer";
import { getStyles } from "./styles";
import { renderText } from "../../InvoiceDocument/utils";
import { FC } from "react";

interface IHeaderProps {
  data: {
    sellerName: string;
    sellerAddress: string;
    sellerTaxpayNumber: string | number;
    sellerPhoneNumber: string | number;
    customerName: string;
    customerAddress: string;
    customertaxpayerNumber: string | number;
    title: string;
    subTitle: string;
    number: string;
    date: string;
    seller: string;
    expiredDate: string;
  };
  color?: string;
}

const Header: FC<IHeaderProps> = ({
  data: {
    sellerName,
    sellerAddress,
    sellerTaxpayNumber,
    sellerPhoneNumber,
    customerName,
    customerAddress,
    customertaxpayerNumber,
    title,
    subTitle,
    number,
    date,
    seller,
    expiredDate,
  },
  color = "black",
}) => {
  const styles = getStyles(color);

  return (
    <View style={{ flexDirection: "row" }}>
      {/* Left */}
      <View style={{ flex: 1 }}>
        {/* Owner */}
        <View style={styles.containerLogo}>
          <Image src="/assets/image/logo-olufy.jpg" style={styles.logo} />
          <Image src="/assets/image/Olufy.jpg" style={styles.logoText} />
        </View>
        <Text style={{ marginTop: 10 }}>{renderText(sellerName)}</Text>
        <Text style={styles.address}>{renderText(sellerAddress)}</Text>
        <Text>
          {renderText(`เลขประจำตัวผู้เสียภาษี ${sellerTaxpayNumber}`)}
        </Text>
        <Text>{renderText(`เบอร์มือถือ ${sellerPhoneNumber}`)}</Text>

        {/* ลูกค้า */}
        <Text style={styles.customerLable}>ลูกค้า</Text>
        <Text>{renderText(customerName)}</Text>
        <Text style={styles.address}>{renderText(customerAddress)}</Text>
        <Text>
          {renderText(`เลขประจำตัวผู้เสียภาษี ${customertaxpayerNumber}`)}
        </Text>
      </View>

      {/* Right */}
      <View style={{ width: 190 }}>
        <Text style={styles.title}>{renderText(title)}</Text>
        <Text style={styles.subTitle}>
          {subTitle === "main"
            ? renderText("ต้นฉบับ")
            : subTitle === "copy"
            ? renderText("สำเนา")
            : ""}
        </Text>

        <View style={styles.divider}></View>

        <View style={styles.containerLabel}>
          <Text style={styles.label}>เลขที่</Text>
          <Text>{number}</Text>
        </View>
        <View style={styles.containerLabel}>
          <Text style={styles.label}>วันที่</Text>
          <Text>{date}</Text>
        </View>
        <View style={styles.containerLabel}>
          <Text style={styles.label}>ผู้ขาย</Text>
          <Text>{renderText(seller)}</Text>
        </View>
        <View style={styles.containerLabel}>
          <Text style={styles.label}>{renderText(`ครบกำหนด`)}</Text>
          <Text>{renderText(expiredDate)}</Text>
        </View>

        <View style={styles.divider}></View>
      </View>
    </View>
  );
};

export default Header;

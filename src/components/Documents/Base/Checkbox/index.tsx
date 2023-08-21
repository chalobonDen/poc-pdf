import { G, Path, Svg, Text } from "@react-pdf/renderer";
import { FC, Fragment } from "react";
import { renderText } from "../../InvoiceDocument/utils";

interface ICheckBoxProps {
  size: number;
  checked: boolean;
  label?: string;
  customStyle?: object
}

const Checkbox: FC<ICheckBoxProps> = ({
  size,
  checked,
  label,
  customStyle,
}) => {
  return (
    <Fragment>
      <Svg style={customStyle} width={size} height={size} viewBox="0 0 48 48">
        <G>
          {checked ? (
            <Path
              d="M38 6H10C7.8 6 6 7.8 6 10V38C6 40.2 7.8 42 10 42H38C40.2 42 42 40.2 42 38V10C42 7.8 40.2 6 38 6ZM21.42 32.58C20.64 33.36 19.38 33.36 18.6 32.58L11.42 25.4C10.64 24.62 10.64 23.36 11.42 22.58C12.2 21.8 13.46 21.8 14.24 22.58L20 28.34L33.76 14.58C34.54 13.8 35.8 13.8 36.58 14.58C37.36 15.36 37.36 16.62 36.58 17.4L21.42 32.58Z"
              fill="#2898CB"
            />
          ) : (
            <Path
              d="M36 38H12C10.9 38 10 37.1 10 36V12C10 10.9 10.9 10 12 10H36C37.1 10 38 10.9 38 12V36C38 37.1 37.1 38 36 38ZM38 6H10C7.8 6 6 7.8 6 10V38C6 40.2 7.8 42 10 42H38C40.2 42 42 40.2 42 38V10C42 7.8 40.2 6 38 6Z"
              fill="#CBCBCB"
            />
          )}
        </G>
      </Svg>
      {label && <Text>{renderText(label)}</Text>}
    </Fragment>
  );
};

export default Checkbox;

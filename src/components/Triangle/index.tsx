import { Canvas, View } from "@react-pdf/renderer";
import { FC } from "react";
import { getStyles } from "./styles";

interface ITriangleProps {
  size?: number;
  color: string;
}

const Triangle: FC<ITriangleProps> = ({ color, size = 55 }) => {

  const styles = getStyles(size);

  return (
    <View
      style={styles.triangle}
    >
      <Canvas
        paint={(painterObject) =>
          painterObject
            .save()
            .moveTo(0, 0)
            .lineTo(size, 0)
            .lineTo(size, size)
            .fill(color)
        }
      />
    </View>
  );
};

export default Triangle;

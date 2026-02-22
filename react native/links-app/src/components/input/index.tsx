import { TextInput, TextInputProps } from "react-native";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

export function Input({ ...props }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={colors.gray[400]}
      {...props}
    />
  );
}

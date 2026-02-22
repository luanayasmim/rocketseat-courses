import { FlatList } from "react-native";

import { categories } from "@/utils/categories";
import { Category } from "../category";
import { styles } from "./styles";

type CategoriesProps = {
  selected: string;
  onChange: (category: string) => void;
};

export function Categories({ selected, onChange }: CategoriesProps) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
    />
  );
}

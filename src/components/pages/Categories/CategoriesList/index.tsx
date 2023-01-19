import {FC} from "react";
import {CategoriesListProps} from "../Categories.interfaces";
import CategoryItem from "./CategoryItem";

const CategoriesList: FC<CategoriesListProps> = (
  {
    items,
    selectedItems,
    toggleSelect
  }
) => {
  return (
    <>
      {items.map(category => (
        <CategoryItem
          key={category.id}
          {...category}
          checked={selectedItems.includes(category.id)}
          toggleSelect={() => toggleSelect(category.id)}
        />
      ))}
    </>
  )
}

export default CategoriesList

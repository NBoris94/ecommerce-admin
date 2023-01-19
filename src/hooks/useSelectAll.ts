import {useState} from "react";

export const useSelectAll = (items: number[]) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const toggleSelectAll = (value: boolean) => {
    setSelectedItems(value ? [...items] : [])
  }

  const toggleItem = (item: number) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item))
    }
    else  {
      setSelectedItems([...selectedItems, item])
    }
  }

  return { selectedItems, toggleSelectAll, toggleItem }
}

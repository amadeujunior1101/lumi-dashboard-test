export const getListItemStyle = (
  itemName: string,
  selectedNavItem: string
): React.CSSProperties => {
  return {
    color: selectedNavItem === itemName ? "#000" : "",
    backgroundColor: selectedNavItem === itemName ? "#00ff89" : "",
  };
};

export const listItemHoverStyle = {
  color: "#FFF",
  backgroundColor: "#373f3e",
  "&:hover": {
    color: "#02231c",
    backgroundColor: "#00ff89",
  },
};

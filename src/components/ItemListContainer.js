import { Avatar } from "@mui/material";

export const ItemListContainer = (props) => {
  return (
    <div>
      <Avatar></Avatar>
      <br /> <br /> {props.texto}
    </div>
  );
};

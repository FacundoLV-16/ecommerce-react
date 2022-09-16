import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

export default function BasicButtonGroup() {
  const stock = 5;
  const [Contador, setContador] = useState(1);
  let sumar;
  if (Contador < stock) {
    sumar = () => setContador(Contador + 1);
  }
  let resta;
  if (Contador > 1) {
    resta = () => setContador(Contador - 1);
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={resta}> - </Button>
      <Button> {Contador} </Button>
      <Button onClick={sumar}>+</Button>
    </ButtonGroup>
  );
}

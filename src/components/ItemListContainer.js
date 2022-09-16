import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  return (
    <div className="body-card">
      <div className="computacion-titulo">
        <h2>Computacion</h2>
        <span> Ver Mas</span>
      </div>
      <div>
        <ItemList>Computacion</ItemList>
      </div>
    </div>
  );
};

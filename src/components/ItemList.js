import React from "react";
import { Item } from "./Item";

export const ItemList = () => {
  /*              LISTA COMPUTACION                 */
  const ComputacionLista = {
    Grafica: {
      titulo: "GeForce RTX 3060 Edition 12GB",
      img: "https://http2.mlstatic.com/D_Q_NP_997029-MLA48789786538_012022-AB.webp",
      img_alt: "GeForce RTX 3060 Edition 12GB",
      precio: "$155.000",
      envio: "Envío gratis | ",
      stock: "5",
      descripcion:
        "Placa de video Nvidia Gigabyte Gaming GeForce RTX 30 Series RTX 3060 GV-N3060GAMING OC-12GD (rev. 1.0) OC Edition 12GB",
    },
    FuentePc: {
      titulo: "Fuente PC Giga-Byte GP-P450B 450W",
      img: "https://http2.mlstatic.com/D_Q_NP_737313-MLA45655548301_042021-AB.webp",
      img_alt: "Fuente PC Giga-Byte GP-P450B 450W",
      precio: "$9.599",
      envio: "Envío gratis | ",
      stock: "5",
      descripcion:
        " Fuente de alimentación para PC Giga-Byte Technology GP-P450B 450W negra 100V/240V",
    },
    MemoriaRam: {
      titulo: "Memoria RAM Basics 8GB 1 Crucial",
      img: "https://http2.mlstatic.com/D_Q_NP_648471-MLA49041641691_022022-AB.webp",
      img_alt: "Memoria RAM Basics color verde 8GB 1 Crucial CB8GU2666",
      precio: "$6.490",
      envio: "Envío gratis | ",
      stock: "5",
      descripcion: "emoria RAM Basics color verde 8GB 1 Crucial CB8GU2666",
    },
    DiscoDuro: {
      titulo: "Disco Rigido 1TB Sata 3 Wd 64mb",
      img: "https://http2.mlstatic.com/D_Q_NP_845638-MLA31069562092_062019-AB.webp",
      img_alt: "Disco Duro Sara 1TB",
      precio: "$8.499",
      envio: "Envío gratis | ",
      stock: "5",
      descripcion: "Disco Rigido 1TB Sata 3 Wd 64mb",
    },
  };

  return (
    <div>
      <Item {...ComputacionLista}>Computacion</Item>
    </div>
  );
};

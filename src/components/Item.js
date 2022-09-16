import { Card } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import BasicButtonGroup from "./BasicButtonGroup";

export const Item = (props) => {
  return (
    <div className="computacion">
      {/*                             Disco Rigido 1TB Sata 3 Wd 64mb                  */}
      <Card className="card-master">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {props.DiscoDuro.titulo}
          </Typography>
          <Typography>
            <img src={props.DiscoDuro.img} alt={props.DiscoDuro.img_alt} />
          </Typography>
          <Typography sx={{ mb: 1.5 }}>{props.DiscoDuro.precio}</Typography>
          <Typography variant="body2">
            <span className="span">
              {props.DiscoDuro.envio}
              {props.DiscoDuro.stock} en stock
            </span>
            <br />
            {props.DiscoDuro.descripcion}
          </Typography>
          <CardActions>
            <BasicButtonGroup></BasicButtonGroup>
          </CardActions>
          <CardActions>
            <Button zide="small">Agregar al Carro</Button>
          </CardActions>
        </CardContent>
      </Card>
      {/*                            Memoria RAM Basics 8GB 1 Crucial                  */}
      <Card className="card-master">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {props.MemoriaRam.titulo}
          </Typography>
          <Typography>
            <img src={props.MemoriaRam.img} alt={props.MemoriaRam.img_alt} />
          </Typography>
          <Typography sx={{ mb: 1.5 }}>{props.MemoriaRam.precio}</Typography>
          <Typography variant="body2">
            <span className="span">
              {props.MemoriaRam.envio}
              {props.MemoriaRam.stock} en stock
            </span>
            <br />
            {props.MemoriaRam.descripcion}
          </Typography>
          <CardActions>
            <BasicButtonGroup></BasicButtonGroup>
          </CardActions>
          <CardActions>
            <Button zide="small">Agregar al Carro</Button>
          </CardActions>
        </CardContent>
      </Card>
      {/*                           Fuente PC Giga-Byte GP-P450B 450W                  */}
      <Card className="card-master">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {props.FuentePc.titulo}
          </Typography>
          <Typography>
            <img src={props.FuentePc.img} alt={props.FuentePc.img_alt} />
          </Typography>
          <Typography sx={{ mb: 1.5 }}>{props.FuentePc.precio}</Typography>
          <Typography variant="body2">
            <span className="span">
              {props.FuentePc.envio}
              {props.FuentePc.stock} en stock
            </span>
            <br />
            {props.FuentePc.descripcion}
          </Typography>
          <CardActions>
            <BasicButtonGroup></BasicButtonGroup>
          </CardActions>
          <CardActions>
            <Button zide="small">Agregar al Carro</Button>
          </CardActions>
        </CardContent>
      </Card>
      {/*                              GeForce RTX 3060 Edition 12GB                  */}
      <Card className="card-master">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {props.Grafica.titulo}
          </Typography>
          <Typography>
            <img src={props.Grafica.img} alt={props.Grafica.img_alt} />
          </Typography>
          <Typography sx={{ mb: 1.5 }}>{props.Grafica.precio}</Typography>
          <Typography variant="body2">
            <span className="span">
              {props.Grafica.envio}
              {props.Grafica.stock} en stock
            </span>
            <br />
            {props.Grafica.descripcion}
          </Typography>
          <CardActions>
            <BasicButtonGroup></BasicButtonGroup>
          </CardActions>
          <CardActions>
            <Button zide="small">Agregar al Carro</Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

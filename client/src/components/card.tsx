import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface props {}
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia sx={{ height: 140 }} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Produkt
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Information om produkten visas här
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Läs mer</Button>
        <Button size="small">Köp nu</Button>
      </CardActions>
    </Card>
  );
}

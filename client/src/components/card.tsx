import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../types";
import { addToCart } from "../cartSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
interface props {
  product: Product;
  addToCart: (product: Product) => void;
}
export default function MediaCard(product: props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia sx={{ height: 140 }} title={product.product.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {product.product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/ProductPage/${product.product.id}`)}
        >
          Läs mer
        </Button>
        <Button size="small" onClick={() => product.addToCart(product.product)}>
          Köp nu
        </Button>
      </CardActions>
    </Card>
  );
}

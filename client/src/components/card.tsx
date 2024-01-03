import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../types";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
interface props {
  product: Product;
  addToCart: (product: Product) => void;
}
export default function MediaCard(product: props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 445, margin: 1 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={product.product.img}
        title={product.product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Poster {product.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/ProductPage/${product.product.id}`)}
        >
          Read more
        </Button>
        <Button size="small" onClick={() => product.addToCart(product.product)}>
          <AddShoppingCartIcon></AddShoppingCartIcon>
        </Button>
      </CardActions>
    </Card>
  );
}

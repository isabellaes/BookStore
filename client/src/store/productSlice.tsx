import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import image1 from "../images/alex-furgiuele-UkH7L-aag8A-unsplash.jpg";
import image2 from "../images/alex-lvrs-4N5huJDOydQ-unsplash.jpg";
import image3 from "../images/alex-perri-bmM_IdLd1SA-unsplash.jpg";
import image4 from "../images/alexander-grey-SavQfLRm4Do-unsplash.jpg";
import image5 from "../images/ameenfahmy-gcWd0ts4RCo-unsplash.jpg";
import image6 from "../images/annie-spratt-8mqOw4DBBSg-unsplash.jpg";
import image7 from "../images/annie-spratt-fbAnIjhrOL4-unsplash.jpg";
import image8 from "../images/annie-spratt-ncQ2sguVlgo-unsplash.jpg";
import image9 from "../images/ethan-robertson-P86-JPbDnPY-unsplash.jpg";
import image10 from "../images/evie-s-FuX1NIv8lLk-unsplash.jpg";
import image11 from "../images/evie-s-_8vovuZCj0c-unsplash.jpg";
import image12 from "../images/evie-s-lJKzqr36EoE-unsplash.jpg";
import animal1 from "../images/adam-berkecz-K6kZKJOmZrk-unsplash.jpg";
import image15 from "../images/alex-azabache-V83v-MYB_Z8-unsplash.jpg";
import image18 from "../images/alexander-andrews-mEdKuPYJe1I-unsplash.jpg";
import image20 from "../images/arleen-wiese-2vbhN2Yjb3A-unsplash.jpg";
import image22 from "../images/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg";
import image26 from "../images/eileen-pan-5d5DSRQ5dUc-unsplash.jpg";
import image28 from "../images/evie-s-vz3IQy0LOaA-unsplash.jpg";
import image33 from "../images/geronimo-giqueaux-pr1M1Y7zdik-unsplash.jpg";
import image35 from "../images/hasan-almasi-CfimHDZtG3o-unsplash.jpg";
import image36 from "../images/jan-kronies-K-x7h4NXtAY-unsplash.jpg";
import image37 from "../images/janine-joles-f0heeiu-Ec0-unsplash.jpg";
import image38 from "../images/josep-martins-l3-erg8nPRU-unsplash.jpg";
import image40 from "../images/juli-kosolapova-oyBxvFU3SJI-unsplash.jpg";
import image42 from "../images/kari-shea-IY3IdSknNXI-unsplash.jpg";
import image43 from "../images/karina-vorozheeva--T4aCm8UeHI-unsplash.jpg";
import image45 from "../images/kevin-mueller-aeNg4YA41P8-unsplash.jpg";
import image46 from "../images/laura-crowe-vsrEr7otP2o-unsplash.jpg";
import image47 from "../images/linh-le-Ebwp2-6BG8E-unsplash.jpg";
import image48 from "../images/liubov-ilchuk-_6rR_iP06p4-unsplash.jpg";
import image49 from "../images/madison-oren-gE1phX0Lbos-unsplash.jpg";
import image50 from "../images/maria-orlova-bU8TeXhsPcY-unsplash.jpg";
import image51 from "../images/matthew-spiteri-WfZ4WCuNtlg-unsplash.jpg";
import image53 from "../images/mio-ito-B_SLtmXPKNA-unsplash.jpg";
import image54 from "../images/monika-grabkowska-tv-d1R3FItE-unsplash.jpg";
import image55 from "../images/nathan-dumlao-eZIzlTVgqNU-unsplash.jpg";
import image56 from "../images/nik-py8-g41now8-unsplash.jpg";
import image57 from "../images/okeykat-tgxqpsVG-0A-unsplash.jpg";
import image58 from "../images/pawel-czerwinski-6lQDFGOB1iw-unsplash.jpg";
import image59 from "../images/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg";
import image61 from "../images/pawel-czerwinski-Tyg0rVhOTrE-unsplash.jpg";
import image62 from "../images/pawel-czerwinski-arwTpnIUHdM-unsplash.jpg";
import image63 from "../images/pawel-czerwinski-ruJm3dBXCqw-unsplash.jpg";
import image64 from "../images/pawel-czerwinski-yryt6Hwl52U-unsplash.jpg";
import image65 from "../images/prateek-katyal-8Aq6t-Khe5k-unsplash.jpg";
import image69 from "../images/thomas-evans-NVXY8_M1n40-unsplash.jpg";
import image70 from "../images/tirza-van-dijk-cNGUw-CEsp0-unsplash.jpg";
import image71 from "../images/usgs-hoS3dzgpHzw-unsplash.jpg";
import image73 from "../images/yuichi-kageyama-4ByFHyNdoD4-unsplash.jpg";
import { Product } from "../types";

interface ProductState {
  products: Product[];
  filterdProducts: Product[];
}

const initialState: ProductState = {
  products: [
    {
      id: "1",
      name: "Cactus",
      price: 22,
      img: image1,
      description: "Poster of a green cactus.",
      size: "20x30cm",
      tags: ["green", "cactus"],
    },
    {
      id: "2",
      name: "Eucalyptus in hand",
      price: 23,
      img: image2,
      description: "Poster with eucalyptus in hand",
      size: "20x30cm",
      tags: ["plant", "green", "eucalyptus", "hand"],
      category: "plant",
    },
    {
      id: "3",
      name: "Ornament",
      price: 22,
      img: image3,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "green", "ornament"],
      category: "plant",
    },
    {
      id: "4",
      name: "Flower",
      price: 22,
      img: image4,
      description: "Poster",
      size: "20x30cm",
      tags: ["flower", "purple"],
      category: "plant",
    },
    {
      id: "5",
      name: "Red rose",
      price: 22,
      img: image5,
      description: "Poster",
      size: "20x30cm",
      tags: ["flower", "rose", "red", "garden"],
      category: "plant",
    },
    {
      id: "6",
      name: "Plant",
      price: 22,
      img: image6,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "green"],
      category: "plant",
    },
    {
      id: "7",
      name: "Cactus",
      price: 22,
      img: image7,
      description: "Poster of a green cactus.",
      size: "20x30cm",
      tags: ["plant", "green", "cactus"],
      category: "plant",
    },
    {
      id: "8",
      name: "Cactus",
      price: 22,
      img: image8,
      description: "Poster of a green cactus.",
      size: "20x30cm",
      tags: ["plant", "green", "cactus"],
      category: "plant",
    },
    {
      id: "9",
      name: "Pink flower",
      price: 22,
      img: image9,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "green", "pink", "flower"],
      category: "plant",
    },
    {
      id: "10",
      name: "Ornament",
      price: 22,
      img: image10,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "red", "brown", "ornament"],
      category: "plant",
    },
    {
      id: "11",
      name: "Leafs",
      price: 22,
      img: image11,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "leafs", "red", "brown"],
      category: "plant",
    },
    {
      id: "12",
      name: "Flowers",
      price: 22,
      img: image12,
      description: "Poster",
      size: "20x30cm",
      tags: ["flowers", "pink", "red"],
      category: "plant",
    },

    {
      id: "13",
      name: "Dolphine",
      price: 22,
      img: animal1,
      description: "Poster",
      size: "20x30cm",
      tags: ["animal", "blue", "sea", "dolphine"],
      category: "animal",
    },

    {
      id: "15",
      name: "Bike in city",
      price: 22,
      img: image15,
      description: "Poster",
      size: "20x30cm",
      tags: ["green", "bike", "garden"],
      category: "quote",
    },

    {
      id: "18",
      name: "Fox",
      price: 22,
      img: image18,
      description: "Poster",
      size: "20x30cm",
      tags: ["fox", "animal", "red"],
      category: "animal",
    },

    {
      id: "20",
      name: "Lion",
      price: 22,
      img: image20,
      description: "Poster",
      size: "20x30cm",
      tags: ["lion", "animal", "yellow"],
      category: "animal",
    },
    {
      id: "21",
      name: "Dog",
      price: 22,
      img: image22,
      description: "Poster",
      size: "20x30cm",
      tags: ["dog", "animal", "yellow", "black"],
      category: "animal",
    },

    {
      id: "25",
      name: "Quote",
      price: 22,
      img: image26,
      description: "Poster",
      size: "20x30cm",
      tags: ["quote", "black", "white"],
      category: "quote",
    },

    {
      id: "27",
      name: "Flower",
      price: 22,
      img: image28,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "green", "pink", "flower"],
      category: "plant",
    },

    {
      id: "33",
      name: "Cat",
      price: 22,
      img: image33,
      description: "Poster",
      size: "20x30cm",
      tags: ["animal", "grey", "green", "cat"],
      category: "animal",
    },

    {
      id: "35",
      name: "Plant",
      price: 22,
      img: image35,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "raindrop", "green"],
      category: "plant",
    },
    {
      id: "36",
      name: "Forest",
      price: 22,
      img: image36,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "forest", "green"],
      category: "plant",
    },
    {
      id: "37",
      name: "Flower",
      price: 22,
      img: image37,
      description: "Poster",
      size: "20x30cm",
      tags: ["flower", "pink", "yellow"],
      category: "plant",
    },

    {
      id: "38",
      name: "Abstract",
      price: 22,
      img: image38,
      description: "Poster",
      size: "20x30cm",
      tags: ["abstract", "art", "black", "white"],
      category: "abstract",
    },

    {
      id: "40",
      name: "Meadow Dream",
      price: 22,
      img: image40,
      description: "Poster",
      size: "20x30cm",
      tags: ["meadow", "flower", "yellow"],
      category: "plant",
    },

    {
      id: "42",
      name: "Green plant",
      price: 22,
      img: image42,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "green"],
      category: "plant",
    },
    {
      id: "43",
      name: "Flower",
      price: 22,
      img: image43,
      description: "Poster",
      size: "20x30cm",
      tags: ["flower", "white"],
      category: "plant",
    },
    {
      id: "45",
      name: "Bird",
      price: 22,
      img: image45,
      description: "Poster",
      size: "20x30cm",
      tags: ["animal", "bird", "blue", "yellow"],
      category: "animal",
    },
    {
      id: "46",
      name: "Flower",
      price: 22,
      img: image46,
      description: "Poster",
      size: "20x30cm",
      tags: ["flower", "pink"],
      category: "plant",
    },
    {
      id: "47",
      name: "Plant",
      price: 22,
      img: image47,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "green"],
      category: "plant",
    },
    {
      id: "48",
      name: "Plant",
      price: 22,
      img: image48,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "green"],
      category: "plant",
    },
    {
      id: "49",
      name: "Plant",
      price: 22,
      img: image49,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "green", "purple"],
      category: "plant",
    },
    {
      id: "50",
      name: "Abstract",
      price: 22,
      img: image50,
      description: "Poster",
      size: "20x30cm",
      tags: ["abstract", "art", "blue", "pink", "purple"],
      category: "abstract",
    },
    {
      id: "51",
      name: "Elephant",
      price: 22,
      img: image51,
      description: "Poster",
      size: "20x30cm",
      tags: ["animal", "grey"],
      category: "animal",
    },

    {
      id: "53",
      name: "Flower",
      price: 23,
      img: image53,
      description: "Poster",
      size: "20x30cm",
      tags: ["flower", "pink"],
      category: "plant",
    },
    {
      id: "54",
      name: "Flower",
      price: 22,
      img: image54,
      description: "Poster",
      size: "20x30cm",
      tags: ["flower", "pink"],
      category: "plant",
    },
    {
      id: "55",
      name: "Quote",
      price: 22,
      img: image55,
      description: "Poster",
      size: "20x30cm",
      tags: ["quote", "black", "white"],
      category: "quote",
    },
    {
      id: "56",
      name: "Flower",
      price: 22,
      img: image56,
      description: "Poster",
      size: "20x30cm",
      tags: ["flower", "white"],
      category: "plant",
    },
    {
      id: "57",
      name: "Leaf",
      price: 22,
      img: image57,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "leaf", "green"],
      category: "plant",
    },
    {
      id: "58",
      name: "Abstract",
      price: 22,
      img: image58,
      description: "Poster",
      size: "20x30cm",
      tags: ["abstract", "art", "blue", "pink", "purple"],
      category: "abstract",
    },
    {
      id: "59",
      name: "Abstract",
      price: 22,
      img: image59,
      description: "Poster",
      size: "20x30cm",
      tags: ["abstract", "art", "blue", "pink", "purple"],
      category: "abstract",
    },

    {
      id: "61",
      name: "Abstract",
      price: 22,
      img: image61,
      description: "Poster",
      size: "20x30cm",
      tags: ["abstract", "art", "blue", "pink", "purple"],
      category: "abstract",
    },
    {
      id: "62",
      name: "Abstract",
      price: 22,
      img: image62,
      description: "Poster",
      size: "20x30cm",
      tags: ["abstract", "art", "blue", "pink", "purple"],
      category: "abstract",
    },
    {
      id: "63",
      name: "Abstract",
      price: 22,
      img: image63,
      description: "Poster",
      size: "20x30cm",
      tags: ["abstract", "art", "blue", "pink", "purple"],
      category: "abstract",
    },
    {
      id: "64",
      name: "Green leaf",
      price: 22,
      img: image64,
      description: "Poster",
      size: "20x30cm",
      tags: ["plant", "leaf", "green"],
      category: "plant",
    },
    {
      id: "65",
      name: "Quote",
      price: 23,
      img: image65,
      description: "Poster",
      size: "20x30cm",
      tags: ["quote", "black", "white"],
      category: "quote",
    },

    {
      id: "69",
      name: "Giraffe",
      price: 22,
      img: image69,
      description: "Poster",
      size: "20x30cm",
      tags: ["animal", "orange"],
      category: "animal",
    },
    {
      id: "70",
      name: "Pink rose",
      price: 22,
      img: image70,
      description: "Poster",
      size: "20x30cm",
      tags: ["flower", "pink", "green", "rose"],
      category: "plant",
    },
    {
      id: "71",
      name: "Abstract",
      price: 22,
      img: image71,
      description: "Poster",
      size: "20x30cm",
      tags: ["abstract", "art", "pink", "blue"],
      category: "abstract",
    },

    {
      id: "73",
      name: "Butterfly",
      price: 22,
      img: image73,
      description: "Poster",
      size: "20x30cm",
      tags: ["Animal", "butterfly", "orange"],
      category: "animal",
    },
  ],
  filterdProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.filterdProducts.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.filterdProducts = state.filterdProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    clearFilterdProducts: (state) => {
      state.filterdProducts = [];
    },
    setFilterdProducts: (state, action: PayloadAction<Product[]>) => {
      state.filterdProducts = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  clearFilterdProducts,
  setFilterdProducts,
} = productSlice.actions;

export const selectProducts = (state: RootState) =>
  state.product?.products || [];

export default productSlice.reducer;

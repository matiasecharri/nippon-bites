//There is the full API, the API hosted in the website is a short version of this, why? because the host has a limit of 10.000 characters per API, and this full API is about 25000 characters, if you want you can replace the host to make it full version or use something like node.js.


let food = [
  {
    id: 01,
    categorie: "roll",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/r9mEYfq5doEz4yIPhxvJcFWLFRPyH6cP.jpg",
    name: "Hot Bologna",
    description:
      "Breaded roll stuffed with prawns sautéed with paprika and Philadelphia.",
    pricex5: 7,
    sells: 15,
    veggie: false,
    sweet: false,
  },
  {
    id: 02,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/y0PzxvPM822IgLpI6e5hHMbZwJReW2ku.jpg",
    name: "New York Phila",
    description:
      "Roll pieces stuffed with salmon, avocado, and Philadelphia cheese.",
    pricex5: 7.5,
    sells: 50,
    veggie: false,
    sweet: false,
  },
  {
    id: 03,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/aL7mGxv6yODE8M-1Ky9loHVoEaHxQ6dG.jpg",
    name: "Nigiri Salmon",
    description: "Rice snacks wrapped in fine cuts of the freshest salmon.",
    pricex5: 9.5,
    sells: 105,
    veggie: false,
    sweet: false,
  },
  {
    id: 04,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/8rL5nMEZjBFS-PzwFXxeuaztf3-_E1kY.jpg",
    name: "Aphrodite Bomb",
    description:
      "Salmon, mango, avocado and Philadelphia cheese wrapped in tamago, bathed in passion fruit sauce, topped with sweet potato fries.",
    pricex5: 15.7,
    sells: 205,
    veggie: false,
    sweet: true,
  },
  {
    id: 05,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/EOxVfztVgkMEHgvdNHRRLToXq-_-k5Tt.jpg",
    name: "Andino",
    description:
      "Roll stuffed with green beans, avocado and carrots with a tomato top topped with chives, crunchy walnuts and teri sauce.",
    pricex5: 6,
    sells: 20,
    veggie: true,
    sweet: false,
  },
  {
    id: 06,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/zP1VZu9JTF02UrqRcUubRUeXZs-02cuu.jpg",
    name: "Chimi Nikkei",
    description:
      "Roll stuffed with cherry tomatoes, tempura green beans and carrots with cheese topped with chimi nikkei.",
    pricex5: 6,
    sells: 100,
    veggie: true,
    sweet: false,
  },
  {
    id: 07,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/B-vQf7o6s2qfYjcP5AsPofMohKAH3nbi.jpg",
    name: "Fresh",
    description:
      "Roll stuffed with cheese, crispy mushrooms and onion pickles covered.",
    pricex5: 7.7,
    sells: 50,
    veggie: true,
    sweet: false,
  },
  {
    id: 08,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/mbk0WTtykZQVSDFREIRirN0oXvUaMn06.jpg",
    name: "Spring",
    description:
      "Roll stuffed with green onion, crispy onion and avocado topped with spring sauce.",
    pricex5: 6,
    sells: 250,
    veggie: true,
    sweet: false,
  },
  {
    id: 09,
    categorie: "roll",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/5-u6qMSIGDDKfeKW23MKlA-hH_QFfYZO.jpg",
    name: "Hot Firenze",
    description:
      "Breaded roll stuffed with prawns sautéed with paprika and Philadelphia.",
    pricex5: 7,
    sells: 15,
    veggie: false,
    sweet: false,
  },
  {
    id: 10,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/5N-f-Vd9O56Qlfy4HHDMiDXq-a8tDzj3.jpg",
    name: "Geishas Salmon",
    description: "Salmon Geishas stuffed with Phila cheese with Avocado.",
    pricex5: 15.5,
    sells: 250,
    veggie: false,
    sweet: false,
  },
  {
    id: 11,
    categorie: "roll",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/_1T8ZAm4IZvXAygWSwD6-y-0YhOp-N01.jpg",
    name: "Hot New York",
    description:
      "Breaded roll stuffed with salmon, rice, avocado and Phila cheese.",
    pricex5: 8,
    sells: 30,
    veggie: false,
    sweet: false,
  },
  {
    id: 12,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/1KYIQK65yxVRuoi61QhTPBXInWh6Bo0F.jpg",
    name: "Philadelphia",
    description:
      "Roll stuffed with salmon and Philadelphia cheese, covered with toasted sesame.",
    pricex5: 8.5,
    sells: 350,
    veggie: false,
    sweet: false,
  },
  {
    id: 13,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/q7-NBPdx7hKm-pIlewwJJ2oPaMCLv5a9.jpg",
    name: "New York Classic",
    description:
      "Roll stuffed with salmon and avocado, covered with toasted sesame",
    pricex5: 8.5,
    sells: 350,
    veggie: false,
    sweet: false,
  },
  {
    id: 14,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/nJvuypdGIB6fEmQlXN5oq0QANmMkDiMV.jpg",
    name: "Shrimp Vocado",
    description:
      "Roll stuffed with prawns coated in Philadelphia cheese, covered with avocado.",
    pricex5: 7.5,
    sells: 350,
    veggie: false,
    sweet: false,
  },
  {
    id: 15,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/lu24gtDcBY1C3er2yfd6L7hQjZQAvpMJ.jpg",
    name: "Phila Tuna",
    description:
      "Classic Roll stuffed with tuna, mayonnaise, green, ground chili, and finlandia.",
    pricex5: 7.5,
    sells: 60,
    veggie: false,
    sweet: false,
  },
  {
    id: 16,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/KRis_040Keqw3p7AwbkG28z9BmgHgfxT.jpg",
    name: "Buenos Aires",
    description:
      "Roll stuffed with Philadelphia cheese and battered prawns covered with a thin layer of salmon",
    pricex5: 7.8,
    sells: 550,
    veggie: false,
    sweet: false,
  },
  {
    id: 17,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/9MZFr7cxzHqeSCqHP_tgrb08Ki8rKhAI.jpg",
    name: "Premium Sashimi",
    description: "Select cuts of the freshest salmon.",
    pricex5: 18.8,
    sells: 1550,
    veggie: false,
    sweet: false,
  },
  {
    id: 18,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/lugh3S-_j3UTFwDCVZ960cRiO5VpydRP.jpg",
    name: "Premium Sashimi",
    description:
      "Roll stuffed with panko-coated prawns, with Philadelphia cheese, covered with chives and topped with sweet potato fries.",
    pricex5: 7.8,
    sells: 90,
    veggie: false,
    sweet: true,
  },
  {
    id: 19,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/9IOeyfMnwkcMUZY6m7QNkNtjPOY4Jv-Y.jpg",
    name: "Paris",
    description:
      "Crepe-type roll stuffed with salmon, Philadelphia cheese, topped with peanut praline.",
    pricex5: 7.8,
    sells: 20,
    veggie: false,
    sweet: true,
  },
  {
    id: 20,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/hY7GpwqjA5TODMRy9xDh95I7NDLvCiP0.jpg",
    name: "Philacuya",
    description:
      "Roll stuffed with avocado and Phila cheese, on the outside a fresh salmon tapa, crowned with fried sweet potato and passion fruit sauce.",
    pricex5: 6.8,
    sells: 250,
    veggie: false,
    sweet: true,
  },
  {
    id: 21,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/MnpTDrens4xRxC7O428RxPqNQdxWvt-L.jpg",
    name: "Napoli",
    description:
      "Roll stuffed with battered prawns and Philadelphia cheese with sweet and sour sauce of honey and mustard.",
    pricex5: 7.5,
    sells: 250,
    veggie: false,
    sweet: true,
  },
  {
    id: 22,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/5On_tR7xuLYzEHWU_hmOkAMcZu1WFTa1.jpg",
    name: "Clerck",
    description:
      "Roll stuffed with salmon cooked with honey and mustard, Phila cheese and sweet potato threads fried on the outside.",
    pricex5: 9.5,
    sells: 50,
    veggie: false,
    sweet: true,
  },
  {
    id: 23,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/zf4Ws1CJ6fDsLV1BySmk8bVbEhKJw8Xb.jpg",
    name: "California",
    description: "Roll stuffed with kanikama with Philadelphia and avocado.",
    pricex5: 6.5,
    sells: 30,
    veggie: false,
    sweet: false,
  },
  {
    id: 24,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/NBdckZ0hR4GtjYRMCRQKj2DkzVnRAGDY.jpg",
    name: "Persia",
    description:
      "Roll stuffed with salmon, Philadelphia and green covered with toasted sesame.",
    pricex5: 9.5,
    sells: 60,
    veggie: false,
    sweet: false,
  },
  {
    id: 25,
    categorie: "roll",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/JVIR6_PkCaj8am-0-eZF9gFaW-tjAJZB.jpg",
    name: "Nippon Bites",
    description:
      "Tamago roll stuffed with rice, Philadelphia and avocado wrapped in pink salmon.",
    pricex5: 14.5,
    sells: 1250,
    veggie: false,
    sweet: false,
  },
  {
    id: 26,
    categorie: "gourmet",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/z0Y6hcFNzWJoFaTXmGIGITU0Bcc7jXF1.jpg",
    name: "Teriyaki Salmon",
    description:
      "Grilled seared salmon with Teriyaki sauce, sautéed vegetables and rice.",
    pricex5: 30.5,
    sells: 20,
    veggie: false,
    sweet: false,
  },
  {
    id: 27,
    categorie: "gourmet",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/ruCTLIWCVrbTsHloNsGXsTAVFI2gUtk4.jpg",
    name: "Teriyaki Quinoa",
    description:
      "Grilled seared salmon with Teriyaki sauce, sautéed vegetables and quinoa.",
    pricex5: 32.5,
    sells: 18,
    veggie: false,
    sweet: false,
  },
  {
    id: 28,
    categorie: "gourmet",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/hf8pLJcZrTJQjnuAHgJp3F2aNB03qqh2.jpg",
    name: "Pad Thai",
    description:
      "Stir fried prawns over thin rice noodles sautéed with egg and vegetables. Classic Thai.",
    pricex5: 24,
    sells: 30,
    veggie: false,
    sweet: false,
  },
  {
    id: 29,
    categorie: "gourmet",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/ej_2Z321RIp2y5rYjbZ4J1yQVI8d2gwn.jpg",
    name: "Shogayaki Wok",
    description:
      "Pork bondiola wok marinated in ginger, accompanied with gohan rice and coleslaw.",
    pricex5: 18.5,
    sells: 150,
    veggie: false,
    sweet: false,
  },
  {
    id: 30,
    categorie: "gourmet",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/s9bgDXflzZOnw8dsgqJu3zq2_jgLVnOM.jpg",
    name: "Chicken Curry",
    description:
      "Chicken curry slightly spicy with coconut cream, topped with slices of toasted almonds, accompanied by jasmine rice.",
    pricex5: 16.5,
    sells: 200,
    veggie: false,
    sweet: false,
  },
  {
    id: 31,
    categorie: "gourmet",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/tWowhIMMg-LbHGaXjVfKTvX3Gfuhgqkr.jpg",
    name: "Xao Rice",
    description:
      "Nutritious dish of Vietnamese origin, which combines tenderloin and vegetables sautéed in teriyaki sauce, accompanied by gohan rice and wedge potatoes.",
    pricex5: 25.5,
    sells: 30,
    veggie: false,
    sweet: false,
  },
  {
    id: 32,
    categorie: "gourmet",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/ZLIDx-lm_dDOs1Me7q7geURaq657oa92.jpg",
    name: "Chop Suey Veggie",
    description:
      "Sautéed vegetables in teriyaki sauce, topped with cashew nuts and green onion, on a quinoa mattress.",
    pricex5: 18.5,
    sells: 40,
    veggie: true,
    sweet: false,
  },
  {
    id: 33,
    categorie: "salad",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/qCpjaLSlUAxBncP-FV-Kt_zTqNwlrtUg.jpg",
    name: "Poke Salmon Fresh",
    description:
      "Fresh salmon salad, fresh dill, lemon zest, sesame oil, avocado, phila cheese, on gohan rice.",
    pricex5: 8.5,
    sells: 140,
    veggie: false,
    sweet: false,
  },
  {
    id: 34,
    categorie: "salad",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/-e7Lk4THSYePoYVEyC5XLu7jFAxF4Pra.jpg",
    name: "Poke Salmon",
    description:
      "Fresh salad of salmon, avocado, Phila cheese, cabbage and carrot on rice.",
    pricex5: 8,
    sells: 140,
    veggie: false,
    sweet: false,
  },
  {
    id: 35,
    categorie: "salad",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/3dc6eb1bef2170d1e99235d7806fc11d9b79dc26.png",
    name: "Poke Salmango",
    description:
      "Fresh salmon and mango salad, passion fruit sauce, brunoise red onion and crispy avocado sweet potato, phila cheese, on gohan rice.",
    pricex5: 12.5,
    sells: 140,
    veggie: false,
    sweet: true,
  },
  {
    id: 36,
    categorie: "salad",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/JD-lc_IyHwY8gwtwyXt39mW_YsZBsIZv.jpg",
    name: "Poke Tijuana",
    description:
      "Fresh breaded chicken salad, teriyaki sauce, guacamole and Phila cheese, on gohan rice.",
    pricex5: 8,
    sells: 40,
    veggie: false,
    sweet: false,
  },
  {
    id: 37,
    categorie: "salad",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/JEFB5T5ubp_NRWZASCQmSQqdbn0MxV9z.jpg",
    name: "Poke Prawns",
    description:
      "Fresh salad of battered prawns, avocado, Phila cheese, cabbage and carrot on rice .",
    pricex5: 6.5,
    sells: 80,
    veggie: false,
    sweet: false,
  },
  {
    id: 38,
    categorie: "salad",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/c68lxpLo4dUZ3vsFcGhansML66Effr3P.jpg",
    name: "Poke Veggie",
    description:
      "Fresh seasonal vegetable salad sautéed in teriyaki sauce and phila cheese, over gohan rice.",
    pricex5: 6.5,
    sells: 30,
    veggie: true,
    sweet: false,
  },
  {
    id: 39,
    categorie: "combo",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/huF4HjMTmdhSSiAl3WCuZERCgkW-MmAT.jpg",
    name: "Kuro 黒",
    description:
      "To give yourself a full taste! Premium combo to try a little of everything.",
    pricex5: 50,
    sells: 80,
    veggie: false,
    sweet: false,
  },
  {
    id: 40,
    categorie: "combo",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/LnOCD9fZo7JaCKJL7A4T6D8k9ZiMsHi7.jpg",
    name: "Arasaka アラスカ",
    description: "Delicious mix of premium flavors.",
    pricex5: 75,
    sells: 2530,
    veggie: false,
    sweet: false,
  },
  {
    id: 41,
    categorie: "combo",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/3a-aaRoHRvuASTAR8khagKeGUhSqzDR3.jpg",
    name: "Tokyo 東京",
    description: "Delicious and cheap, with a little bit of everything.",
    pricex5: 45,
    sells: 20,
    veggie: false,
    sweet: false,
  },
  {
    id: 42,
    categorie: "extras",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/DILx8nlV6F8-gZ3HsIrGxBriC8c12IFA.jpg",
    name: "Meat Dumplings",
    description: "Fried meat rolls wrapped in rice paper.",
    pricex5: 5,
    sells: 20,
    veggie: false,
    sweet: false,
  },
  {
    id: 43,
    categorie: "extras",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/EHSXRLxuYA9X3MY0JKppEXeNhijGFd0z.jpg",
    name: "Veggie Dumplings",
    description: "Fried vegetable rolls wrapped in rice paper.",
    pricex5: 5,
    sells: 20,
    veggie: true,
    sweet: false,
  },
  {
    id: 44,
    categorie: "extras",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/_VCMHilUTBagZKaQZLrs6557XjQep4_w.jpg",
    name: "Battered Langoustines",
    description: "Panko battered prawns with smoked teriyaki sauce.",
    pricex5: 12,
    sells: 20,
    veggie: false,
    sweet: false,
  },
  {
    id: 45,
    categorie: "extras",
    type: "hot",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/vYJWIVQKioOXpGGhinn2AK0uhbEkmuuJ.jpg",
    name: "Tandoori Chicken",
    description:
      "Chicken Sticks marinated in Tandori, Battered in Panko and Sesame Seeds, accompanied by Barbecue Sauce.",
    pricex5: 10,
    sells: 20,
    veggie: false,
    sweet: false,
  },
  {
    id: 46,
    categorie: "extras",
    type: "cold",
    photo:
      "https://lascameliaslp.com.ar/wp-content/uploads/franui1-dd4cb0d3eca985186116202365818405-1024-1024.png",
    name: "Rapanui",
    description: "Delicious chocolate bites filled with strawberries.",
    pricex5: 9.5,
    sells: 200,
    veggie: true,
    sweet: true,
  },
  {
    id: 47,
    categorie: "sauces",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/RFU7_lJugJcXl3P8dZD44JJMhHSmd9_o.jpg",
    name: "Soy Sauce",
    description: "Our classic sauce goes well with any flavor.",
    pricex5: 1.2,
    sells: 500,
    veggie: true,
    sweet: false,
  },
  {
    id: 48,
    categorie: "sauces",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/nceehLWSZN0Cri7_XH_TxHScKt56QNBl.jpg",
    name: "Wasabi",
    description: "Do you love the taste of Wasabi? More spicy please.",
    pricex5: 0.5,
    sells: 80,
    veggie: true,
    sweet: false,
  },
  {
    id: 49,
    categorie: "sauces",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/L41hV9aV8J1an_N2pHTFsquS2b_JszOP.jpg",
    name: "Guacamole",
    description: "For the most intrepid tasters.",
    pricex5: 1.8,
    sells: 80,
    veggie: true,
    sweet: false,
  },
  {
    id: 50,
    categorie: "sauces",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/qEBZdLLxGR328UdEJ-qbIk1UID38cuvf.jpg",
    name: "Nippon Sauce",
    description: "Spicy and sweet, something different.",
    pricex5: 1.9,
    sells: 80,
    veggie: true,
    sweet: true,
  },
  {
    id: 51,
    categorie: "sauces",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/hfQ62zqraHn2cz-K9FsInrWynfDC_k1V.jpg",
    name: "Ginger",
    description: "Ginger slices in vinegar.",
    pricex5: 0.8,
    sells: 80,
    veggie: true,
    sweet: false,
  },
  {
    id: 52,
    categorie: "sauces",
    type: "cold",
    photo:
      "https://sushipopimg.s3.amazonaws.com/productos/9P-Y3-EQXWJDgEGSEIZEFsgvP8MLb6E7.jpg",
    name: "Teriyaki Sauce",
    description: "Sweetened and smoked soy sauce, with toasted sesame seeds.",
    pricex5: 0.8,
    sells: 80,
    veggie: true,
    sweet: true,
  },
];




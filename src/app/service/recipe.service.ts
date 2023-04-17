import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  getData() {
    return [
      {
        name: "Classic Lasagna",
        description:
          "Perfect homemade lasagna layered with tender pasta, beefy flavorful marinara sauce and plenty of cheeses!",
        imgPath:
          "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/09/Zucchini-Lasagna-3.jpg",
          ingredients: [
          " 1 Tablespoon Olive Oil",
          "1 small Onion ((finely diced))",
          "1 lb. Lean Ground Beef",
          "3/4 teaspoon Garlic Powder ((or 5 garlic cloves, finely minced))",
          "3/4 teaspoon Salt",
        ],
      },
      {
        name: "Skillet Lasagna Recipe with Rotini",
        description:
          "This skillet lasagna recipe with rotini is an easy family dinner that only takes 30-ish minutes",
        imgPath:
          "https://images-gmi-pmc.edge-generalmills.com/6a71b700-93a9-4c73-9337-3bde9fac2c02.jpg",
          ingredients: [
          "1 Tbsp. olive oil",
          "1/2 white onion, diced",
          "1 cup white mushrooms, chopped (about 5-6 mushrooms)",
          "1 red bell pepper, diced",
          "1 lb. ground turkey",
        ],
      },
      {
        name: "Turkish Pistachio Baklava Recipe",
        description:
          "Turkish Pistachio Baklava is one of the best things you can make with pistachios. ",
        imgPath: "https://i.ytimg.com/vi/qdwd_ZQmOr8/maxresdefault.jpg",
        ingredients: [
          "3 cups sugar",
          "1 2/3 cups water",
          "Juice of 1/2 lemon",
          "1 pound Phyllo (defrosted overnight in the refrigerator)",
        
        ],
      },
      {
        name: "Cheesecake baclava",
        description:
          "Reteta de cheesecake baclava este o minunatie de desert! O combinatie delicioasa intre baclava.",
        imgPath:
          "https://jamilacuisine.ro/wp-content/uploads/2020/03/Cheesecake-baclava-500x500.jpg",
          ingredients: [
          "1 pack Filo pastry (1 pack of store bough filo (250g or 10 sheets))",
          "50 g Unsalted butter (melted)",
          "140 g Walnut (roast whole walnut, then pulse blend)",
          "450 g Cream cheese (eg. full fat Philadelphia tub)",
          "120 g Granulated sugar",
        ],
      },
      {
        name: "Baclava | 45 rolinhos",
        description:
          "45 rolinhos, A nossa sobremesa tradicional, elaborada com massa folhada finíssima, com frutos secos e banhada em mel. ",
        imgPath:
          "https://cdn.shopify.com/s/files/1/0427/8314/6151/articles/20220803115959-baklava_1024x1024.jpg?v=1659528190",
          ingredients: [
          "2 dl. sugar",
          "2 dl. water",
          "The juice from 2 lemons 370 g honey",
          "2 sticks Sri Lanka cinnamon",
        ],
      },
    ];
  }

  constructor() {}
}

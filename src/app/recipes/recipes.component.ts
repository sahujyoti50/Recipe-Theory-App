import { Component } from '@angular/core';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe:any={
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
    ],
  };
  recipeList:{name:string,description:string,imgPath:string}[];
constructor(private recipeService:RecipeService ){
  this.recipeList=recipeService.getData();
}

getselectedDetails(recipe:any){
this.selectedRecipe=recipe;
console.log(recipe);
}
}

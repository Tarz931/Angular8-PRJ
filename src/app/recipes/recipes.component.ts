import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipeitem: Recipe;
  
  
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe: Recipe) => {
    //       this.selectedRecipeitem = recipe;
    //     }
    //   );

    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {this.selectedRecipeitem = recipe});
  }

  // selectedRecipe(recipe: Recipe){
  //   this.selectedRecipeitem = recipe;
  //   console.log(recipe)
  // }

}

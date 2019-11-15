import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

    constructor(private slServ: ShoppingListService){};

    recipeSelected =  new EventEmitter<Recipe>();
    // recipeSelected = new EventEmitter();
    // private recipes: Recipe[] = [
    //     new Recipe('Steak', 'How to Make a Steak', 'http://www.boulingrin.fr/wp-content/uploads/2013/12/url.jpg', 
    //                 [new Ingredient('NY Cut', 1), new Ingredient('Pepper', 2)]),
    //     new Recipe('Burger', 'How to make a Burger', 'http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4160.png',
    //     [new Ingredient('Chicken', 1), new Ingredient('lettuce', 2), new Ingredient('Tomato', 2), new Ingredient('Buns', 2)])
    //   ];


    private recipes: Recipe[];

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slServ.addIngredients(ingredients);
      }

      getRecipe(index: number){
        return this.recipes.slice()[index];
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
}
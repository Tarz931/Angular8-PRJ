import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
    // ingredientAdd = new EventEmitter<Ingredient>();
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Steak', 100),
        new Ingredient('Pasta', 50),
        ];
    
    getIngredient(){
        return this.ingredients.slice();  // Slice is used to only send a copy of the array and not the actual array
    }

    addIngredient(item: Ingredient){
        // console.log(item);
        // const ing = new Ingredient(item.name, item.value);
        this.ingredients.push(item);
        this.ingredientsChanged.emit(this.ingredients.slice()); // To emit the sliced array
        // this.ingredientAdd.subscribe((item: Ingredient) => {this.ingredients.push(item)});
      }

    addIngredients(ingredients: Ingredient[]){
        // for (let ing of ingredients){
        //     this.addIngredient(ing);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }


}
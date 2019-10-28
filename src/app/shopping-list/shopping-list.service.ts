import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


export class ShoppingListService {
    // ingredientAdd = new EventEmitter<Ingredient>();
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Steak', 100),
        new Ingredient('Pasta', 50),
        ];
    
    getIngredients(){
        return this.ingredients.slice();  // Slice is used to only send a copy of the array and not the actual array
    }

    getIngredient(index: number){
        return this.ingredients.slice()[index];
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

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

}
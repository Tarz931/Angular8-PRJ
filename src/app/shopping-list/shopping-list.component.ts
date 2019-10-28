import { Component, OnInit } from '@angular/core';
import { Ingredient } from  '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Steak', 100),
  //   new Ingredient('Pasta', 50),
  // ];
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredient: Ingredient[]) => {this.ingredients = ingredient}); // This is so that the slice data can be updated
  }

  onIngredientadded(item: Ingredient){
    // console.log(item);
    // const ing = new Ingredient(item.name, item.value);
    // this.ingredients.push(item)
    // this.slService.ingredientAdd.subscribe((item: Ingredient) => {this.slService.addIngredient(item)});
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }


}

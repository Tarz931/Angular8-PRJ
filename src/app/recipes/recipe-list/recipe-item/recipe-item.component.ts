import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  // @Output() recipeselected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }


  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
    // const recipeEmit = {name: this.recipe.name, desc: this.recipe.desc, img: this.recipe.img}
    // this.recipeService.recipeSelected.emit(recipeEmit)
  }

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://www.boulingrin.fr/wp-content/uploads/2013/12/url.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'http://www.boulingrin.fr/wp-content/uploads/2013/12/url.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

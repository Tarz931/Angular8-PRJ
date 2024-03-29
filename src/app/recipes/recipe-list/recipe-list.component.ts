import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  // providers: [RecipeService] 
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  sub: Subscription;
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is a test', 'http://www.boulingrin.fr/wp-content/uploads/2013/12/url.jpg'),
  //   new Recipe('A Test Recipe22', 'This is a test', 'http://www.boulingrin.fr/wp-content/uploads/2013/12/url.jpg')
  // ];

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    // this.route.navigate(['/recipes/new']);
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy(){
    this.sub.unsubscribe();  }


  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }
}

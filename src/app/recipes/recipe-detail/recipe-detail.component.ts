import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input('recipe') recipeDet:Recipe;
  recipeDet:Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {this.id = +params['id']; 
    this.recipeDet = this.recipeService.getRecipe(this.id);});

  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeDet.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['/','recipes', this.id, 'edit']);
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}

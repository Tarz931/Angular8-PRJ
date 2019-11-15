import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://angular8-prj.firebaseio.com/recipes.json', recipes)
        .subscribe(response => {console.log(response)});

    }

    fetchRecipes(){
        this.http.get<Recipe[]>('https://angular8-prj.firebaseio.com/recipes.json')
        .pipe(map(recipes => {return recipes.map(recipe => {return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []}})}))
        .subscribe(getRecipes => {this.recipeService.setRecipes(getRecipes);});


    }
}
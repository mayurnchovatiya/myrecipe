import { Recipes } from './../recipes/recipes.model';
import { RecipeService } from './../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';    

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeSercive: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://recipe-book-73dd1.firebaseio.com/recipes.json',
            this.recipeSercive.getRecipes());
    }

    getRecipes(){
        this.http.get('https://recipe-book-73dd1.firebaseio.com/recipes.json')
        .map(
            (response: Response) => {
                const recipes: Recipes[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipes[]) => {
                this.recipeSercive.setRecipe(recipes);
            }
        );
        
    }
}
import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipes } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    // recipeSelected = new EventEmitter<Recipes>();
    recipesChanged = new Subject<Recipes[]>();

    private recipes: Recipes[] = [
        new Recipes('Surti Wrap',
            'Khatarnak!!',
            'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?h=350&auto=compress&cs=tinysrgb',
            [
                new Ingredient('pitta', 1),
                new Ingredient('veges', 1)
            ]
        ),
        new Recipes('Cake',
            'leak fingers',
            'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?h=350&auto=compress&cs=tinysrgb',
            [
                new Ingredient('choco', 1),
                new Ingredient('fruits', 1)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    setRecipe(recipes: Recipes[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);

    }

    addRecipe(recipe: Recipes) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, neRecipe: Recipes){
        this.recipes[index] = neRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];
    
    getIngredients() {
        return this.ingredients.slice();    // return this.ingredients;
        // we could also write this instead of emiting new Event
    }
    
    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients){
        //     this.onIngredientAdded(ingredient);
        // }
        // below is alternate solution

        this.ingredients.push(...ingredients);
        // we can't add directly array elemnets using push, this TS6 syntax converts array elements
        // into list of elements.
        this.ingredientChanged.next(this.ingredients.slice());
    }
}
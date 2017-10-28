import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
   subscription: Subscription;
   recipes: Recipes[];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription =  this.recipeService.recipesChanged.subscribe(
      (recipes: Recipes[]) => {
        this.recipes = recipes;
      }
    );
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}




// @Output() recipeWasSelected = new EventEmitter<Recipes>();

// recipes: Recipes[];

//   constructor(private recipeService: RecipeService) { }

//   ngOnInit() {
//     this.recipes = this.recipeService.getRecipes();
//   }

//   onRecipeSelected(recipe: Recipes){
//   this.recipeWasSelected.emit(recipe);
//   }

// }
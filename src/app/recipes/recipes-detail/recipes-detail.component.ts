import { Recipes } from './../recipes.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipes: Recipes;
  id: number;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipes = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipes.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit']. {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}


// export class RecipesDetailComponent implements OnInit {
//   @Input() recipes: Recipes;
//   constructor(private recipeService: RecipeService) {}

//   ngOnInit() {
//   }

//   onAddToShoppingList(){
//     this.recipeService.addIngredientToShoppingList(this.recipes.ingredients);
//   }

// }
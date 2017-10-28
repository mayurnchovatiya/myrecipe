import { Component, OnInit, Input} from '@angular/core';
import { Recipes } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipes: Recipes;
  @Input() index: number;

  ngOnInit() {
  }

}





// export class RecipesItemComponent implements OnInit {
//   @Input() recipes: Recipes;

//   constructor(private recipeService: RecipeService) { }

//   ngOnInit() {
//   }

//   onSelected() {

//     this.recipeService.recipeSelected.emit(this.recipes);


//   }

// }

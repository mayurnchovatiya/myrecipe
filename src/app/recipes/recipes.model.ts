import { Ingredient } from '../shared/ingredient.model';
export class Recipes{
    constructor(
        public name: string, 
        public description: string,
        public imagePath: string,
        public ingredients: Ingredient[]
     ){ }
}
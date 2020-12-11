import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pav Bhaji',
      'Makkhann dish hai bahisaab',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Pav_Bhaji.jpg/330px-Pav_Bhaji.jpg',
      [
        new Ingredient('Pav', 1),
        new Ingredient('Bhaji', 2)
      ]),
    new Recipe('Chole Bathure',
      'Tasty Tasty Yum Yum',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Chole_Bhature_on_the_street.jpg/450px-Chole_Bhature_on_the_street.jpg',
      [
        new Ingredient('Chhole', 1),
        new Ingredient('Bhatoore', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

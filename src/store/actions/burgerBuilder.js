/** @format */

import * as actionTypes from "./actionsTypes";

export const addIngredient = (name) => {
  return {
    ingredientName: name,
    type: actionTypes.ADD_INGREDIENT,
  };
};

export const removeIngredient = (name) => {
  return {
    ingredientName: name,
    type: actionTypes.REMOVE_INGREDIENT,
  };
};

export const initIngredients = () => {};

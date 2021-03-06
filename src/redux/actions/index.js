import {
  fetchFoodsByIngredient, fetchFoodsByName, fetchFoodsByFLetter,
  fetchDrinksByIngredient, fetchDrinksByName, fetchDrinksByFLetter,
  fetchFoodById, fetchDrinkById, fetchFoodsCategories, fetchDrinksCategories,
  fetchFoodRandom, fetchDrinkRandom, fetchFoodsByCategory, fetchDrinksByCategory,
  fetchFoodListIngredients, fetchFoodListNationalities, fetchDrinksListIngredients,
  fetchDrinksListNationalities, fetchDrinksByNationality, fetchFoodsByNationality,
} from '../../services/Api';

export const USER_EMAIL = 'USER_EMAIL';
export const GET_EMPTY_SIZE = 'GET_EMPTY_SIZE';
export const saveEmail = (email) => ({ type: USER_EMAIL, email });
export const checkClickSearch = (payload) => ({ type: 'CHECK_CLICK', payload });
const failedRequest = (payload) => ({ type: 'FAILED_REQUEST', payload });
const saveFoods = (foods) => ({ type: 'GET_FOODS', foods });
const saveDrinks = (drinks) => ({ type: 'GET_DRINKS', drinks });
const saveFoodsByCategory = (food) => ({ type: 'GET_FOODS_BY_CATEGORY', food });
const saveFoodDetails = (food) => ({ type: 'GET_FOOD_DETAILS', food });
const saveDrinkDetails = (drink) => ({ type: 'GET_DRINK_DETAILS', drink });
const saveFoodsCategories = (categories) => ({ type: 'GET_FOOD_CATEGORIES', categories });
const saveDrinksCategories = (categories) => ({
  type: 'GET_DRINK_CATEGORIES',
  categories,
});
const saveFoodIngredients = (ingredients) => ({
  type: 'GET_FOOD_INGREDIENTS',
  ingredients,
});
const saveDrinkIngredients = (ingredients) => ({
  type: 'GET_DRINK_INGREDIENTS',
  ingredients,
});
const saveFoodNationalities = (nationalities) => ({
  type: 'GET_FOOD_NATIONALITIES',
  nationalities,
});
const saveDrinkNationalities = (nationalities) => ({
  type: 'GET_DRINK_NATIONALITIES',
  nationalities,
});

export const getFoodsByIngredient = (ingredient) => async (dispatch) => {
  try {
    const data = await fetchFoodsByIngredient(ingredient);
    dispatch(saveFoods(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getDrinksByCategory = (category) => async (dispatch) => {
  try {
    const data = await fetchDrinksByCategory(category);
    dispatch(saveDrinks(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getFoodsByCategory = (category) => async (dispatch) => {
  try {
    const data = await fetchFoodsByCategory(category);
    dispatch(saveFoodsByCategory(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getFoodsByName = (name) => async (dispatch) => {
  try {
    const data = await fetchFoodsByName(name);
    dispatch(saveFoods(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getFoodsByFLetter = (letter) => async (dispatch) => {
  try {
    const data = await fetchFoodsByFLetter(letter);
    dispatch(saveFoods(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getDrinksByIngredient = (ingredient) => async (dispatch) => {
  try {
    const data = await fetchDrinksByIngredient(ingredient);
    dispatch(saveDrinks(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getDrinksByName = (name) => async (dispatch) => {
  try {
    const data = await fetchDrinksByName(name);
    dispatch(saveDrinks(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getDrinksByFLetter = (letter) => async (dispatch) => {
  try {
    const data = await fetchDrinksByFLetter(letter);
    dispatch(saveDrinks(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getFoodById = (id) => async (dispatch) => {
  try {
    const data = await fetchFoodById(id);
    dispatch(saveFoodDetails(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getDrinkById = (id) => async (dispatch) => {
  try {
    const data = await fetchDrinkById(id);
    dispatch(saveDrinkDetails(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getFoodsCategories = () => async (dispatch) => {
  try {
    const data = await fetchFoodsCategories();
    dispatch(saveFoodsCategories(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getDrinksCategories = () => async (dispatch) => {
  try {
    const data = await fetchDrinksCategories();
    dispatch(saveDrinksCategories(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getFoodRandom = () => async (dispatch) => {
  try {
    const data = await fetchFoodRandom();
    dispatch(saveFoodDetails(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getDrinkRandom = () => async (dispatch) => {
  try {
    const data = await fetchDrinkRandom();
    dispatch(saveDrinkDetails(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getFoodIngredients = () => async (dispatch) => {
  try {
    const data = await fetchFoodListIngredients();
    dispatch(saveFoodIngredients(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getFoodNationalities = () => async (dispatch) => {
  try {
    const data = await fetchFoodListNationalities();
    dispatch(saveFoodNationalities(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getDrinkIngredients = () => async (dispatch) => {
  try {
    const data = await fetchDrinksListIngredients();
    dispatch(saveDrinkIngredients(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getDrinkNationalities = () => async (dispatch) => {
  try {
    const data = await fetchDrinksListNationalities();
    dispatch(saveDrinkNationalities(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getFoodsByNationality = (nationality) => async (dispatch) => {
  try {
    const data = await fetchFoodsByNationality(nationality);
    dispatch(saveFoods(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
export const getDrinksByNationality = (nationality) => async (dispatch) => {
  try {
    const data = await fetchDrinksByNationality(nationality);
    dispatch(saveDrinks(data));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};

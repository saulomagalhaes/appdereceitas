import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import {
  HEADER_PROFILE_TOP_BTN_ID,
  PAGE_TITLE_ID,
  ROUTE_FAVORITE_RECIPES,
  SPICY_ARRABBIATA_PENNE,
  AQUAMARINE,
  LOCAL_STORAGE_FAVORITES,
} from './helpers/constants';

describe('1. Validação do Header ', () => {
  it('1.1 - Verifica se existe um botão para ir para a página de perfil', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [ROUTE_FAVORITE_RECIPES] });
    const inputProfile = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);

    expect(inputProfile).toBeInTheDocument();
  });

  it('1.2 - Verifica se existe título da página', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [ROUTE_FAVORITE_RECIPES] });
    const title = screen.getByTestId(PAGE_TITLE_ID);

    expect(title).toBeInTheDocument();
  });
});

describe('2. Validação dos filtros de categoria ', () => {
  beforeEach(() => {
    const key = 'favoriteRecipes';
    window.localStorage.setItem(key, JSON.stringify(LOCAL_STORAGE_FAVORITES));
  });

  afterEach(() => {
    window.localStorage.clear();
  });
  it('2.1 - Verifica se existe um filtro para cada categoria', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [ROUTE_FAVORITE_RECIPES] });
    const inputAll = screen.getByTestId('filter-by-all-btn');
    const inputFood = screen.getByTestId('filter-by-food-btn');
    const inputDrink = screen.getByTestId('filter-by-drink-btn');

    expect(inputAll).toBeInTheDocument();
    expect(inputFood).toBeInTheDocument();
    expect(inputDrink).toBeInTheDocument();
  });

  it('2.2 - Verifica o funcionamento do botão filtrar por comida', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [ROUTE_FAVORITE_RECIPES] });
    const inputFood = screen.getByTestId('filter-by-food-btn');
    const nameFood = await screen.findByText(SPICY_ARRABBIATA_PENNE);
    const nameDrink = await screen.findByText(AQUAMARINE);

    userEvent.click(inputFood);
    expect(nameFood).toBeInTheDocument();
    expect(nameDrink).not.toBeInTheDocument();
  });

  it('2.3 - Verifica o funcionamento do botão filtrar por bebida', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [ROUTE_FAVORITE_RECIPES] });
    const inputDrink = screen.getByTestId('filter-by-drink-btn');
    const nameFood = await screen.findByText(SPICY_ARRABBIATA_PENNE);
    const nameDrink = await screen.findByText(AQUAMARINE);

    userEvent.click(inputDrink);
    expect(nameDrink).toBeInTheDocument();
    expect(nameFood).not.toBeInTheDocument();
  });

  it('2.4 - Verifica o funcionamento do botão filtrar por todos', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [ROUTE_FAVORITE_RECIPES] });
    const inputAll = screen.getByTestId('filter-by-all-btn');
    const nameFood = await screen.findByText(SPICY_ARRABBIATA_PENNE);
    const nameDrink = await screen.findByText(AQUAMARINE);

    userEvent.click(inputAll);
    expect(nameFood).toBeInTheDocument();
    expect(nameDrink).toBeInTheDocument();
  });
});

describe('3. Validação dos cards de receitas concluidas', () => {
  const originalClipboard = { ...global.navigator.clipboard };
  beforeEach(() => {
    const key = 'favoriteRecipes';
    window.localStorage.setItem(key, JSON.stringify(LOCAL_STORAGE_FAVORITES));

    const mockClipboard = { writeText: jest.fn() };
    global.navigator.clipboard = mockClipboard;
  });

  afterEach(() => {
    window.localStorage.clear();
    global.navigator.clipboard = originalClipboard;

    jest.resetAllMocks();
  });

  it('3.1 - Verifica se cada card possui uma imagem', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [ROUTE_FAVORITE_RECIPES] });
    const card1 = screen.getByTestId('0-horizontal-image');
    const card2 = screen.getByTestId('1-horizontal-image');

    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
  });

  it('3.2 - Verifica se cada card possui um nome e uma categoria ', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [ROUTE_FAVORITE_RECIPES] });
    const card1 = screen.getByTestId('0-horizontal-name');
    const card2 = screen.getByTestId('1-horizontal-name');
    const card1Category = screen.getByTestId('0-horizontal-top-text');
    const card2Category = screen.getByTestId('1-horizontal-top-text');

    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
    expect(card1Category).toBeInTheDocument();
    expect(card2Category).toBeInTheDocument();
  });

  it(`3.3 - Verifica se ao clicar para compartilhar o link para os detalhes
  da receita é copiado para o clipboard e aparece uma mensagem
  Link Copied!`, async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [ROUTE_FAVORITE_RECIPES] });
    const card1 = screen.getByTestId('0-btn-click');
    userEvent.click(card1);

    const linkCopied = await screen.findByText(/link copied/i);
    expect(linkCopied).toBeInTheDocument();
  });

  it('3.4 - Verifica o botão de remover da lista de favoritos', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: [ROUTE_FAVORITE_RECIPES] });
    const card1 = screen.getByTestId('0-horizontal-favorite-btn');
    userEvent.click(card1);

    expect(JSON.parse(window.localStorage.getItem('favoriteRecipes')).length).toBe(1);
  });
});

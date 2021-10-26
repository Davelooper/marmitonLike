import { apiFetch } from "../../utils/functions/apiFetch"
import { useReducer } from "react"
import chickenRecipes from "../../utils/const/chickenRecipes"

function reducer(state, action) {
    console.log('RECIPES REDUCE', action.type, action)
    switch (action.type) {
        case "FETCH_RECIPES":
            return {
                ...state,
                loading: true
            }
        case "SET_HOME_RECIPES":
            return {
                ...state,
                loading: false,
                homeRecipes: action.payload
            }
        case "SET_RECIPES":
            return {
                ...state,
                loading: false,
                recipes: action.payload.recipes,
                recipesAccount: action.payload.recipesAccount

            }
        case "SET_RECIPE":
            return {
                ...state,
                loading: false,
                recipe: action.payload
            }
        default:
            console.error('Action inconnue')
    }

}
function useRecipes() {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        recipes: null,
        homeRecipes: null,
        recipe: null
    })

    return {
        recipes: state.recipes,
        homeRecipes: state.homeRecipes,
        recipe: state.recipe,
        recipesAccount: state.recipesAccount,
        fetchHomeRecipes: async function () {
            /*const endpoint = ''
            const params = {
                type: "public",
                q: word,
                app_id: '3ffa939b',
                app_key: '6676ba3f216560f7212b56aa62c6d76a',
            }
            dispatch({ type: "FETCH_RECIPES" })*/

            const recipes = chickenRecipes
            dispatch({
                type: "SET_HOME_RECIPES",
                payload: recipes
            })
        },
        fetchRecipes: async function (word, from = 1, to = 20) {
            const endpoint = ''
            const params = {
                type: "public",
                q: word,
                from: from,
                to: to,
                app_id: '3ffa939b',
                app_key: '6676ba3f216560f7212b56aa62c6d76a',
                field: ['uri', 'label', 'image'],
            }
            dispatch({ type: "FETCH_RECIPES" })
            /*const recipes = chickenRecipes*/
            let recipes = await apiFetch(endpoint, 'GET', params)
            const recipesAccount = recipes.count
            recipes = recipes.hits.map(r => r.recipe)
            recipes.forEach(e => {
                Object.assign(e, { 'id': e.uri.match(/#(.*)/)[1] })
            })
            dispatch({
                type: "SET_RECIPES",
                payload: { recipesAccount, recipes }
            })
        },
        fetchRecipe: async function (id) {
            const endpoint = '/' + id
            const params = {
                type: "public",
                app_id: '3ffa939b',
                app_key: '6676ba3f216560f7212b56aa62c6d76a',
            }
            dispatch({ type: "FETCH_RECIPES" })
            const recipe = await apiFetch(endpoint, 'GET', params)
            dispatch({
                type: "SET_RECIPE",
                payload: recipe.recipe
            })

        }
    }
}

export default useRecipes


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
                recipes: action.payload
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
    })

    return {
        recipes: state.recipes,
        homeRecipes: state.homeRecipes,
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
        fetchRecipes: async function (word) {
            const endpoint = ''
            const params = {
                type: "public",
                q: word,
                app_id: '3ffa939b',
                app_key: '6676ba3f216560f7212b56aa62c6d76a',
                field: ['uri', 'label', 'image']
            }
            dispatch({ type: "FETCH_RECIPES" })
            /*const recipes = chickenRecipes*/
            let recipes = await apiFetch(endpoint, 'GET', params)
            recipes = recipes.hits.map(r => r.recipe)



            debugger
            recipes.forEach(e => {
                Object.assign(e, { 'id': e.uri.match(/#(.*)/)[1] })
            })
            debugger
            dispatch({
                type: "SET_RECIPES",
                payload: recipes
            })
        }
    }
}

export default useRecipes


import { apiFetch } from "../../utils/functions/apiFetch"
import { useReducer } from "react"

function reducer(state, action) {
    console.log('RECIPES REDUCE', action.type, action)
    switch (action.type) {
        case "FETCH_RECIPES":
            return {
                ...state,
                loading: true
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
        recipes: null
    })

    return {
        recipes: state.recipes,
        fetchRecipes: async function (word) {
            debugger
            const endpoint = ''
            const params = {
                type: "public",
                q: word,
                app_id: '3ffa939b',
                app_key: '6676ba3f216560f7212b56aa62c6d76a',
            }
            dispatch({ type: "FETCH_RECIPES" })
            /*const recipes = await apiFetch(endpoint, 'GET', params)*/
            const recipes = await require('../../utils/const/chickenRecipes')
            dispatch({
                type: "SET_RECIPES",
                payload: recipes.default
            })
        }
    }
}

export default useRecipes


export class ApiErrors {
    constructor(errors) {
        this.errors = errors
    }
}

export async function apiFetch(endpoint, method, params) {
    const options = {
        mode: 'cors',
        header: {
            Accept: '*/*'
        }
    }
    let url = 'https://secure-scrubland-66220.herokuapp.com/https://api.edamam.com/api/recipes/v2'
    let response = null
    if (!method) {
        throw new Error('La requête doit contenir une méthode.')
    } else {
        if (method === 'GET' || method === "get") {
            const finalParams = buildParams(params)
            url += endpoint + '?' + finalParams.toString()
            response = await fetch(url, options)
        }
    }

    if (response.status === 204) {
        return null;
    }
    const responseData = await response.json()
    if (response.ok) {
        return responseData
    } else {
        if (responseData.errors) {
            throw new ApiErrors(responseData.errors)
        }
    }
}

function buildParams(params) {
    const output = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) {
        if (Array.isArray(v)) {
            v.map((value) => output.append(k, value))
        } else {
            output.append(k, v)
        }
    }
    return output;
};
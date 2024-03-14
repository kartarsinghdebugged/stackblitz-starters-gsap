import { baseUrl } from '../api/apiConfig'

export async function getData(endpoint){
    const res = await fetch(`${baseUrl}${endpoint}`, { cache: 'no-cache' })
    if(!res.ok) throw Error("Failed to fetch data")
    return res.json()
}

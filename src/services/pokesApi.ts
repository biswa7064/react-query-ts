import axios from "axios"
import { PokeType, GetPokesType } from "../types"

const getPokes = async (): Promise<GetPokesType<PokeType>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/ability/?limit=50&offset=50"
      )
      const { results } = res?.data
      resolve({
        successMsg: "Fetched successful",
        data: results,
        status: 200,
      })
    } catch (error) {
      reject(error)
    }
  })
}

export { getPokes }

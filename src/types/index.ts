export interface PokeType {
  id: number
  name: string
  image: string
  type: string
}

export type GetPokesType<T> = {
  data?: T[]
  error?: string
  successMsg?: string
  status?: number
}

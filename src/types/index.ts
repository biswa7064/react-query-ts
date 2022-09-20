export interface PokeType {
  id: number
  name: string
  image: string
  type: string
}

export type GetPokesType<T> = {
  data?: T[]
  successMsg?: string
  status?: number
}

export type GetDataType<T> = {
  data?: T
  successMsg?: string
  status?: number
}

export type PostDataType<PD> = {
  error?: string
  successMsg?: string
  status?: number
  postedData?: PD
}

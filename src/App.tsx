import "./App.css"
import { useQuery } from "react-query"
import { getPokes } from "./services/pokesApi"
import { GetPokesType, PokeType } from "./types/index"

function App() {
  const { data, isLoading, isFetching } = useQuery<GetPokesType<PokeType>>(
    "allPokes",
    getPokes,
    {
      initialData: {},
    }
  )

  console.log({
    data: data?.data?.[0]?.name,
    isLoading,
    isFetching,
  })
  return <div className="App">REACT_QUERY</div>
}

export default App

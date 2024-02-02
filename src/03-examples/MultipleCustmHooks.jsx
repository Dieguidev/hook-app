import { useFetch } from "../hooks/useFetch"

export const MultipleCustmHooks = () => {

  const {data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/ditto')

  console.log({data, isLoading, hasError});

  return (
    <>
      <h1>BreakingBad utils</h1>
      <hr />
    </>
  )
}

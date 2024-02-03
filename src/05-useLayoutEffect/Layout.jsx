import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Pokemon } from "../03-examples/Pokemon";
import { useFetch, useCounter } from "../hooks"



export const Layout = () => {
  const { counter, increment } = useCounter(1);


  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  const {name, id , sprites} = !!data && data





  return (
    <>
      <h1>BreakingBad utils</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote />
          : <Pokemon
              image={sprites.front_default}
              name={name}
              id={id}
            />
      }


      <button
        onClick={() => increment()}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next quote
      </button>


    </>
  )
}

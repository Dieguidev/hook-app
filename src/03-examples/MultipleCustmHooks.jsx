import { useFetch } from "../hooks/useFetch"

export const MultipleCustmHooks = () => {

  const {data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/25')

  //* esta linea de codigo solo se coloca si la data es una arreglo
  //!!data: data como es undefined al negarlo dos veces, devuelve false, por lo tanto, data es false, por lo tanto, data[0] es undefined, por lo tanto, data[0].author y data[0].quote son undefined, por lo tanto, el console.log no se ejecuta
  // const {author, quote } = !!data && data[0]


  return (
    <>
      <h1>BreakingBad utils</h1>
      <hr />

      {
          isLoading ? (<div className="alert alert-info text-center">Loading</div> ): (
        <blockquote className="blockquote text-end">
          <img src={data.sprites.front_default} alt={data.name} />
          <p className="mb-1">{data.id}</p>
          <footer className="blockquote-footer">{data.name}</footer>
        </blockquote>)
      }

      <button className="btn btn-primary">Next quote</button>


    </>
  )
}

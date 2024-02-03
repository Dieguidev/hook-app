

export const Pokemon = ({image, name, id }) => {
  return (
    <blockquote className="blockquote text-end">
      <img src={image} alt={name} />
      <p className="mb-1">{id}</p>
      <footer className="blockquote-footer">{name}</footer>
    </blockquote>
  )
}

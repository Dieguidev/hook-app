import PropTypes from 'prop-types';

export const Pokemon = ({image, name, id }) => {
  return (
    <blockquote className="blockquote text-end">
      <img src={image} alt={name} />
      <p className="mb-1">{id}</p>
      <footer className="blockquote-footer">{name}</footer>
    </blockquote>
  )
}

Pokemon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

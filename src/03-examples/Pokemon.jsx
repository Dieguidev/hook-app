import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Pokemon = ({ image, name, id }) => {

  const pRef = useRef()
  const [boxSize, setboxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setboxSize({ height, width })
  }, [image])

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
        <img ref={pRef} src={image} alt={name} />
        <p className="mb-1">{id}</p>
        <footer  className="blockquote-footer">{name}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}

Pokemon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

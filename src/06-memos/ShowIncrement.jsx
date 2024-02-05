import { PropTypes } from 'prop-types';
import React from 'react';

export const ShowIncrement =React.memo (({increment}) => {

  console.log('me volvi a generar');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Incrementar
    </button>
  )
})


ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}

//declkarame un nombre para el componente, para que sea mas facil identificarlo.
ShowIncrement.displayName = 'ShowIncrement';

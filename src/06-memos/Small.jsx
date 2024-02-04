import { PropTypes } from 'prop-types';
import { memo } from 'react';


export const Small = memo(({ value }) => {

  console.log('Me volvi a dibujar');

  return (
    <small>{value}</small>
  )
})

//generame los proptypes
Small.propTypes = {
  value: PropTypes.number.isRequired
}

Small.displayName = 'Small';

import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
    const { name,surname, age, } = props;

  return (
    <div>
        
        {name} {surname} { age }

    </div>
  );
}

User.propType = { 
    name: PropTypes.string,
    age: PropTypes.number

};

export default User
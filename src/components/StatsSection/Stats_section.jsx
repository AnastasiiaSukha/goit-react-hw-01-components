import React from 'react';
import PropTypes from 'prop-types';

export const StatsSection=({ title, children })=> {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

StatsSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
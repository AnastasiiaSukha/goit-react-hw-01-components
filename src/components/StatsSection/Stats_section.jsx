import React from 'react';
import PropTypes from 'prop-types';
import css from './StatsSection.module.css'

export const StatsSection=({ title, children })=> {
  return (
    <div className={css.section}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

StatsSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}; 

// className={css.title}

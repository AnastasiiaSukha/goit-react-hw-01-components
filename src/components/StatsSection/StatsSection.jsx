import React from 'react';
import PropTypes from 'prop-types';
import { Section, Title } from './StatsSection.styled';

export const StatsSection=({ title, children })=> {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
}

StatsSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}; 

// className={css.title}

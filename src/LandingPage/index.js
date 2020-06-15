import React from 'react';
import mappings from './mappings';

import LandingPage from './Landing';

const Landing = () => {
  return <LandingPage listItems={mappings} />;
};

export default Landing;

import React from 'react';
import { BoldTemplate } from './components/BoldTemplate';
import { portfolioData } from './data/portfolioData';
import { colorScheme } from './data/colorScheme';

function App() {
  return <BoldTemplate data={portfolioData} colorScheme={colorScheme} />;
}

export default App;
import React from 'react';
import './App.css';

export interface Props {
  label: string;
}

const App: React.FC<Props> = ({ label }) => <h1>{label}</h1>;

export default App;

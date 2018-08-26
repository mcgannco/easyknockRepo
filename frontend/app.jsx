import React from 'react';
import ImportFormContainer from './components/formInput/input_container';
import TableOutputontainer from './components/tableOutput/output_container';
const App = () => (
  <div id="app">
    <div className="main-header">
      <h1>EasyKnockChallenge</h1>
    </div>

    <ImportFormContainer />
    <TableOutputontainer />
  </div>
);

export default App;

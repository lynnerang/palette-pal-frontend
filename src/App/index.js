import React from 'react';
import './_App.scss';
import Header from '../Header';
import SubHeader from '../SubHeader';
import PickerScreen from '../PickerScreen';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <main className="main">
        <PickerScreen />
        <Switch>
          {/* <Route exact path="/" component={PickerScreen} /> */}
          {/* <Route exact path="/" component={ProjectScreen} /> */}
          {/* <Route render={ErrorScreen} /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;

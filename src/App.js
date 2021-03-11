import React from "react";
import { Switch, Route} from 'react-router-dom';

const App = () => {
  // return (
    
  //   <>
  //     <h1>Welcome to React Parcel Micro App!</h1>
  //     <p>Hard to get more minimal than this React app.</p>
  //   </>
  // );
  
  return <Switch>
    <Route exact path="/">
      <h1>This is Home page</h1>
    </Route>
  </Switch>
};

export default App;
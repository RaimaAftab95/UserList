// import React from 'react';
// import UserList from './components/UserList';
// import AutoCounter from './AutoCounter';

// function App() {
//   return (
//     <div className="App">
//       <h1>React Hooks Practice Examples</h1>
//       <UserList /> 
//       <AutoCounter/>
//     </div>
//   );
// }

// export default App;
import React from "react";
import AppRouter from "./Router";
import { ThemeProvider } from "./contexts/ThemeContext";


const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;

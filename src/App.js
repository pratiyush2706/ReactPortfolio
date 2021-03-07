import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as ROUTES from './utils/routes';
import Home from './pages/Home';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
   <Switch>
     <Route exact path={ROUTES.HOME} component={Home} />
   </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import AddPage from './pages/Add'
import EditPage from './pages/Edit'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/add" >
          <AddPage />
        </Route>
        <Route path="/edit/:id" >
          <EditPage />
        </Route>        
        <Route path="/" >
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;

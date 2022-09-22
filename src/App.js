import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { publicRoutes } from '~/routes';
import Home from '~/pages/Home';
function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              {/* {publicRoutes.map((route,index) =>{
                const Page = route.component;
                return <Route key = {index} path = {route.path} element = {<Page/>}/>;
              })} */}
              <Route path='/' element = {<Home/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

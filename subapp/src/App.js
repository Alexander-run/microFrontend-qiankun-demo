import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import List from './components/List'
import StateFetch from './components/StateFetch'
import MyContext from './context'
import {initState} from './context/initState'
// import { Provider } from 'mobx-react'
// import stores from './store'

const App = () => {

  return (
    <MyContext.Provider value={initState}>
      <div className="App">
        <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/microApp1' : '/'}>
          <Routes>
            <Route path='/index' element={ <List /> }/>
            <Route path='/stateFetch' element={ <StateFetch /> }/>
          </Routes>
        </BrowserRouter>
      </div>
    </MyContext.Provider>
    
  );
}

export default App;

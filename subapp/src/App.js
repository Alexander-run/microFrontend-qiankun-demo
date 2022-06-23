import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import List from './components/List'
import StateFetch from './components/StateFetch'
import MyContext from './context'
import {initState} from './context/initState'
import logo from './logo192.png'
// import { Provider } from 'mobx-react'
// import stores from './store'

const App = () => {

  return (
    <MyContext.Provider value={initState}>
      <div className="App">
        <img alt="React logo" src={logo} />
        <h1>React Sub APP</h1>
        <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/reactSubApp' : '/'}>
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

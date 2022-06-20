import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Counter from './components/Counter'
const App = () => {

  return (
    <div className="App">
      <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/microApp1' : '/'}>
        <Routes>
          <Route path='/index' element={ <Counter /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './public-path'
import actions from './shared/actions'
// import { mainApp, MainApp } from './store/mainApp.ts'
let root = null
function render(props) {
  const { container } = props;
  if (props) {
    // 注入 actions 实例
    actions.setActions(props);
    console.log(props)
  }
  root = ReactDOM.createRoot( 
    container ? container.querySelector('#root') : document.getElementById('root')
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
// function initStore(props) {
//   // 将setGlobalState方法绑定到类MainApp静态属性上
//   MainApp.setGlobalState = props.setGlobalState ? props.setGlobalState : null

//   // 主应用状态变更同步到微应用
//   props.onGlobalStateChange &&
//   props.onGlobalStateChange(
//       (state, prev) => {
//           mainApp.initStore(state)
//           console.log('主应用状态变更，已同步至微应用',`from` ,prev, `to`, state)
//       }, true
//   )
// }

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework');
  render(props);
  // initStore(props)
}

export async function unmount(props) {
  console.log('react-app unmount')
  root.unmount()  
}
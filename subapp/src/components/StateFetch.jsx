import
  React, 
  { 
    useState, 
    useEffect,
    useContext
  } 
from 'react'
import { 
  Button,
  Input,
  Form
} from 'antd'
// import MyContext from '../context'
// import { observer, inject } from "mobx-react";

// import actions from "../shared/actions";
import {mainApp} from '../store/mainApp.ts'

const StateFetch = () => {
  const [globalState, setGlobalState] = useState({})
  useEffect(()=>{
    initGlobalData()
  },[])
  const initGlobalData = async () => {
    // actions.onGlobalStateChange((state, prevState) => {
    //   const newState = state
    //   setGlobalState(newState)
    // },true)
    const newState = mainApp.store
    setGlobalState(newState)
  }
  const handleSubmit = () => {
    // actions.setGlobalState(globalState)
    mainApp.setStore(globalState)
  }
  const printStore = () => {
    console.log(mainApp.store)
  }
  const changeUsername = (e) => {
    const newState = globalState
    newState.username = e.target.value
    setGlobalState(newState)
  }
  const changeToken = (e) => {
    const newState = globalState
    newState.token = e.target.value
    setGlobalState(newState)
  }

  return (
    <div key={globalState?.username}>
      <Form>
        <Form.Item label="Username:">
          <Input onChange={changeUsername} defaultValue={globalState?.username}/>
        </Form.Item>
        <Form.Item label="token:">
          <Input onChange={changeToken} defaultValue={globalState?.token}/>
        </Form.Item>
      </Form>
      <Button onClick={handleSubmit}>Change State</Button>
      <Button onClick={printStore}>Print State</Button>
    </div>
  )
}

export default StateFetch
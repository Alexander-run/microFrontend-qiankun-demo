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

import actions from "../shared/actions";

const StateFetch = () => {
  const [globalState, setGlobalState] = useState({})
  useEffect(()=>{
    initGlobalData()
  },[])
  const initGlobalData = async () => {
    actions.onGlobalStateChange((state, prevState) => {
      const newState = state
      setGlobalState(newState)
    },true)
  }
  const handleSubmit = () => {
    actions.setGlobalState(globalState)
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
      <Input onChange={changeUsername} defaultValue={globalState?.username}/>
      <Button onClick={handleSubmit}>Change State</Button>
    </div>
  )
}

export default StateFetch
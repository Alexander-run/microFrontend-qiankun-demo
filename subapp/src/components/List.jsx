import React, { useState, useEffect } from 'react'
import { 
  Button,
  Input,
  Card
} from 'antd'
import history from '../route/history'
import {
  getAllData
} from '../api/api'
import { CardsWrapper } from './CardsContainer.jsx'
import actions from "../shared/actions";
const { Search } = Input

const List = () => {
  let [dataList, setDataList] = useState([])
  let [subMessage, setSubMessage] = useState('')

  useEffect(() => {
    fetchDataList()
    initGlobalActions()
  }, [])
  const fetchDataList = (e) => {
    const params = {
      category: '',
      keyword: e || ''
    }
    getAllData(params).then(res => {
      setDataList(res.data)
    })
  }

  const initGlobalActions = () => {
    // actions.onGlobalStateChange(state => {
    //   const { message } = state;
    //   setSubMessage(message)
    // }, true);
  }
  const changeGlobalState = () => {
    // actions.setGlobalState({
    //   message: '一条来自子应用的消息'
    // })
  }
  const handleRoute = () => {
    history.push(`/microApp1/stateFetch`)
  }
  const handleSearch = (e) => {
    fetchDataList(e)
  }
  const handleSetMessage = () => {
    actions.setGlobalState({
      message: '一条来自子应用的消息'
    })
  }

  return (
    <>
      <Button type='primary' onClick={handleSetMessage}>Send a message from Sub app</Button>
      <br/><br/>
      <Button type='primary' onClick={handleRoute}>Route to another page</Button>
      <br/><br/>
      <Search placeholder='search key here' onSearch={handleSearch} />
      <br/><br/>
      <CardsWrapper className='cards-container'>
        {dataList.map(item => {
          return (
            <Card title={item.title} style={{ width: 260 }}></Card>
          )
        })}
      </CardsWrapper>
    </>
  )
}

export default List

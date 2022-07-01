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
  const fetchDataList = async (e) => {
    const params = {
      category: '',
      keyword: e || ''
    }
    // getAllData(params).then(res => {
    //   setDataList(res.data)
    // })
    const { data } = await getAllData(params)
    const categories = {}
    data.forEach( _ => {
      if (!categories.hasOwnProperty(_.category)) {
        categories[_.category] = []
      }
      categories[_.category].push(_)
    });
    setDataList(categories)
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
    history.push(`/reactSubApp/stateFetch`)
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
      <br/><br/>
      <Button type='primary' onClick={handleRoute}>Route to another page</Button>
      <br/><br/>
      <Search placeholder='search api here' onSearch={handleSearch} />
      <br/><br/>
      <CardsWrapper className='cards-container'>
        {Object.keys(dataList).map(key=>{
          return (
            <div className='cate-container'>
              <div className='title'>{key}</div>
              <div>
                {dataList[key].map(item=>{
                  return(
                    <Card key={item.title} className='card-item' title={item.title}>
                      <p>{item.apiVO.docUrl}</p>
                    </Card>
                  )
                })}
              </div>
            </div>
          )
        })}
      </CardsWrapper>
    </>
  )
}

export default List

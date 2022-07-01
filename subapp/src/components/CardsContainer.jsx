import styled from 'styled-components'

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .cate-container {
    .title {
      margin: 24px 0;
      font-size: 30px;
      font-weight: bold;
    }
    .card-item {
      float: left;
      margin: 8px;
      border-radius: 12px;
      width: 200px;
      height: 200px;
      word-break: break-all;
    }
  }
`

export {
  CardsWrapper
}
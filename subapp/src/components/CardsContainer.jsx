import styled from 'styled-components'

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  .card-item {
    margin: 8px;
    border-radius: 12px;
    width: 200px;
    word-break: break-all;
  }
`

export {
  CardsWrapper
}
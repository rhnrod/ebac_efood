import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../../components/Tag/styles'

export const ProductContainer = styled.div`
  padding-top: 56px;
  padding-bottom: 120px;
  width: 100%;
  display: flex;
`

export const ListContainer = styled.div`
  height: fit-content;
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`

export const Modal = styled.div`
  position: fixed;
  display: none;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    content: '';
  }

  &.visible {
    display: flex;
  }
`

export const ModalContainer = styled.div`
  position: relative;
  display: none;
  margin: 490px auto 0;
  width: 1024px;
  height: 344px;
  background-color: ${cores.primary};
  color: ${cores.secondary};
  padding: 32px;
  gap: 24px;
  font-weight: 14px;
  z-index: 1;

  &.visible {
    display: flex;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  ${TagContainer} {
    background-color: ${cores.secondary};
    color: ${cores.primary};
    width: 218px;
    height: 24px;
    padding: 4px 7px;
    text-align: center;
    font-weight: bold;
    line-height: 16px;
  }
`

export const ModalDescription = styled.div`
  div:nth-child(3) {
    margin: 16px 0;
    height: 176px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    position: absolute;
    top: 8px;
    right: 8px;

    width: 16px;
    height: 16px;

    cursor: pointer;
  }
`

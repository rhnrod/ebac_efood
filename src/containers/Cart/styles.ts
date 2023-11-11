import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../../components/Tag/styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: ${cores.secondary};

  display: none;
  justify-content: flex-end;

  &.is-visible {
    display: flex;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
  }
`

export const Sidebar = styled.aside`
  width: 360px;
  height: 100%;
  background-color: ${cores.primary};
  z-index: 1;
  padding: 32px 8px;

  ${TagContainer} {
    width: 100%;
    color: ${cores.primary};
    background-color: ${cores.secondary};
    text-align: center;
    font-weight: bold;
    line-height: 16px;
    font-size: 14px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  position: relative;
  background-color: ${cores.secondary};
  height: 100px;
  width: 344px;
  gap: 8px;
  padding: 8px;
  margin-bottom: 16px;

  h3 {
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    color: ${cores.primary};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${cores.primary};
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;

    &:last-child {
      width: 16px;
      height: 16px;
      position: absolute;
      bottom: 8px;
      right: 8px;
    }
  }
`

export const Values = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 8px 16px;
  font-weight: bold;

  p {
    line-height: 16px;
    font-size: 14px;
  }
`

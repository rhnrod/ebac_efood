import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 320px;
  height: fit-content;
  background-color: ${cores.primary};
  color: ${cores.secondary};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  div {
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 16.41px;
    height: 24px;
    width: 100%;
    cursor: pointer;

    ${TagContainer} {
      background-color: ${cores.secondary};
      color: ${cores.primary};
      display: flex;
      justify-content: center;
    }
  }
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
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
  color: ${cores.white};
  padding: 32px;
  gap: 24px;
  font-weight: 14px;
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    width: 640px;
    margin-top: 280px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 120px;
    width: 80%;
    flex-direction: column;
    width: 344px;
    height: fit-content;
    gap: 8px;

    h3 {
      text-align: center;
    }

    p {
      text-align: justify;
      margin-bottom: 8px;
    }
  }

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
    line-height: 21.09px;
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
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;

    @media (max-width: ${breakpoints.desktop}) {
      display: flex;
      width: 100%;
      justify-content: center;

      p {
        margin: 0;
      }
    }
  }
`

export const ModalDescription = styled.div`
  div:nth-child(3) {
    margin: 16px 0;
    height: 176px;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${breakpoints.desktop}) {
      height: fit-content;
    }
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

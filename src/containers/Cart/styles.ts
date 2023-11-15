import styled from 'styled-components'
import { cores } from '../../styles'

type RowProps = {
  small?: boolean
}

type InputProps = {
  maxWidth?: string
}

type TextContainerProps = {
  textAlign?: string
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: ${cores.secondary};

  display: none;
  justify-content: flex-end;

  &.is-open {
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
export const PaymentContainer = styled.div`
  display: none;

  &.visible {
    display: block;
  }
`

export const TextContainer = styled.div<TextContainerProps>`
  display: flex;
  flex-direction: column;
  height: 286px;
  margin-top: 16px;
  justify-content: space-between;
  text-align: ${(props) => props.textAlign ?? 'left'};

  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const Sidebar = styled.aside`
  width: 360px;
  height: 100%;
  background-color: ${cores.primary};
  z-index: 1;
  padding: 32px 8px;

  form {
    margin-top: 32px;

    h3 {
      font-size: 16px;
      font-weight: bold;
      line-height: 18.75px;
      margin-bottom: 16px;
    }
  }
`

export const TagGroup = styled.div`
  margin-top: 24px;
`

export const InputGroup = styled.div<InputProps>`
  margin-bottom: 8px;
  max-width: ${(props) => props.maxWidth ?? 'auto'};
  position: relative;

  label,
  input {
    font-size: 14px;
    font-weight: bold;
    line-height: 16.41px;
  }

  input {
    width: 100%;
    color: ${cores.black};
    background-color: ${cores.secondary};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.secondary};
    margin-top: 8px;

    &:focus {
      outline: none;
    }
  }

  small {
    display: none;
    position: absolute;
    right: 4px;
    top: 26px;
    color: ${cores.red};
    font-weight: bold;

    &.error {
      display: block;
    }
  }
`

export const Row = styled.div<RowProps>`
  display: flex;
  flex: auto;
  gap: ${(props) => (props.small ? '30px' : '34px')};
`

export const CartContainer = styled.ul`
  max-height: 680px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
`

export const CartItem = styled.li`
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
  }
`

export const Button = styled.button`
  position: absolute;
  display: flex;
  bottom: 8px;
  right: 8px;
  border: none;
  background-color: transparent;

  img {
    cursor: pointer;
    width: 16px;
    height: 16px;
    z-index: 1;
  }
`

export const TagButton = styled.button`
  width: 100%;
  border: none;
  color: ${cores.primary};
  background-color: ${cores.secondary};
  text-align: center;
  font-weight: bold;
  line-height: 16px;
  font-size: 14px;
  cursor: pointer;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
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

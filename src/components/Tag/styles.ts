import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.primary};
  color: ${cores.secondary};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  line-height: ${(props) => (props.size === 'big' ? '16px' : '14px')};
  padding: 6px 4px;
  font-weight: bold;
  display: inline-block;
  align-items: center;

  a {
    color: ${cores.secondary};
  }
`

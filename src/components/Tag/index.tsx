import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: JSX.Element | string
  onClick?: () => void
}

const Tag = ({ children, size = 'small', onClick }: Props) => (
  <TagContainer size={size} onClick={onClick}>
    {children}
  </TagContainer>
)

export default Tag

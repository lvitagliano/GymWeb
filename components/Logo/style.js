import styled , {css} from 'styled-components'

export const Svg = styled.svg`
  display:flex;
  align-self:center;
  width: 220px;
  margin-bottom: 15px;
  margin-left: -10px;
  transition: 0.5s;
  ${props => props.red && css`
  {
    background: #ccc;
    border-radius: 60px;
    transform:translateX(250px)
  }
  `}
  /* &:hover {
    transform:scale(2);
    transform:rotate(280deg)
    transform:translateX(250px)
    transform:rotateY(360deg)
    } */
`

export const Button = styled.button`
  display:flex;
`

export const Image = styled.img`
  /* box-shadow: 0px 10px 14px rgba(0, 0, 0, .2); */
  overflow: hidden;
  object-fit: cover;
  width: 95%;
  z-index: 999;
`


import styled, { css, keyframes } from 'styled-components'

const fadeInJKeyFrames = keyframes`
from {
  filter: blur(5px);
  opacity: 0;
}

to {
  filter: blur(5px);
  opacity: 1;
}
`
// creo una animacion pudiendole pasar parametro tipo objeto
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
css`animation: ${time} ${fadeInJKeyFrames} ${type};`

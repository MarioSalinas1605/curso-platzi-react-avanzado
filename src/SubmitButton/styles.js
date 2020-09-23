import styled from 'styled-components'

export const Button = styled.button`
display: block;
width: 100%;
text-align: center;

background: #8d00ff;
border-radius: 3px;
color: #fff;
height: 32px;

&[disabled] {
   opacity: .3; 
}
`

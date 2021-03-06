import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 50px;
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    z-index: 100;
`
export const Link = styled(LinkRouter)`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    text-decoration: none;
    color: #888;
    width: 100%;

    &[aria-current] {
        color: #000;

        &:after {
            content: '.';
            position: absolute;
            bottom: 8px;
            font-size: 34px;
            line-height: 20px;
        }
    }
`

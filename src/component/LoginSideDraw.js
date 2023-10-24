import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import mobile from './Mobile';

const Aside = styled.aside`
    position: fixed;
    // right: 0;
    top: 0;
    z-index: 990;
    height: 100vh;
    width: 50%;
    // background: none;
    // opacity: 0.5;
    position: fixed;
    left: 0;
    background: rgba(0, 0, 0, 0.75);
    // z-index: 10;
    // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    ${mobile({ width: '100%', height: '100%', boxShadow: 'none', position: 'relative', overflowY: 'scroll', zIndex: 1000, display: 'none' })};
`

function LoginSideDraw(props) {
    const content = <Aside onClick={props.onClick}>{props.children}</Aside>;
    return (
        ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
    )
}

export default LoginSideDraw
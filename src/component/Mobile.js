import { css } from 'styled-components'

function mobile(props) {
    return (
        css`
        @media only screen and (max-width: 768px) {
        ${props}
    };
    `
    )
};

export function biggestscreen(props) {
    return (
        css`
        @media only screen and (min-width: 769px) {
        ${props}
    };
    `
    )
}

export default mobile
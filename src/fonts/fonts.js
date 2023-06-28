import { createGlobalStyle } from 'styled-components';
import cocogoose from '../fonts/cocogoose_trial-webfont.woff';
import cocogoose2 from '../fonts/cocogoose_trial-webfont.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${cocogoose2}) format('woff2'),
        url(${cocogoose}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
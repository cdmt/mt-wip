
import Mic32RdLt from './Mic32Rd/mic32newrd-lt.woff'
import Mic32RdRg from './Mic32Rd/mic32newrd-rg.woff'
import Mic32RdMd from './Mic32Rd/mic32newrd-md.woff'
import Mic32RdBd from './Mic32Rd/mic32newrd-bd.woff'
import Mic32RdLtIt from './Mic32Rd/mic32newrd-ltit.woff'
import Mic32RdRgIt from './Mic32Rd/mic32newrd-rgit.woff'
import Mic32RdMdIt from './Mic32Rd/mic32newrd-mdit.woff'
import Mic32RdBdIt from './Mic32Rd/mic32newrd-bdit.woff'

export const Mic32Rd = `
    @font-face {
        font-family: 'Mic32Rd';
        font-style: normal;
        font-weight: 300;
        src: local('Mic32Rd'), local('Mic32Rd'), 
        url(${Mic32RdLt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32Rd';
        font-style: normal;
        font-weight: 400;
        src: local('Mic32Rd'), local('Mic32Rd'),
        url(${Mic32RdRg}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32Rd';
        font-style: normal;
        font-weight: 500;
        src: local('Mic32Rd'), local('Mic32Rd'),
        url(${Mic32RdMd}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32Rd';
        font-style: normal;
        font-weight: 700;
        src: local('Mic32Rd'), local('Mic32Rd'),
        url(${Mic32RdBd}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32Rd';
        font-style: italic;
        font-weight: 300;
        src: local('Mic32Rd'), local('Mic32Rd'),
        url(${Mic32RdLtIt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32Rd';
        font-style: italic;
        font-weight: 400;
        src: local('Mic32Rd'), local('Mic32Rd'),
        url(${Mic32RdRgIt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32Rd';
        font-style: italic;
        font-weight: 500;
        src: local('Mic32Rd'), local('Mic32Rd'),
        url(${Mic32RdMdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32Rd';
        font-style: italic;
        font-weight: 700;
        src: local('Mic32Rd'), local('Mic32Rd'),
        url(${Mic32RdBdIt}) format('truetype')
    }
`
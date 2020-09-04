
import Mic32StLt from './Mic32St/mic32newst-lt.woff'
import Mic32StRg from './Mic32St/mic32newst-rg.woff'
import Mic32StMd from './Mic32St/mic32newst-md.woff'
import Mic32StBd from './Mic32St/mic32newst-bd.woff'
import Mic32StLtIt from './Mic32St/mic32newst-ltit.woff'
import Mic32StRgIt from './Mic32St/mic32newst-rgit.woff'
import Mic32StMdIt from './Mic32St/mic32newst-mdit.woff'
import Mic32StBdIt from './Mic32St/mic32newst-bdit.woff'

export const Mic32St = `
    @font-face {
        font-family: 'Mic32St';
        font-style: normal;
        font-weight: 300;
        src: local('Mic32St'), local('Mic32St'), 
        url(${Mic32StLt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32St';
        font-style: normal;
        font-weight: 400;
        src: local('Mic32St'), local('Mic32St'),
        url(${Mic32StRg}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32St';
        font-style: normal;
        font-weight: 500;
        src: local('Mic32St'), local('Mic32St'),
        url(${Mic32StMd}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32St';
        font-style: normal;
        font-weight: 700;
        src: local('Mic32St'), local('Mic32St'),
        url(${Mic32StBd}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32St';
        font-style: italic;
        font-weight: 300;
        src: local('Mic32St'), local('Mic32St'),
        url(${Mic32StLtIt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32St';
        font-style: italic;
        font-weight: 400;
        src: local('Mic32St'), local('Mic32St'),
        url(${Mic32StRgIt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32St';
        font-style: italic;
        font-weight: 500;
        src: local('Mic32St'), local('Mic32St'),
        url(${Mic32StMdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32St';
        font-style: italic;
        font-weight: 700;
        src: local('Mic32St'), local('Mic32St'),
        url(${Mic32StBdIt}) format('truetype')
    }
`

import Mic32Lt from './Mic32/mic32new-lt.woff'
import Mic32Rg from './Mic32/mic32new-rg.woff'
import Mic32Md from './Mic32/mic32new-md.woff'
import Mic32Bd from './Mic32/mic32new-bd.woff'
import Mic32LtIt from './Mic32/mic32new-ltit.woff'
import Mic32RgIt from './Mic32/mic32new-rgit.woff'
import Mic32MdIt from './Mic32/mic32new-mdit.woff'
import Mic32BdIt from './Mic32/mic32new-bdit.woff'

export const Mic32 = `
    @font-face {
        font-family: 'Mic32';
        font-style: normal;
        font-weight: 300;
        src: local('Mic32'), local('Mic32'), 
        url(${Mic32Lt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32';
        font-style: normal;
        font-weight: 400;
        src: local('Mic32'), local('Mic32'),
        url(${Mic32Rg}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32';
        font-style: normal;
        font-weight: 500;
        src: local('Mic32'), local('Mic32'),
        url(${Mic32Md}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32';
        font-style: normal;
        font-weight: 700;
        src: local('Mic32'), local('Mic32'),
        url(${Mic32Bd}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32';
        font-style: italic;
        font-weight: 300;
        src: local('Mic32'), local('Mic32'),
        url(${Mic32LtIt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32';
        font-style: italic;
        font-weight: 400;
        src: local('Mic32'), local('Mic32'),
        url(${Mic32RgIt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32';
        font-style: italic;
        font-weight: 500;
        src: local('Mic32'), local('Mic32'),
        url(${Mic32MdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Mic32';
        font-style: italic;
        font-weight: 700;
        src: local('Mic32'), local('Mic32'),
        url(${Mic32BdIt}) format('truetype')
    }
`
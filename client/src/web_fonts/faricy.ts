
import FaricyLt from './Faricy/faricynew-lt.woff'
import FaricyRg from './Faricy/faricynew-rg.woff'
import FaricyMd from './Faricy/faricynew-md.woff'
import FaricyBd from './Faricy/faricynew-bd.woff'
import FaricyLtIt from './Faricy/faricynew-ltit.woff'
import FaricyRgIt from './Faricy/faricynew-rgit.woff'
import FaricyMdIt from './Faricy/faricynew-mdit.woff'
import FaricyBdIt from './Faricy/faricynew-bdit.woff'

export const Faricy = `
    @font-face {
        font-family: 'Faricy';
        font-style: normal;
        font-weight: 300;
        src: local('Faricy'), local('Faricy'), 
        url(${FaricyLt}) format('truetype')
    }
    @font-face {
        font-family: 'Faricy';
        font-style: normal;
        font-weight: 400;
        src: local('Faricy'), local('Faricy'),
        url(${FaricyRg}) format('truetype')
    }
    @font-face {
        font-family: 'Faricy';
        font-style: normal;
        font-weight: 500;
        src: local('Faricy'), local('Faricy'),
        url(${FaricyMd}) format('truetype')
    }
    @font-face {
        font-family: 'Faricy';
        font-style: normal;
        font-weight: 700;
        src: local('Faricy'), local('Faricy'),
        url(${FaricyBd}) format('truetype')
    }
    @font-face {
        font-family: 'Faricy';
        font-style: italic;
        font-weight: 300;
        src: local('Faricy'), local('Faricy'),
        url(${FaricyLtIt}) format('truetype')
    }
    @font-face {
        font-family: 'Faricy';
        font-style: italic;
        font-weight: 400;
        src: local('Faricy'), local('Faricy'),
        url(${FaricyRgIt}) format('truetype')
    }
    @font-face {
        font-family: 'Faricy';
        font-style: italic;
        font-weight: 500;
        src: local('Faricy'), local('Faricy'),
        url(${FaricyMdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Faricy';
        font-style: italic;
        font-weight: 700;
        src: local('Faricy'), local('Faricy'),
        url(${FaricyBdIt}) format('truetype')
    }
`
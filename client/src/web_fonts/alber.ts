
import AlberLt from './Alber/albernew-lt.woff'
import AlberRg from './Alber/albernew-rg.woff'
import AlberMd from './Alber/albernew-md.woff'
import AlberBd from './Alber/albernew-bd.woff'
import AlberLtIt from './Alber/albernew-ltit.woff'
import AlberRgIt from './Alber/albernew-rgit.woff'
import AlberMdIt from './Alber/albernew-mdit.woff'
import AlberBdIt from './Alber/albernew-bdit.woff'

export const Alber = `
    @font-face {
        font-family: 'Alber';
        font-style: normal;
        font-weight: 300;
        src: local('Alber'), local('Alber'), 
        url(${AlberLt}) format('truetype')
    }
    @font-face {
        font-family: 'Alber';
        font-style: normal;
        font-weight: 400;
        src: local('Alber'), local('Alber'),
        url(${AlberRg}) format('truetype')
    }
    @font-face {
        font-family: 'Alber';
        font-style: normal;
        font-weight: 500;
        src: local('Alber'), local('Alber'),
        url(${AlberMd}) format('truetype')
    }
    @font-face {
        font-family: 'Alber';
        font-style: normal;
        font-weight: 700;
        src: local('Alber'), local('Alber'),
        url(${AlberBd}) format('truetype')
    }
    @font-face {
        font-family: 'Alber';
        font-style: italic;
        font-weight: 300;
        src: local('Alber'), local('Alber'),
        url(${AlberLtIt}) format('truetype')
    }
    @font-face {
        font-family: 'Alber';
        font-style: italic;
        font-weight: 400;
        src: local('Alber'), local('Alber'),
        url(${AlberRgIt}) format('truetype')
    }
    @font-face {
        font-family: 'Alber';
        font-style: italic;
        font-weight: 500;
        src: local('Alber'), local('Alber'),
        url(${AlberMdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Alber';
        font-style: italic;
        font-weight: 700;
        src: local('Alber'), local('Alber'),
        url(${AlberBdIt}) format('truetype')
    }
`
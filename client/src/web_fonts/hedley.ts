
import HedleyLt from './Hedley/hedleynew-lt.woff'
import HedleyRg from './Hedley/hedleynew-rg.woff'
import HedleyMd from './Hedley/hedleynew-md.woff'
import HedleyBd from './Hedley/hedleynew-bd.woff'
import HedleyLtIt from './Hedley/hedleynew-ltit.woff'
import HedleyRgIt from './Hedley/hedleynew-rgit.woff'
import HedleyMdIt from './Hedley/hedleynew-mdit.woff'
import HedleyBdIt from './Hedley/hedleynew-bdit.woff'

export const Hedley = `
    @font-face {
        font-family: 'Hedley';
        font-style: normal;
        font-weight: 300;
        src: local('Hedley'), local('Hedley'), 
        url(${HedleyLt}) format('truetype')
    }
    @font-face {
        font-family: 'Hedley';
        font-style: normal;
        font-weight: 400;
        src: local('Hedley'), local('Hedley'),
        url(${HedleyRg}) format('truetype')
    }
    @font-face {
        font-family: 'Hedley';
        font-style: normal;
        font-weight: 500;
        src: local('Hedley'), local('Hedley'),
        url(${HedleyMd}) format('truetype')
    }
    @font-face {
        font-family: 'Hedley';
        font-style: normal;
        font-weight: 700;
        src: local('Hedley'), local('Hedley'),
        url(${HedleyBd}) format('truetype')
    }
    @font-face {
        font-family: 'Hedley';
        font-style: italic;
        font-weight: 300;
        src: local('Hedley'), local('Hedley'),
        url(${HedleyLtIt}) format('truetype')
    }
    @font-face {
        font-family: 'Hedley';
        font-style: italic;
        font-weight: 400;
        src: local('Hedley'), local('Hedley'),
        url(${HedleyRgIt}) format('truetype')
    }
    @font-face {
        font-family: 'Hedley';
        font-style: italic;
        font-weight: 500;
        src: local('Hedley'), local('Hedley'),
        url(${HedleyMdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Hedley';
        font-style: italic;
        font-weight: 700;
        src: local('Hedley'), local('Hedley'),
        url(${HedleyBdIt}) format('truetype')
    }
`
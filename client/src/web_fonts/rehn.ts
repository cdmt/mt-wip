
import RehnTh from './Rehn/rehn-th.woff'
import RehnLt from './Rehn/rehn-lt.woff'
import RehnRg from './Rehn/rehn-rg.woff'
import RehnMd from './Rehn/rehn-md.woff'
import RehnBd from './Rehn/rehn-bd.woff'
import RehnExBd from './Rehn/rehn-exbd.woff'
import RehnThIt from './Rehn/rehn-thit.woff'
import RehnLtIt from './Rehn/rehn-ltit.woff'
import RehnRgIt from './Rehn/rehn-rgit.woff'
import RehnMdIt from './Rehn/rehn-mdit.woff'
import RehnBdIt from './Rehn/rehn-bdit.woff'
import RehnExBdIt from './Rehn/rehn-exbdit.woff'

export const Rehn = `
    @font-face {
        font-family: 'Rehn';
        font-style: normal;
        font-weight: 100;
        src: local('Rehn'), local('Rehn'), 
        url(${RehnTh}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: normal;
        font-weight: 300;
        src: local('Rehn'), local('Rehn'), 
        url(${RehnLt}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: normal;
        font-weight: 400;
        src: local('Rehn'), local('Rehn'),
        url(${RehnRg}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: normal;
        font-weight: 500;
        src: local('Rehn'), local('Rehn'),
        url(${RehnMd}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: normal;
        font-weight: 700;
        src: local('Rehn'), local('Rehn'),
        url(${RehnBd}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: normal;
        font-weight: 900;
        src: local('Rehn'), local('Rehn'),
        url(${RehnExBd}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: italic;
        font-weight: 100;
        src: local('Rehn'), local('Rehn'),
        url(${RehnThIt}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: italic;
        font-weight: 300;
        src: local('Rehn'), local('Rehn'),
        url(${RehnLtIt}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: italic;
        font-weight: 400;
        src: local('Rehn'), local('Rehn'),
        url(${RehnRgIt}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: italic;
        font-weight: 500;
        src: local('Rehn'), local('Rehn'),
        url(${RehnMdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: italic;
        font-weight: 700;
        src: local('Rehn'), local('Rehn'),
        url(${RehnBdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Rehn';
        font-style: italic;
        font-weight: 900;
        src: local('Rehn'), local('Rehn'),
        url(${RehnExBdIt}) format('truetype')
    }
`
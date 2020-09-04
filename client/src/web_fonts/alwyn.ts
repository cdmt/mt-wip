
import AlwynTh from './Alwyn/alwynnew-th.woff'
import AlwynLt from './Alwyn/alwynnew-lt.woff'
import AlwynRg from './Alwyn/alwynnew-rg.woff'
import AlwynMd from './Alwyn/alwynnew-md.woff'
import AlwynBd from './Alwyn/alwynnew-bd.woff'
import AlwynThIt from './Alwyn/alwynnew-thit.woff'
import AlwynLtIt from './Alwyn/alwynnew-ltit.woff'
import AlwynRgIt from './Alwyn/alwynnew-rgit.woff'
import AlwynMdIt from './Alwyn/alwynnew-mdit.woff'
import AlwynBdIt from './Alwyn/alwynnew-bdit.woff'

export const Alwyn = `
    @font-face {
        font-family: 'Alwyn';
        font-style: normal;
        font-weight: 100;
        src: local('Alwyn'), local('Alwyn'), 
        url(${AlwynTh}) format('truetype')
    }
    @font-face {
        font-family: 'Alwyn';
        font-style: normal;
        font-weight: 300;
        src: local('Alwyn'), local('Alwyn'), 
        url(${AlwynLt}) format('truetype')
    }
    @font-face {
        font-family: 'Alwyn';
        font-style: normal;
        font-weight: 400;
        src: local('Alwyn'), local('Alwyn'),
        url(${AlwynRg}) format('truetype')
    }
    @font-face {
        font-family: 'Alwyn';
        font-style: normal;
        font-weight: 500;
        src: local('Alwyn'), local('Alwyn'),
        url(${AlwynMd}) format('truetype')
    }
    @font-face {
        font-family: 'Alwyn';
        font-style: normal;
        font-weight: 700;
        src: local('Alwyn'), local('Alwyn'),
        url(${AlwynBd}) format('truetype')
    }
    @font-face {
        font-family: 'Alwyn';
        font-style: italic;
        font-weight: 100;
        src: local('Alwyn'), local('Alwyn'),
        url(${AlwynThIt}) format('truetype')
    }
    @font-face {
        font-family: 'Alwyn';
        font-style: italic;
        font-weight: 300;
        src: local('Alwyn'), local('Alwyn'),
        url(${AlwynLtIt}) format('truetype')
    }
    @font-face {
        font-family: 'Alwyn';
        font-style: italic;
        font-weight: 400;
        src: local('Alwyn'), local('Alwyn'),
        url(${AlwynRgIt}) format('truetype')
    }
    @font-face {
        font-family: 'Alwyn';
        font-style: italic;
        font-weight: 500;
        src: local('Alwyn'), local('Alwyn'),
        url(${AlwynMdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Alwyn';
        font-style: italic;
        font-weight: 700;
        src: local('Alwyn'), local('Alwyn'),
        url(${AlwynBdIt}) format('truetype')
    }
`
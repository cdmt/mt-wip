import BaleMonoTh from './BaleMono/bale_mono-th.woff'
import BaleMonoLt from './BaleMono/bale_mono-lt.woff'
import BaleMonoRg from './BaleMono/bale_mono-rg.woff'
import BaleMonoMd from './BaleMono/bale_mono-md.woff'
import BaleMonoBd from './BaleMono/bale_mono-bd.woff'
import BaleMonoThIt from './BaleMono/bale_mono-thit.woff'
import BaleMonoLtIt from './BaleMono/bale_mono-ltit.woff'
import BaleMonoRgIt from './BaleMono/bale_mono-rgit.woff'
import BaleMonoMdIt from './BaleMono/bale_mono-mdit.woff'
import BaleMonoBdIt from './BaleMono/bale_mono-bdit.woff'

export const BaleMono = `
    @font-face {
        font-family: 'BaleMono';
        font-style: normal;
        font-weight: 100;
        src: local('BaleMono'), local('BaleMono'), 
        url(${BaleMonoTh}) format('truetype')
    }
    @font-face {
        font-family: 'BaleMono';
        font-style: normal;
        font-weight: 300;
        src: local('BaleMono'), local('BaleMono'), 
        url(${BaleMonoLt}) format('truetype')
    }
    @font-face {
        font-family: 'BaleMono';
        font-style: normal;
        font-weight: 400;
        src: local('BaleMono'), local('BaleMono'),
        url(${BaleMonoRg}) format('truetype')
    }
    @font-face {
        font-family: 'BaleMono';
        font-style: normal;
        font-weight: 500;
        src: local('BaleMono'), local('BaleMono'),
        url(${BaleMonoMd}) format('truetype')
    }
    @font-face {
        font-family: 'BaleMono';
        font-style: normal;
        font-weight: 700;
        src: local('BaleMono'), local('BaleMono'),
        url(${BaleMonoBd}) format('truetype')
    }
    @font-face {
        font-family: 'BaleMono';
        font-style: italic;
        font-weight: 100;
        src: local('BaleMono'), local('BaleMono'),
        url(${BaleMonoThIt}) format('truetype')
    }
    @font-face {
        font-family: 'BaleMono';
        font-style: italic;
        font-weight: 300;
        src: local('BaleMono'), local('BaleMono'),
        url(${BaleMonoLtIt}) format('truetype')
    }
    @font-face {
        font-family: 'BaleMono';
        font-style: italic;
        font-weight: 400;
        src: local('BaleMono'), local('BaleMono'),
        url(${BaleMonoRgIt}) format('truetype')
    }
    @font-face {
        font-family: 'BaleMono';
        font-style: italic;
        font-weight: 500;
        src: local('BaleMono'), local('BaleMono'),
        url(${BaleMonoMdIt}) format('truetype')
    }
    @font-face {
        font-family: 'BaleMono';
        font-style: italic;
        font-weight: 700;
        src: local('BaleMono'), local('BaleMono'),
        url(${BaleMonoBdIt}) format('truetype')
    }
`
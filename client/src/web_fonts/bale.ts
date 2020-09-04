import BaleTh from './Bale/bale-th.woff'
import BaleLt from './Bale/bale-lt.woff'
import BaleRg from './Bale/bale-rg.woff'
import BaleMd from './Bale/bale-md.woff'
import BaleBd from './Bale/bale-bd.woff'
import BaleThIt from './Bale/bale-thit.woff'
import BaleLtIt from './Bale/bale-ltit.woff'
import BaleRgIt from './Bale/bale-rgit.woff'
import BaleMdIt from './Bale/bale-mdit.woff'
import BaleBdIt from './Bale/bale-bdit.woff'

export const Bale = `
    @font-face {
        font-family: 'Bale';
        font-style: normal;
        font-weight: 100;
        src: local('Bale'), local('Bale'), 
        url(${BaleTh}) format('truetype')
    }
    @font-face {
        font-family: 'Bale';
        font-style: normal;
        font-weight: 300;
        src: local('Bale'), local('Bale'), 
        url(${BaleLt}) format('truetype')
    }
    @font-face {
        font-family: 'Bale';
        font-style: normal;
        font-weight: 400;
        src: local('Bale'), local('Bale'),
        url(${BaleRg}) format('truetype')
    }
    @font-face {
        font-family: 'Bale';
        font-style: normal;
        font-weight: 500;
        src: local('Bale'), local('Bale'),
        url(${BaleMd}) format('truetype')
    }
    @font-face {
        font-family: 'Bale';
        font-style: normal;
        font-weight: 700;
        src: local('Bale'), local('Bale'),
        url(${BaleBd}) format('truetype')
    }
    @font-face {
        font-family: 'Bale';
        font-style: italic;
        font-weight: 100;
        src: local('Bale'), local('Bale'),
        url(${BaleThIt}) format('truetype')
    }
    @font-face {
        font-family: 'Bale';
        font-style: italic;
        font-weight: 300;
        src: local('Bale'), local('Bale'),
        url(${BaleLtIt}) format('truetype')
    }
    @font-face {
        font-family: 'Bale';
        font-style: italic;
        font-weight: 400;
        src: local('Bale'), local('Bale'),
        url(${BaleRgIt}) format('truetype')
    }
    @font-face {
        font-family: 'Bale';
        font-style: italic;
        font-weight: 500;
        src: local('Bale'), local('Bale'),
        url(${BaleMdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Bale';
        font-style: italic;
        font-weight: 700;
        src: local('Bale'), local('Bale'),
        url(${BaleBdIt}) format('truetype')
    }
`
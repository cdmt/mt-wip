import DepotTh from './Depot/depotnew-th.woff'
import DepotLt from './Depot/depotnew-lt.woff'
import DepotRg from './Depot/depotnew-rg.woff'
import DepotMd from './Depot/depotnew-md.woff'
import DepotBd from './Depot/depotnew-bd.woff'
import DepotThIt from './Depot/depotnew-thit.woff'
import DepotLtIt from './Depot/depotnew-ltit.woff'
import DepotRgIt from './Depot/depotnew-rgit.woff'
import DepotMdIt from './Depot/depotnew-mdit.woff'
import DepotBdIt from './Depot/depotnew-bdit.woff'

export const Depot = `
    @font-face {
        font-family: 'Depot';
        font-style: normal;
        font-weight: 100;
        src: local('Depot'), local('Depot'), 
        url(${DepotTh}) format('truetype')
    }
    @font-face {
        font-family: 'Depot';
        font-style: normal;
        font-weight: 300;
        src: local('Depot'), local('Depot'), 
        url(${DepotLt}) format('truetype')
    }
    @font-face {
        font-family: 'Depot';
        font-style: normal;
        font-weight: 400;
        src: local('Depot'), local('Depot'),
        url(${DepotRg}) format('truetype')
    }
    @font-face {
        font-family: 'Depot';
        font-style: normal;
        font-weight: 500;
        src: local('Depot'), local('Depot'),
        url(${DepotMd}) format('truetype')
    }
    @font-face {
        font-family: 'Depot';
        font-style: normal;
        font-weight: 700;
        src: local('Depot'), local('Depot'),
        url(${DepotBd}) format('truetype')
    }
    @font-face {
        font-family: 'Depot';
        font-style: italic;
        font-weight: 100;
        src: local('Depot'), local('Depot'),
        url(${DepotThIt}) format('truetype')
    }
    @font-face {
        font-family: 'Depot';
        font-style: italic;
        font-weight: 300;
        src: local('Depot'), local('Depot'),
        url(${DepotLtIt}) format('truetype')
    }
    @font-face {
        font-family: 'Depot';
        font-style: italic;
        font-weight: 400;
        src: local('Depot'), local('Depot'),
        url(${DepotRgIt}) format('truetype')
    }
    @font-face {
        font-family: 'Depot';
        font-style: italic;
        font-weight: 500;
        src: local('Depot'), local('Depot'),
        url(${DepotMdIt}) format('truetype')
    }
    @font-face {
        font-family: 'Depot';
        font-style: italic;
        font-weight: 700;
        src: local('Depot'), local('Depot'),
        url(${DepotBdIt}) format('truetype')
    }
`
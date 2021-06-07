import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x3e9d8D160b9E7b7c0FD34dE872671DBA88405313',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Dividends(Coming soon)',
    icon: 'LayerIcon',
    href: '/',
   },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0x3e9d8D160b9E7b7c0FD34dE872671DBA88405313',
      },
     // {
     //   label: 'Vfat Tools',
     //   href: 'https://vfat.tools/polygon/polyswan/',
     // },
      {
        label: 'DappRadar(coming soon)',
        href: 'https://dappradar.com/polygon/defi/polyswan-finance',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/mickeyftm',
      },
      {
        label: 'Docs',
        href: 'https://berserkfinance.gitbook.io/berserk/',
      },
      {
        label: 'Medium',
        href: 'https://financeberserk.medium.com/',
      },
    ],
  },
 // {
 //   label: 'Audit by Techrate',
 //   icon: 'AuditIcon',
 //   href: 'https://github.com/PolySwanFinance/polyswan-frontend/blob/main/files/audit.pdf',
 // },
]

export default config

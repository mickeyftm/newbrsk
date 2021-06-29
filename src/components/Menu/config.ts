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
    label: 'Dividend Pool',
    icon: 'LayerIcon',
    href: '/dividend',
  },
  {
    label: 'Layer Farm',
    icon: 'LayerIcon',
    href: 'https://hawk.berserkfinance.com',
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
      {
        label: '$BRSK Chart',
        href: 'https://app.polychart.io/explorer/polygon/0xd694462db33e90f4f9ad047b68f5031f2470a235',
      },
      {
        label: 'Vfat Tools',
        href: 'https://vfat.tools/polygon/berserkfinance/',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/berserk-finance',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Documents',
        href: 'https://berserkfinance.gitbook.io/berserk/',
      },
      {
        label: 'Medium',
        href: 'https://financeberserk.medium.com/',
      },
    ],
  },
  {
    label: 'Review by Rugdoc.io',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/berserk-finance/',
  },
]

export default config

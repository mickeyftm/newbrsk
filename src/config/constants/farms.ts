import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BRSK-USDC LP',
    decimal: 18,
    lpAddresses: {
      137: '0xc23d96e17eabfef46545bc751750c8e5ae9b889e',
    },
    tokenSymbol: 'BRSK',
    tokenAddresses: {
      137: '0x3e9d8d160b9e7b7c0fd34de872671dba88405313',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BRSK-WMATIC LP',
    decimal: 18,
    lpAddresses: {
      137: '0xd694462db33e90f4f9ad047b68f5031f2470a235',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BRSK',
    decimal: 18,
    lpAddresses: {
      137: '0xc23d96e17eabfef46545bc751750c8e5ae9b889e'
    },
    tokenSymbol: 'BRSK',
    tokenAddresses: {
      137: '0x3e9d8d160b9e7b7c0fd34de872671dba88405313'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 3,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    decimal: 18,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 4,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    decimal: 6,
    lpAddresses: {
      137: '0x2cF7252e74036d1Da831d11089D326296e64a728'
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 5,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    decimal: 6,
    lpAddresses: {
      137: '0x2cf7252e74036d1da831d11089d326296e64a728'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 6,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    decimal: 18,
    lpAddresses: {
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 7,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    decimal: 18,
    lpAddresses: {
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498'
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
     pid: 8,
     risk: 2,
     lpSymbol: 'WMATIC-USDC LP',
     decimal: 18,
     lpAddresses: {
       137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
     },
     tokenSymbol: 'WMATIC',
     tokenAddresses: {
       137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
     },
     quoteTokenSymbol: QuoteToken.USDC,
     quoteTokenAdresses: contracts.usdc,
  },
 //  {
 //   pid: 9,
 //   risk: 3,
 //   lpSymbol: 'WMATIC-USDT LP',
 //   decimal: 18,
 //   lpAddresses: {
 //     137: '0x604229c960e5cacf2aaeac8be68ac07ba9df81c3',
 //   },
 //   tokenSymbol: 'USDT',
 //   tokenAddresses: {
 //     137: '0xa772b9ac43e7a165cac5582b27376020263189eb',
 //   },
 //   quoteTokenSymbol: QuoteToken.USDC,
 //   quoteTokenAdresses: contracts.usdc,
 //  },
 //  {
 //    pid: 10,
 //    risk: 3,
 //    lpSymbol: 'USDC-USDT LP',
 //    decimal: 18,
 //    lpAddresses: {
 //      137: '0x2cF7252e74036d1Da831d11089D326296e64a728'
 //    },
 //    tokenSymbol: 'USDC',
 //    tokenAddresses: {
 //      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
 //    },
 //    quoteTokenSymbol: QuoteToken.USDC,
 //    quoteTokenAdresses: contracts.usdc,
 //  },
 //  {
 //    pid: 11,
 //    risk: 4,
 //    lpSymbol: 'WETH-WMATIC LP',
 //    decimal: 18,
 //    lpAddresses: {
 //      137: '0xadbf1854e5883eb8aa7baf50705338739e558e5b',
 //    },
 //    tokenSymbol: 'WETH',
 //    tokenAddresses: {
 //      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
 //    },
 //    quoteTokenSymbol: QuoteToken.USDC,
 //    quoteTokenAdresses: contracts.usdc,
 //  },
 //  {
 //   pid: 12,
 //   risk: 4,
 //   lpSymbol: 'WBTC-WMATIC LP',
 //   decimal: 18,
 //   lpAddresses: {
 //     137: '0xf6b87181bf250af082272e3f448ec3238746ce3d',
 //   },
 //   tokenSymbol: 'WBTC',
 //   tokenAddresses: {
 //     137: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
 //   },
 //   quoteTokenSymbol: QuoteToken.USDC,
 //   quoteTokenAdresses: contracts.usdc,
 // },  

  // {
  //   pid: 99,
  //   risk: 5,
  //   lpSymbol: 'EGG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 98,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'EGG',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
 // {
 //   pid: 13,
 //   risk: 2,
 //   isTokenOnly: true,
 //   lpSymbol: 'AAVE',
 //   decimal: 18,
 //   lpAddresses: {
 //     137: '0x7c76b6b3fe14831a39c0fec908da5f17180df677'
 //   },
 //   tokenSymbol: 'AAVE',
 //   tokenAddresses: {
 //     137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
 //   },
 //   quoteTokenSymbol: QuoteToken.USDC,
 //   quoteTokenAdresses: contracts.usdc,
 // },
 // {
 //   pid: 14,
 //   risk: 3,
 //   isTokenOnly: true,
 //   lpSymbol: 'QUICK',
 //   decimal: 18,
 //   lpAddresses: {
 //     137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb'
 //   },
 //   tokenSymbol: 'QUICK',
 //   tokenAddresses: {
 //     137: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
 //   },
 //   quoteTokenSymbol: QuoteToken.USDC,
 //   quoteTokenAdresses: contracts.usdc,
 // },
 // {
 //   pid: 15,
 //   risk: 3,
 //   isTokenOnly: true,
 //   lpSymbol: 'LINK',
 //   decimal: 18,
 //   lpAddresses: {
 //     137: '0x70cee55c98f6da2685807611f115ea737d4a248e'
 //   },
 //   tokenSymbol: 'LINK',
 //   tokenAddresses: {
 //    137: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39'
 //   },
 //   quoteTokenSymbol: QuoteToken.USDC,
 //   quoteTokenAdresses: contracts.usdc,
 // },
 // {
 // pid: 16,
 // risk: 3,
 // lpSymbol: 'AAVE-USDC LP',
 // decimal: 18,
 // lpAddresses: {
 //   137: '0x7c76B6B3FE14831A39C0fec908DA5f17180df677',
 // },
 // tokenSymbol: 'AAVE',
 // tokenAddresses: {
 //   137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
 // },
 // quoteTokenSymbol: QuoteToken.USDC,
 // quoteTokenAdresses: contracts.usdc,
 // },  
 // {
 // pid: 17,
 // risk: 3,
 // lpSymbol: 'QUICK-USDC LP',
 // decimal: 18,
 // lpAddresses: {
 //   137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb',
 // },
 // tokenSymbol: 'QUICK',
 // tokenAddresses: {
 //   137: '0x831753dd7087cac61ab5644b308642cc1c33dc13',
 // },
 // quoteTokenSymbol: QuoteToken.USDC,
 // quoteTokenAdresses: contracts.usdc,
 // },
 // {
 // pid: 18,
 // risk: 3,
 // lpSymbol: 'LINK-USDC LP',
 // decimal: 18,
 // lpAddresses: {
 //   137: '0x70cee55c98f6da2685807611f115ea737d4a248e',
 // },
 // tokenSymbol: 'LINK',
 // tokenAddresses: {
 //   137: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
 // },
 // quoteTokenSymbol: QuoteToken.USDC,
 // quoteTokenAdresses: contracts.usdc,
 // },  
]

export default farms

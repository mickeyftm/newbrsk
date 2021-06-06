import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BRSK-USDC LP',
    decimal: 18,
    lpAddresses: {
      137: '0x186eb2eed59c85910d092601d0f42cc747b9c7f4',
    },
    tokenSymbol: 'BRSK',
    tokenAddresses: {
      137: '0x7bC58DD35F0545848043176e48C079857816492C',
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
      137: '0x6bde5809e173748a4067446b2ca01e2425cb91b2',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },

  // {
  //   pid: 2,
  //   risk: 5,
  //   lpSymbol: 'WMATIC-USDC LP',
  //   decimal: 18,
  //   lpAddresses: {
  //     137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
  //   },
  //   tokenSymbol: 'WMATIC',
  //   tokenAddresses: {
  //     137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 3,
  //   risk: 5,
  //   lpSymbol: 'WETH-USDC LP',
  //   decimal: 18,
  //   lpAddresses: {
  //     137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d',
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 1,
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
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'USDC-USDT LP',
  //   lpAddresses: {
  //     137: '0x2cF7252e74036d1Da831d11089D326296e64a728'
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
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
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BRSK',
    decimal: 18,
    lpAddresses: {
      137: '0x186eb2eed59c85910d092601d0f42cc747b9c7f4'
    },
    tokenSymbol: 'BRSK',
    tokenAddresses: {
      137: '0x7bC58DD35F0545848043176e48C079857816492C'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
]

export default farms

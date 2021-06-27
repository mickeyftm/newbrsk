import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    tokenName: 'Behelit',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x3e9d8d160b9e7b7c0fd34de872671dba88405313',
    contractAddress: {
     137: '0xd4d361daEF93F1588882d812c0bAba1759b4FC11'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '.00001',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
//  {
//    sousId: 1,
//    tokenName: 'TWT',
//    stakingTokenName: QuoteToken.CAKE,
//    stakingTokenAddress: '0x3e9d8d160b9e7b7c0fd34de872671dba88405313',
//    contractAddress: {
//    137: '0xb317557a64647136326D6110FB9C6de796b59A2e'
//    },
//    poolCategory: PoolCategory.COMMUNITY,
//    projectLink: 'https://trustwallet.com/',
//    harvest: true,
//    tokenPerBlock: '20',
//    sortOrder: 999,
//    isFinished: true,
//    tokenDecimals: 18,
//  },
]

export default pools

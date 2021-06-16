import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    tokenName: 'WMATIC',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x3e9d8d160b9e7b7c0fd34de872671dba88405313',
    contractAddress: {
     137: '0x8553c5C2f2f0C48018E7b650d7061f1FbEE7f7B1'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '.003473684211',
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

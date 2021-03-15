import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "https://finance.zcore.network",
  },
  {
    label: 'Exchange',
    icon: 'ExchangeIcon',
    href: "/swap",
  },  
  {
    label: 'Liquidity',
    icon: 'LiquidityIcon',
    href: "/pool",
  },   
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://finance.zcore.network/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://finance.zcore.network/nests',
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
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/zcore-finance/',
      },    
      {
        label: 'Price Chart',
        href: 'https://goswapp-bsc.web.app/0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
      },      
      {
        label: 'Github',
        href: 'https://github.com/zcore-coin/',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
      },
      {
        label: 'Add to Metamask',
        href: 'https://bit.ly/3sSDdrB',
      },    
    ],
  },
   {
    label: 'ZCore Network',
    icon: 'ZCoreIcon',
    href: 'https://zcore.network',
  },
   {
    label: 'Audit By Certik',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/zcore',
  },  
   {
    label: 'Docs',
    icon: 'GitbookIcon',
    href: 'https://docs.zcore.fi/',
  },   
]

export default config

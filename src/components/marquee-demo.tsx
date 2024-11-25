import { cn } from '@/lib/utils'
import Marquee from './core/marque'

const brandLogos = [
  {
    name: 'Microsoft',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8u8BZcgcIxcfgSJsas_HDf2pfYTBlmo2q3g&s',
  },
  {
    name: 'Google',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png',
  },
  {
    name: 'Amazon',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdkVnBP7a86WWxKqMRFEJRkbZGu8CtPblxA&s',
  },
  {
    name: 'Spotify',
    img: 'https://m.media-amazon.com/images/I/51rttY7a+9L.png',
  },
  {
    name: 'AWS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
  },
  {
    name: 'Apple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  },
]

const firstRow = brandLogos.slice(0, brandLogos.length / 2)
const secondRow = brandLogos.slice(brandLogos.length / 2)

const LogoCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        'relative flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-xl border',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]'
      )}
    >
      <img className='h-20 w-20' alt={name} src={img} />
    </div>
  )
}

const MarqueeDemo = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((brand) => (
          <LogoCard key={brand.name} {...brand} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((brand) => (
          <LogoCard key={brand.name} {...brand} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white'></div>
    </div>
  )
}

export default MarqueeDemo

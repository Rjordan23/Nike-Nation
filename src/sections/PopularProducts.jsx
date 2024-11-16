import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      {/* Popular Section Title and Desc */}
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='max-w-lg mt-2 font-montserrat text-slate-gray'>Discover Nike’s most popular shoes, celebrated for their unmatched comfort, performance, and timeless style. These top picks are designed to keep you ahead in every step, whether you're hitting the track or the streets.</p>
      </div>
      {/* Popular Section Cards */}
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product) => (
          <PopularProductCard 
            key={product.name} {...product}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
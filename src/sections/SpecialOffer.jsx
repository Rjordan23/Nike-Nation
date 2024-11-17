import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center mx-xk:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer} 
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Special<span className="text-coral-red"> Offer</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping experience redefined with exceptional deals and savings. From top-tier selections to unmatched value, we deliver excellence that stands out.</p>
        <p className="mt-6 lg:max-w-lg info-text">Discover endless possibilities tailored to your unique desires, exceeding your highest expectations. Your journey with us promises to be extraordinary in every way.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Get Discount Code"
            iconURL={arrowRight}
          />
          <Button
            label="Shop Now"
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            iconURL={arrowRight}
          />
        </div>

      </div>
    </section>
  )
}

export default SpecialOffer
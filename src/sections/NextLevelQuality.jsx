import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const NextLevelQuality = () => {
  return (
    <section 
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We offer top-notch, <br />
          <span className="text-coral-red"> High-Quality</span> footware
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footware is designed to elevate your performace, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text">Your satisfaction is guranteed.</p>
        <div className="mt-11">
          <Button
            label="View Details"
          />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8} 
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>

    </section>
  )
}

export default NextLevelQuality
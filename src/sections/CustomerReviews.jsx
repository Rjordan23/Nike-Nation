import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold text-4xl">
        Reviews That 
        <span className="text-coral-red"> Speak </span>
        for Themselves
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Real stories from customers who love our shoes!</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
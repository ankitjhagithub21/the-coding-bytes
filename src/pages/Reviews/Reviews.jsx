import React from 'react'
import Review from '../../components/Review/Review'
import reviews from './data'

const Reviews = () => {
  return (
    <section>
      <div className="px-5 py-24">
        <h1 className="text-center text-3xl lg:text-4xl font-bold mb-20">
          What people are saying...
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-">

          {
            reviews.map((review) => {
              return <Review key={review.id} review={review} />
            })
          }
        </div>

      </div>
    </section>

  )
}

export default Reviews
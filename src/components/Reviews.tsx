import { Quote, Star } from "lucide-react";
import { reviews } from "@/data/site";
import "../../public/reviews.css";

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="reviews-heading">
          <h2 id="reviews-heading">Studio <em>reviews.</em></h2>
        </div>
        <ul className="reviews-grid" role="list">
          {reviews.map(({ service, quote, rating }) => (
            <li className="review-card" key={service}>
              <span className="sr-only">{rating} out of 5 stars</span>
              <div className="review-card-top" aria-hidden="true">
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={15} fill={star <= rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <Quote className="review-quote-mark" size={26} strokeWidth={1.5} />
              </div>
              <blockquote><p>“{quote}”</p></blockquote>
              <p className="review-service">{service}</p>
            </li>
          ))}
        </ul>
        <p className="reviews-note">Sample reviews for this site preview.</p>
      </div>
    </section>
  );
}

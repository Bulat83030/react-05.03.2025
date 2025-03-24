export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul className="reviews">
        {reviews.map((review) => {
          return <li key={review.id}>{review.text}</li>;
        })}
      </ul>
    </>
  );
};

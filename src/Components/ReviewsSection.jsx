export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah",
      review:
        "Absolutely amazing coffee and food. The atmosphere is incredible!",
    },
    {
      name: "James",
      review:
        "One of the best brunch experiences I've had. Highly recommended.",
    },
    {
      name: "Emily",
      review: "Fresh ingredients, friendly staff and beautiful presentation.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-white border-2 border-black rounded-xl px-8 py-4 shadow-[4px_4px_0px_black]">
            <h4 className="font-black uppercase">TESTIMONIALS</h4>
          </div>

          <h2 className="mt-8 text-5xl md:text-7xl font-black text-black">
            What Our
            <br />
            Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-8 border-2 border-black shadow-[6px_6px_0px_black]"
            >
              <div className="text-4xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>

              <p className="text-lg text-black leading-relaxed">
                "{review.review}"
              </p>

              <h4 className="mt-6 text-xl font-black">— {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

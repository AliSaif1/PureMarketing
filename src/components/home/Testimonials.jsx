import { useRef, useState, useEffect } from 'react';
import data from '../../data/testimonials';

export default function Testimonials() {
  const scrollContainerRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCardId, setExpandedCardId] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        setTestimonials(formatReviews(data));
      } catch (err) {
        setError("Failed to load reviews. Please try again later.");
        console.error("Error fetching reviews:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const formatReviews = (reviews) => {
    return reviews.map(review => ({
      id: review.id,
      name: review.author_name,
      rating: review.rating,
      quote: review.text.length > 200 ? `${review.text.substring(0, 200)}...` : review.text,
      fullQuote: review.text,
      date: new Date(review.time * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      source: "Google",
      avatar: review.profile_photo_url || null
    }));
  };

  const scrollToSlide = (slideIndex) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;

      // Determine how many cards are visible per screen width
      let visibleCards = 1;
      if (window.innerWidth >= 1024) {
        visibleCards = 3; // lg and up
      } else if (window.innerWidth >= 640) {
        visibleCards = 2; // sm to md
      }

      const cardWidth = containerWidth / visibleCards;
      const scrollPosition = slideIndex * cardWidth;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });

      setCurrentSlide(slideIndex);
    }
  };

  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const scrollPrev = () => {
    const visibleCards = getVisibleCards();
    const maxSlide = Math.ceil(testimonials.length / visibleCards) - 1;
    const newSlide = currentSlide > 0 ? currentSlide - 1 : maxSlide;
    scrollToSlide(newSlide);
  };

  const scrollNext = () => {
    const visibleCards = getVisibleCards();
    const maxSlide = Math.ceil(testimonials.length / visibleCards) - 1;
    const newSlide = currentSlide < maxSlide ? currentSlide + 1 : 0;
    scrollToSlide(newSlide);
  };

  const toggleExpand = (id) => {
    setExpandedCardId(prevId => prevId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 relative bg-secondary-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              Client <span className="text-primary-500">Testimonials</span>
            </h2>
            <p className="mt-4 text-xl leading-8 text-slate-800">
              What our clients say about us on Google
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 px-2">
            <button
              onClick={scrollPrev}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-slate-100 transition-colors"
              aria-label="Scroll testimonials left"
            >
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-slate-100 transition-colors"
              aria-label="Scroll testimonials right"
            >
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonials Container */}
          <div className="relative overflow-hidden">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-slate-600">
                {error}
              </div>
            ) : (
              <div
                ref={scrollContainerRef}
                className="mt-8 flex overflow-x-hidden pb-8 scroll-smooth"
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
                  >
                    <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow h-full border border-slate-200" style={{ minHeight: '250px' }}>
                      <div className="flex items-center gap-x-4">
                        <img
                          className="h-12 w-12 rounded-full object-cover"
                          src={testimonial.avatar || `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=0ea5e9&color=fff`}
                          alt={testimonial.name}
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=0ea5e9&color=fff`;
                          }}
                        />
                        <div>
                          <h3 className="text-base font-semibold leading-7 text-slate-800">
                            {testimonial.name}
                          </h3>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                            <span className="text-xs text-slate-500 ml-1">
                              {testimonial.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-6 text-base leading-7 text-slate-600 flex-grow">
                        {expandedCardId === testimonial.id
                          ? testimonial.fullQuote
                          : `${testimonial.fullQuote.substring(0, 100)}...`}
                        {testimonial.fullQuote.length > 100 && (
                          <button
                            className="text-primary-500 hover:underline ml-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(testimonial.id);
                            }}
                          >
                            {expandedCardId === testimonial.id ? 'Read less' : 'Read more'}
                          </button>
                        )}
                      </p>
                      <div className="mt-6 flex items-center">
                        <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                        <span className="text-xs text-slate-400 ml-1">Google Review</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJx51n2UkpYIgRokuaQSFI75w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 transition-colors"
            >
              Leave us a review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
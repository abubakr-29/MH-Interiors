import { useState, useEffect, useCallback } from "react";
import styles from "./AllTestimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Vikrant Jha",
    rating: 5,
    text: "MH Interior Design completely transformed our 3BHK in Kaikhali. Their modern yet cozy touch made our house truly feel like home. Highly recommended!",
  },
  {
    id: 2,
    name: "Hitasis Conton",
    rating: 4,
    text: "Their modular kitchen design is both stunning and super functional. From planning to execution, everything was smooth and professional.",
  },
  {
    id: 3,
    name: "Avishake Barma",
    rating: 5,
    text: "I hired MH for my space revamp in Rajarhat. The way they blended aesthetics with utility is impressive. My team loves the new vibe!",
  },
  {
    id: 4,
    name: "Apurba Sil",
    rating: 5,
    text: "Excellent service and great attention to detail. The living room design especially blew us away. Worth every penny.",
  },
  {
    id: 5,
    name: "Sumsum Nahar",
    rating: 4,
    text: "They worked on our home interiors in New Town Kolkata—absolutely nailed the mood and style we wanted. Great job, MH!",
  },
  {
    id: 6,
    name: "Mousumi Mondal",
    rating: 5,
    text: "I appreciated how they understood my taste so well. The colour palette, textures, and layout—everything turned out just perfect!",
  },
  {
    id: 7,
    name: "Doctor Soumya Ray",
    rating: 5,
    text: "As a doctor, I wanted a peaceful yet functional space. MH delivered exactly that—simple, elegant, and calming interiors.",
  },
  {
    id: 8,
    name: "Prasant Gupta",
    rating: 4,
    text: "Efficient, creative, and responsive. MH Interior Design redesigned our kitchen and dining area beautifully. We're getting compliments from everyone!",
  },
  {
    id: 9,
    name: "Sapon Chaudhary",
    rating: 5,
    text: "We just completed our flat renovation with MH, and I must say—it's like walking into a magazine page now. Truly happy!",
  },
];

const AllTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const getCardsToShow = useCallback(() => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - getCardsToShow();
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - getCardsToShow();
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToSlide = (index) => {
    const maxIndex = testimonials.length - getCardsToShow();
    if (index > maxIndex) {
      setCurrentIndex(maxIndex);
    } else {
      setCurrentIndex(index);
    }
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const getActiveClass = (index) => {
    const cardsToShow = getCardsToShow();
    if (cardsToShow === 1) {
      return currentIndex === index ? styles.active : "";
    }
    return index >= currentIndex && index < currentIndex + cardsToShow
      ? styles.active
      : "";
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialContainer}>
        <div
          className={styles.testimonialWrapper}
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / getCardsToShow()
            }%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonialSlide} ${getActiveClass(index)}`}
            >
              <div className={styles.testimonialText}>{testimonial.text}</div>
              <div>
                <div className={styles.testimonialAuthor}>
                  {testimonial.name}
                </div>
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.navigationButtons}>
          <button
            className={styles.navButton}
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            className={styles.navButton}
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <div className={styles.dots}>
          {Array.from({
            length: Math.ceil(testimonials.length / getCardsToShow()),
          }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                Math.floor(currentIndex / getCardsToShow()) === index
                  ? styles.dotActive
                  : ""
              }`}
              onClick={() => goToSlide(index * getCardsToShow())}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTestimonials;

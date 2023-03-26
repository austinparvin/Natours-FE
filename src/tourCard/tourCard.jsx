import "./tourCard.scss";

const TourCard = ({ tour }) => {
  console.log(tour);
  return (
    <div className="card">
      <div class="card__header">
        <div class="card__picture">
          <div class="card__picture-overlay">&nbsp;</div>
          <img
            src="/tour-2-cover.jpeg"
            alt="Tour Cover"
            class="card__picture-img"
          />
        </div>
        <h3 class="heading-tertiary">
          <span>The Sea Explorer</span>
        </h3>
      </div>
      <div class="card__details">
        <h4 class="card__sub-heading">subheading</h4>
        <p class="card__text">text</p>
        <div class="card__data">
          <svg class="card__icon">
            <path d="M12 0c-5.5 0-10 4.5-10 10 0 7.4 9.1 13.6 9.4 13.8 0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.2 9.4-6.4 9.4-13.8 0-5.5-4.5-10-10-10zM12 21.8c-1.9-1.4-8-6.4-8-11.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 5.4-6.1 10.4-8 11.8z"></path>
          </svg>
          <span>Miami, USA</span>
        </div>
        <div class="card__data">
          <svg class="card__icon">
            <path d="M12 0c-5.5 0-10 4.5-10 10 0 7.4 9.1 13.6 9.4 13.8 0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.2 9.4-6.4 9.4-13.8 0-5.5-4.5-10-10-10zM12 21.8c-1.9-1.4-8-6.4-8-11.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 5.4-6.1 10.4-8 11.8z"></path>
          </svg>
          <span class="card__value">value</span>
        </div>
        <div class="card__data">
          <svg class="card__icon">
            <path d="M12 0c-5.5 0-10 4.5-10 10 0 7.4 9.1 13.6 9.4 13.8 0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.2 9.4-6.4 9.4-13.8 0-5.5-4.5-10-10-10zM12 21.8c-1.9-1.4-8-6.4-8-11.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 5.4-6.1 10.4-8 11.8z"></path>
          </svg>
          <span class="card__value">value</span>
        </div>
        <div class="card__data">
          <svg class="card__icon">
            <path d="M12 0c-5.5 0-10 4.5-10 10 0 7.4 9.1 13.6 9.4 13.8 0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.2 9.4-6.4 9.4-13.8 0-5.5-4.5-10-10-10zM12 21.8c-1.9-1.4-8-6.4-8-11.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 5.4-6.1 10.4-8 11.8z"></path>
          </svg>
          <span class="card__value">value</span>
        </div>
      </div>
      <div class="card__footer">
        <p>
          <span class="card__footer-value">number</span>
          <span class="card__footer-text">text</span>
        </p>
        <p class="card__ratings">
          <span class="card__footer-value">rating</span>
          <span class="card__footer-text">text</span>
        </p>
        <a class="btn btn--green btn--small" href="/">
          Details
        </a>
      </div>
    </div>
  );
};

export default TourCard;

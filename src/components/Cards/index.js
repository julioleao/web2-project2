import React from "react";

import "./styles.css";

export default function Cards({ cards }) {
  return (
    <div className="col-sm-3 mt-3 mb-3">
      <div class="card text-center">
        <div className="card-footer">
          <img
            src={cards.imageUrl}
            className="cardsd-img-top"
            alt={cards.name}
          />
          <div className="cardsd-body mt-3">
            <h5 className="cardsd-title">{cards.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

function CardExam() {
  return (
    <>
      <div class="card">
        <div class="card-image">Math</div>
        <div className="card-description">
          <div class="category"> Basic oprarations</div>
          <div class="heading">
            {" "}
            additon, subtraction, multiplication
            <div class="author">
              {" "}
              By <span class="name">Jhon</span> 4 days ago
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardExam;

import React from "react";

function Profile() {
  return (
    <div class="profileCard">
      <div class="card profile-card">
        <div class="background-block">
          <img
            src="/static/images/web.jpg"
            alt="profile background"
            class="background w-100"
          />
        </div>
        <div class="profile-thumb-block">
          <img
            src="/static/images/sq.jpg"
            alt="profile-image"
            class="profile w-100"
          />
        </div>
        <div class="card-content card-body pb-4">
          <span class="h4 mt-4 d-block">
            Noor Ajmir Tanvir
            <br />
            Mahin
          </span>
          <span class="pt-1 d-block">
            <i class="fas fa-briefcase pr-2"></i>Web Developer
          </span>
          <span class="pt-1 d-block">
            <i class="fas fa-graduation-cap pr-2"></i>Rajshahi University of
            Engineering and Technology
          </span>

          <div class="d-flex justify-content-center my-2 social">
            <a href="http://fb.me/tanvir.mahin.1" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="http://github.com/tanvirmahin24" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a
              href="http://linkedin.com/in/noor-ajmir-tanvir-mahin-b188a01a1/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Profile;

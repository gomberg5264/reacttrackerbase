import React from "react";
import { heroBg, heroVector } from "../../images/homeImages";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero text-center">
      <div
        className="hero-background h-100 w-100 all-center"
        style={{ background: `url(${heroBg})` }}
      >
        <div className="container h-100 all-center-column justify-content-sm-around">
          <div className="caption all-center-column">
            <div className="title bold">
              Welcome to <span className="dark">TrackerBase</span>
            </div>
            <div className="subtitle">
              We help you track any Amazon product and maintain your records in
              one place.
            </div>

            <div className="buttons mt-4 all-center">
              <Link
                className="btn bold btn-primary btn-md mx-2"
                to="/dashboard"
              >
                Get Started
              </Link>
            </div>
          </div>

          <img
            src={heroVector}
            alt="vector"
            className="vector d-sm-block d-none"
          />
        </div>
      </div>
    </section>
  );
}

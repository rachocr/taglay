import React from 'react';

function AboutPage() {
  return (
    <div className="page">
      <div className="page-header" >
        <p className="eyebrow" style={{  color: '#f8fafc' }}>About</p>
        <h1>Built for the ride. Designed for the rider.</h1>
        <p className="lead">
          Standard social media is too noisy. We built a dedicated space to document the nuances of two-wheeled travel—from the technical specs to the emotional highs.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="feature-icon">LOG</div>
          <h3>Distraction-Free Logging</h3>
          <p>
            A clean interface designed to let you quickly record route details and road conditions, even right after you pull over.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">TEC</div>
          <h3>Machine Analytics</h3>
          <p>
            Track your maintenance intervals, gas mileage, and modifications. Know exactly when your motorcycle needs its next oil change.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">COM</div>
          <h3>Rider Community</h3>
          <p>
            Share hidden routes and safety warnings with a community that understands the difference between a pothole and a crater.
          </p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-row">
          <strong>2024</strong>
          <p>
            Concept & Prototyping. Realized that generic note apps weren't enough for tracking complex ride data. The core "Ride Log" schema was designed.
          </p>
        </div>
        <div className="timeline-row">
          <strong>2025</strong>
          <p>
            Beta Launch. The platform goes live. Riders can now create accounts, log journeys, and upload photos of their machines.
          </p>
        </div>
        <div className="timeline-row">
          <strong>Today</strong>
          <p>
            GPS Integration & Groups. Working on real-time route tracking and "Group Ride" features to coordinate convoys easily.
          </p>
        </div>
      </div>

      <div className="cta-banner">
        <h3 style={{ color: '#f8fafc' }}>Start your digital garage today.</h3>
        <p>
          Join other riders documenting their journey. Sign up now to create your first Ride Log and track your maintenance history.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;

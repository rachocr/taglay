import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../article-content';

function HomePage() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow" style={{ color: '#f8fafc' }}>A Rider's Logbook</p>
          <h1 style={{ color: '#f8fafc' }}>Every ride has a story. Document the journey.</h1>
          <p className="lead" style={{ color: '#f8fafc' }}>
            Forget social media noise. Create a dedicated log of your routes, bike maintenance, road conditions, and the lessons learned on two wheels.
          </p>
          <div className="hero-actions">
            <Link to="/articles" className="button-link primary">
              View Ride Logs
            </Link>
            <Link to="/about" className="button-link secondary">
              About the team
            </Link>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>{articles.length}+</strong>
              <span>Ride Logs</span>
            </div>
            <div className="stat">
              <strong>12</strong>
              <span>Scenic Routes</span>
            </div>
            <div className="stat">
              <strong>100%</strong>
              <span>Rider Focused</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <img
              src="../../public/images/motorcycle.png"
              alt="Design desk with colorful UI elements"
            />
            <p className="muted">
              Welcome to Roadbound, where every ride is a story waiting to be told.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <p className="eyebrow" style={{ color: '#f8fafc' }}>Highlights</p>
            <h2 style={{ color: '#f8fafc' }}>Track what matters.</h2>
          </div>
          <span className="muted" style={{ color: '#f8fafc' }}>Your safe arrival is the best gift you can give.</span>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">NAV</div>
            <h3>Route & Conditions</h3>
            <p>
              Don't just track miles. Record the road quality, weather conditions, and the best twisties to revisit later.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">EXP</div>
            <h3>The Rider's Story</h3>
            <p>
              A dedicated space to write about the feeling of the ride, the stops you made, and the people you met.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">MNT</div>
            <h3>Lessons & Maintenance</h3>
            <p>
              Log mechanical hiccups, near misses, or safety tips you learned to keep your skills (and bike) sharp.
            </p>
          </div>
        </div>
      </section>

      <section className="articles-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow" style={{ color: '#f8fafc' }}>Logs</p>
            <h2 style={{ color: '#f8fafc' }}>Recent Journeys.</h2>
          </div>
          <Link to="/articles" className="button-link secondary">
            View all
          </Link>
        </div>
        <div className="article-preview-grid">
          {featuredArticles.map((article) => (
            <div key={article.name} className="article-preview">
              <div className="article-meta">
                <span className="pill">React</span>
                <span className="muted">{article.content[0].substring(0, 30)}...</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0, 150)}...</p>
              <Link to={`/articles/${article.name}`} className="button-link secondary">
                Read article
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleList from '../../components/ArticleList';
import { fetchArticles } from '../../services/ArticleService';

function ArticleListPage() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchArticles();
        const activeArticles = (data?.articles || []).filter((article) => article.isActive);
        setArticleList(activeArticles);
      } catch (err) {
        console.error('Error loading articles', err);
        setError('Unable to load articles right now.');
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (isLoading) {
    return (
      <div className="page">
        <p className="muted">Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow" style={{ color: '#f8fafc' }}>Ride Logs</p>
        <h1>Knowledge gained on two wheels.</h1>
        <p className="lead">
          Filter your history by City Rides, Long Rides, or Night Rides. Review your past routes, road conditions, and the lessons learned on the road.
        </p>
      </div>

      {error ? (
        <p className="muted">{error}</p>
      ) : articleList.length > 0 ? (
        <ArticleList articles={articleList} />
      ) : (
        <p className="muted">No articles available right now.</p>
      )}

      <div className="cta-banner">
        <h3 style={{ color: '#f8fafc' }}>Looking for more?</h3>
        <p>
          I bet you just finished a ride, why not document the route and story while it's fresh?
        </p>
        <Link to="/about" className="button-link secondary">
          Meet the team
        </Link>
      </div>
    </div>
  );
}

export default ArticleListPage;

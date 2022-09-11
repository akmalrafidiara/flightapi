import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    document.title = 'Blog';
    async function getArticles() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }

    getArticles();
  }, []);
  return (
    <>
      <section>
        <h1>Articles</h1>
        <p>Beberapa artikel terbaru seputar penerbangan</p>

        {loading ? (
          <p>Memuat informasi...</p>
        ) : (
          <div className="article">
            {articles.map(function (article) {
              return (
                <article key={article.id}>
                  <h2>
                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                  </h2>
                  <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

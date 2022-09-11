import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [NotFound, setNotFound] = useState(false);
  const params = useParams();

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
        if (!request.ok) {
          setLoading(false);
          return setNotFound(true);
        }
        const response = await request.json();

        setArticle(response);
        setLoading(false);
        document.title = response.title;
      }
      getArticle();
    },
    [params]
  );

  if (NotFound) {
    return <h1>Artikel tidak ditemukan! :(</h1>;
  }

  return (
    <>
      <section>
        {loading ? (
          <p>Memuat content...</p>
        ) : (
          <div>
            <h1>{article.title}</h1>
            <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
            <img src={article.imageUrl} alt="img" />
            <p>{article.summary}</p>
            <p>
              Source:{' '}
              <a href={article.url} target="_blank" rel="noreferrer">
                {article.newsSite}
              </a>
            </p>
          </div>
        )}
      </section>
    </>
  );
}

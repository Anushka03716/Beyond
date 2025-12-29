import { useEffect, useState } from "react";
import { getArticles } from "./api";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>BeyondChats Articles</h1>

      {articles.map(article => (
        <div
          key={article.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "20px"
          }}
        >
          <h2>{article.title}</h2>

          <h4>Original Content</h4>
          <p>{article.original_content}</p>

          <h4>Updated Content</h4>
          <p>{article.updated_content || "Not updated yet"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

function Article({ image, alt, author, title, summary}) {
  return (
    <div className="article">
      <div className="img-ratio">
        <img src={image} alt={alt} loading="lazy"/>
      </div>
      <div className="article-text">
        <p>{author}</p>
        <h4>{title}</h4>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Article;

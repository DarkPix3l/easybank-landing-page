function Article({ image, alt, author, title, summary}) {
  return (
    <a className="bg-white rounded-xl cursor-pointer" href="/" target="_blank">
      <div className="aspect-[3/2] overflow-hidden">
        <img src={image} alt={alt} loading="lazy" className="w-full h-auto rounded-tl-xl rounded-tr-xl"/>
      </div>
      <div className="p-[20px]">
        <p className="text-[0.9rem] leading-[23px] text-grayish-blue">{author}</p>
        <h4 className="my-5 text-dark-blue font-medium hover:text-lime-green">{title}</h4>
        <p className="text-[0.9rem] leading-[23px] text-grayish-blue">{summary}</p>
      </div>
    </a>
  );
}

export default Article;
function Socials({ image, alt, title, description }) {

  return (
    <div className="reason">
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Socials;

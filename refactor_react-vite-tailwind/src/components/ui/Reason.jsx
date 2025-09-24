function Reason({ image, alt, title, description }) {

  return (
    <div className='flex flex-col items-center md:items-start gap-[30px] text-balance'>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Reason;

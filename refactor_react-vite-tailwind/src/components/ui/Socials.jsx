function Socials() {  //different approach using array+map method. crazy....
  const socialMediaLinks = [
    { name: 'facebook', url: 'https://facebook.com', icon: './images/icon-facebook.svg' },
    { name: 'youtube', url: 'https://youtube.com', icon: './images/icon-youtube.svg' },
    { name: 'twitter', url: 'https://twitter.com', icon: './images/icon-twitter.svg' },
    { name: 'pinterest', url: 'https://pinterest.com', icon: './images/icon-pinterest.svg' },
    { name: 'instagram', url: 'https://instagram.com', icon: './images/icon-instagram.svg' }
  ];

  return (
    <div className="socials">
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Go to our ${link.name} page`}
        >
          <img
            src={link.icon}
            alt={`${link.name} logo - visit our profile on ${link.name}`}
          />
        </a>
      ))}
    </div>
  );
}

export default Socials;


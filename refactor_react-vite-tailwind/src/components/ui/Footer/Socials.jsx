function Socials() { 
  const socialMediaLinks = [
    { name: 'facebook', url: 'https://facebook.com', icon: './icons/socials/icon-facebook.svg' },
    { name: 'youtube', url: 'https://youtube.com', icon: './icons/socials/icon-youtube.svg' },
    { name: 'twitter', url: 'https://twitter.com', icon: './icons/socials/icon-twitter.svg' },
    { name: 'pinterest', url: 'https://pinterest.com', icon: './icons/socials/icon-pinterest.svg' },
    { name: 'instagram', url: 'https://instagram.com', icon: './icons/socials/icon-instagram.svg' }
  ];

  return (
    <div className="socials flex justify-center items-center gap-[10px] mt-6 md:justify-start">
      {socialMediaLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Go to our ${link.name} page`}
          className="hover:filter-hover-green"
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


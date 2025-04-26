function FooterNav() {
  //different approach using array+map method. crazy....
  
  const navList = [
    { name: "About Us", href: "#" }, //just the ones we want to change. href, in this case for later ref
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const navList2 = [
    { name: "Careers", href: "#" },
    { name: "Support", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <div className="footer-nav">
      <ul>
      {navList.map((link) => (
        <li key={link.name}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Go to our ${link.name} page`}>{`${link.name}`}</a>
        </li>
      ))}
      </ul>
      <ul>
      {navList2.map((link) => (
        <li key={link.name}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Go to our ${link.name} page`}>{`${link.name}`}</a>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default FooterNav;

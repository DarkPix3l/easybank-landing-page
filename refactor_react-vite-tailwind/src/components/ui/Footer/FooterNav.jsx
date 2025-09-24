function FooterNav() {
  
  const navList = [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const navList2 = [
    { name: "Careers", href: "#" },
    { name: "Support", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <div className="flex flex-col text-nowrap leading-[51px] text-center md:text-left lg:leading-[41px] lg:flex-row lg:gap-10">
      <ul className="footerNav flex flex-col">
        {navList.map((link) => (
          <li key={link.name}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Go to our ${link.name} page`} className="text-gray-50 hover:text-[#31d35c]">{`${link.name}`}</a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col">
        {navList2.map((link) => (
          <li key={link.name}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Go to our ${link.name} page`} className="text-gray-50 hover:text-[#31d35c]">{`${link.name}`}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterNav;

import { Logo } from "./logo/Logo";

import "./header.scss";

import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;



type Link = {
  label: string;
  href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  const isActive=false
  return (
      <nav className="links-container">
        <ul>
          {links.map(
            (link: Link) => 
              <li>
                <a
                className={ (isActive ? "link-active" : "link")}
                href={link.href}> {link.label}
                </a>
              </li>
          )}
        </ul>
      </nav>
  )
};



const logoAttributes= {
  "href": "https://www.kyanitkagit.com/",
  "src": "https://www.kyanitkagit.com/wp-content/uploads/2022/07/1-2.png",
  "alt": "Kyanit-Kagit-Ambalaj"
}
const {
  href,
  src,
  alt,
}=logoAttributes;

const Header: React.FC<{}> = () => {
  return (
    <nav className="main-header">
      <div className="header container">
        <Logo href={href} src={src} alt={alt} 
        />
        <Links links={links} />


      </div>
    </nav>

  )
}

export default Header;

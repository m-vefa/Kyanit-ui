
interface LogoProps {
  href?: string;
  src?: string;
  alt?: string;


}

export const Logo = (props: LogoProps) => {
  return (
    <div className="logo_container">
      <a href={props.href}>
        <img
          className="logo_img"
          src={props.src}
         
          alt={props.alt}
        />
      </a>
    </div>
  );
};




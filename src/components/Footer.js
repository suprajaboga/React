const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <div className="footer">
      Created by
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/supraja-boga-52245b146/"
        target="_blank"
        title="Supraja Boga's Linkedin Profile"
      >
        Supraja Boga
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/suprajaboga/react"
        target="_blank"
        title="Tasty Eats Github Repository"
      >
        <strong>
          Tasty<span>Eats</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;

import { FC, Fragment } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <Fragment>
      <footer className="footer mt-auto py-3 bg-white text-center">
        <div className="container">
          <span className="text-muted">
            Copyright © 2024 ANGP <span id="year"></span>
            all rights reserved
          </span>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;

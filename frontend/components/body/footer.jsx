import React from 'react';

class Footer extends React.Component {

  render() {
    return <>
        <div className="foot-container">
          <a className="button-to-links" href="https://github.com/anthonyltam/Broken-Fork">
            Github
          </a>
          <a className="button-to-links" href="https://www.linkedin.com/in/anthony-tam1/">
            LinkedIn
          </a>
        <a className="button-to-links" href="https://condescending-ritchie-cccb9f.netlify.com">
            Portfolio
          </a>
        </div>
      </>;
  }
}

export default Footer;

import React from 'react';

function MyFooter() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/JohnBaldwin82",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/john-baldwin-cmcp-level-1-479326b5/",
    },
  ];
  return (
    <footer className='footer'>
      {icons.map(icon => (
        <div className='myFooterIcon' key={icon.name}>
          <a
            href={icon.link}
            
            target="_blank"
            rel="noopener noreferrer nofollow">
            <i className={icon.name} devicon-github-original= "true"></i></a>
        </div>
      ))}
    </footer>
  );
}

export default MyFooter;
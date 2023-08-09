import React from 'react';

function johnFooter() {
  const myIcons = [
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
    <footer className='thisFooter'>
      {myIcons.map(icon => (
        <div className='myFooterIcon'>
          <a
            href={icon.link}
            key={icon.name}
            target="_blank"
            rel="noopener noreferrer nofollow">
            <i className={icon.name} devicon-github-original= "true"></i></a>
        </div>
      ))}
    </footer>
  );
}

export default johnFooter;
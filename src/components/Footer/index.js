import React from "react";

function myFooter() {
    const icons = [
        {
            name: 'fab fa-github',
            link: 'https://github.com/JohnBaldwin82'
        },
        {
        name: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/john-baldwin-cmcp-level-1-479326b5/'
        }
    ]
    return (
        <footer className="footer">
            {icons.map(icon =>
            (
                <div className="iconFooter">
                    <a href={icon.link} key={icon.name} target='_blank' rel='noopener noreferrer'><i className={icon.name} devicon-github-original></i></a>
                </div>
            ))}
        </footer>
    )
}

export default myFooter
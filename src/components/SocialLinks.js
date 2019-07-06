import React from 'react'
import { FaFacebook as Facebook, FaTwitter as Twitter, FaGithub as Github } from 'react-icons/fa';

function SocialLinks({socialLinks}) {
    return (
        <div>
            <a className="icon" href={socialLinks.facebook}><Facebook /></a>
            <a className="icon" href={socialLinks.twitter}><Twitter /></a>
            <a className="icon" href={socialLinks.github}><Github /></a>
        </div>
    )
}

export default SocialLinks

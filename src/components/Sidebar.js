import React from 'react'
import SocialLinks from './SocialLinks'

const Sidebar = ({ data }) => {
    const title = data.title;
    const info = data.info
    const socialLinks = data.social
    
    return (
        <div className="sidebar my-5">
            <img
                width="180"
                className="rounded-circle mb-5 profile-img"
                src="https://avatars2.githubusercontent.com/u/21126965?s=400&v=4" />
            <h2>{title}</h2>
            <p>{info}</p>
            <SocialLinks socialLinks = {socialLinks}/>
        </div>
    )
}

export default Sidebar
import React from 'react'
import Sidebar from './Sidebar'

function Layout({ children }) {
    const data = {
        'title': "Hi , I’m Mohan",
        'info': "Kick off your next gatsby contentful project with this awesome starter 🚀. I hope you like this one. I love to hear your feedback.",
        'social': {
            "facebook": "https://www.facebook.com/sree.dhannu",
            "twitter": "https://www.twitter.com/_MrNullPointer",
            "github": "https://github.com/mohanmonu777"
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Sidebar data={data} />
                    <div className = "vertical-line"></div>
                </div>
                <div className = "col-lg-8">
                    <div className = "articles my-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout

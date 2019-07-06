import React from 'react'
import { Link } from 'gatsby';

const ArticleItem = ({ title, description, slug, commentCount }) => {

    const commentIcon = "https://img.icons8.com/material-sharp/24/80CBC4/speech-bubble-with-dots.png"

    return (
        <div className="article-item mb-4">
            <Link to={slug} className="link">
                <h2>{title}</h2>
            </Link>
            <p>{description}</p>
            <span><img src={commentIcon} alt="Comment Icon" className="mr-2" />{commentCount} Comments</span>
        </div>
    )
}

export default ArticleItem


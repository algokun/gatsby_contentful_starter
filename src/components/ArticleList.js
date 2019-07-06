import React from 'react'
import ArticleItem from './ArticleItem'

function ArticleList({articles}) {
    return (
        <div>
            {
                articles.map(
                    ({ node } , index) => {
                        return <ArticleItem 
                            title = {node.title}
                            key = {index}
                            description = {node.description}
                            slug = {node.slug}
                            commentCount = "12"
                        />
                    }
                )
            }
        </div>
    )
}

export default ArticleList

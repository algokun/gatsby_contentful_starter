import React from 'react'
import Layout from '../components/layout'
import ArticleList from '../components/ArticleList'

import '../style.css'
import 'bootstrap/dist/css/bootstrap.css'
import { graphql } from 'gatsby';

function index({ data }) {
  const articles = data.allContentfulArticle.edges
  return (
    <div>
      <Layout>
        <ArticleList articles={articles} />
      </Layout>
    </div>
  )
}

export default index

export const pageQuery = graphql`
{
  allContentfulArticle{
    edges{
      node{
        title
        slug
        description
      }
    }
  }
}
`

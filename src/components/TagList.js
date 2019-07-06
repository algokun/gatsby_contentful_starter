import React from 'react'
import {Link} from 'gatsby'
const TagList = ({ data }) => {
    return <div className = "my-2">
        {
            data.map(
                item => {
                    return <Link className = "btn btn-outline-light rounded-pill mr-2 my-2">{item}</Link>
                }
            )
        }
    </div>
}

export default TagList

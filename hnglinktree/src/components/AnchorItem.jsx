import React from 'react'
import links from '../constants/LinkInfo'
import Link from '../constants/Link'

const AnchorItem = () => {
  return (
    <main>
        <div className="links">
            {links.map(Link)}
        </div>
    </main>
  )
}

export default AnchorItem;
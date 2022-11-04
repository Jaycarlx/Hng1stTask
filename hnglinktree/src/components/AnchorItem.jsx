import React from 'react'
import links from '../constants/LinkInfo'
import Linkitem from '../constants/Linkitem'

const AnchorItem = () => {
  return (
    <main>
        <div className="links">
            {links.map(Linkitem)}
        </div>
    </main>
  )
}

export default AnchorItem;
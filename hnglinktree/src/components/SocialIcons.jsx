import React from 'react'
import slackIcon from '../assets/slack.svg'
import githubIcon from '../assets/github.svg'

const Social = () => {
  return (
    <section className='social'>
        <img src={slackIcon} alt="Slack Icon" />
          <a href="https://github.com/Jaycarlx/Hng1stTask">
              <img src={githubIcon} alt="Githubicon" />
        </a>
    </section>
  )
}

export default Social;
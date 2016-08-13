/**
 * Created by shuding on 7/23/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'

import { Space, TITLE, __ } from '../common/const'

export default class extends Component {
  render() {
    return (
      <section className='section hero is-fullheight'>
        <div className='container'>
          <h2 className='title'>{__`About Us`}</h2>
          <div className='content about-box'>
            <p>{__`Hackathons have grown to become a global student movement. Now Fudan University will also join this movement by creating ${TITLE} this Fall semester. ${TITLE} will select 300 best student developers `}<u><b>{__`across China`}</b></u>{__` and invite most splendid sponsor companies across China and Silicon Valley to join our hackathon on Friday, October 14${<sup>th</sup>}, 2016 at Guanghua Building, Fudan University.`}</p>
            <p>{__`${TITLE} will last for 36 hours throughout October 14th weekend, and allow teams of up to five students to compete in the hackathon. Our event will offer various top open-source companies’ APIs and SDKs for student developers to hack on. In the end, students could quickly self-learn and apply those tools to develop different kinds of application and product prototype.`}</p>
            <p>{__`During the course of ${TITLE}, students will learn how to deliver a product under 36 hours by leveraging each team member’s skillsets and covering various functions within a team. In addition to utilizing best resources provided by sponsor companies, student developers could communicate frequently with each sponsor’s engineering group to hone in their development skills.`}</p>
            <p>{__`Student developers could also take this chance to connect with each sponsor’s developers and recruiters, in order to find their right fit for future career. ${TITLE} will also invite top-notch venture capital investors to be part of the judging committee. Students could potentially benefit from those offerings by taking their projects to the next level. We hope, by the end of ${TITLE}, students will not only receive many amazing prizes, but mostly importantly have fun, make great friends and turn the craziest idea into reality!`}</p>
          </div>
        </div>
      </section>
    )
  }
}

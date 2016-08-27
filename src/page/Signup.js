/**
 * Created by shuding on 7/23/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'

import { Space, __ } from '../common/const'

export default class extends Component {
  render() {
    return (
      <section className='section hero is-fullheight'>
        <div className='container'>
          <h2 className='title'>{__`Application Process`}</h2>
          <div className='content signup-box'>
            <p>{__`Please leave your contact info (${
              <a href='javascript: ;'>{__`here`}</a>
            }), we will keep you updated for further progress.`}</p>
            <p>{__`The APPLICATION will open on early September, 2016, we welcome you to apply!`}</p>
            <p>{__`We will use rolling-base application process. We strongly suggest you to apply in your earliest convenience, in order to maximize your chance for being selected.`}</p>
          </div>
        </div>
      </section>
    )
  }
}

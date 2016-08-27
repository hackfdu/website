/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

import { TITLE } from './const'

export default class extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='content'>
            <p className='has-text-centered'>{TITLE} All rights reserved</p>
            <p className='has-text-centered'>葡萄科技技术（深圳）有限公司</p>
          </div>
        </div>
      </footer>
    )
  }
}

/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

import { TITLE, __, locale } from './const'

export default class extends Component {
  constructor() {
    super()

    this.state = {
      expand: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleLocale = this.toggleLocale.bind(this)
  }

  toggleMenu() {
    this.setState({
      expand: !this.state.expand
    })
  }

  toggleLocale() {
    locale(1 - locale())
    window.updateLocaleIndex()
    window.updateLocaleContainer()
  }

  render() {
    const { expand } = this.state

    return (
      <div>
        <div className={`menu-layer ${expand ? 'expand' : ''}`}>
          <div>
            <Link tabIndex='2' className='nav-item border c-white' to='/about'>{__`About Us`}</Link>
            <Link tabIndex='3' className='nav-item border c-red' to='/signup'>{__`Application Process`}</Link>
            <Link tabIndex='4' className='nav-item border c-yellow' to='/timeline'>{__`Hackathon Schedule`}</Link>
            <Link tabIndex='5' className='nav-item border c-blue' to='/faq'>{__`FAQ`}</Link>
          </div>
        </div>
        <header className={`nav${this.props.fixedTop ? ' fixed-top' : ''}${this.props.darkBg ? ' dark-bg' : ''}`}>
          <div className='nav-bg'/>
          <div className='nav-left'>
            <Link tabIndex='1' className='nav-item logo-nav' to='/'>{TITLE}</Link>
          </div>
          <span className='nav-toggle' onClick={this.toggleMenu}>
            <a className='nav-item' href='javascript: ;'>
              <span className='icon'>
                <i className='fa fa-bars'></i>
              </span>
            </a>
          </span>
          <div className='nav-right nav-menu'>
            <Link tabIndex='2' className='nav-item border c-white' to='/about'>{__`About Us`}</Link>
            <Link tabIndex='3' className='nav-item border c-red' to='/signup'>{__`Application Process`}</Link>
            <Link tabIndex='4' className='nav-item border c-yellow' to='/timeline'>{__`Hackathon Schedule`}</Link>
            <Link tabIndex='5' className='nav-item border c-blue' to='/faq'>{__`FAQ`}</Link>
          </div>
          <div className='nav-right'>
            <a className='nav-item' href='javascript: ;' onClick={this.toggleLocale}>{__`中文`}</a>
          </div>
        </header>
      </div>
    )
  }
}

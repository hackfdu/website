/**
 * Created by shuding on 8/4/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import DocumentTitle from 'react-document-title'

import { __, Space, TITLE } from '../common/const'

import About from './About'
import Signup from './Signup'
import Timeline from './Timeline'
import FAQ from './FAQ'
import Other from './Other'

import SmoothScroll from 'smoothscroll-polyfill'
SmoothScroll.polyfill()

export default class extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.scrollTo()
    window.updateLocaleIndex = () => {
      this.forceUpdate()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.scrollTo(nextProps.params.section)
  }

  scrollTo(section) {
    setTimeout(() => {
      if (!section || !this.refs[section]) {
        document.body.scrollIntoView({ behavior: 'smooth' })
        return
      }
      ReactDOM.findDOMNode(this.refs[section]).scrollIntoView({ behavior: 'smooth' })
      //ReactDOM.findDOMNode(this.refs[section]).scrollIntoView()
    }, 200)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <DocumentTitle title={TITLE}>
        <div>
          <section className='hero is-fullheight main-title'>
            <div className='hero-body flex-vertical'>
              <h1 className='logo-title title'>HACK<br/>×<br/>FDU</h1>
              <div className='has-text-centered'>
                <h2 className='logo-subtitle subtitle'>{__`Fudan University’s Hackathon 2016`}</h2><br/>
                <h2 className='logo-subtitle subtitle'>{__`October 14${<sup>th</sup>} – 16${<sup>th</sup>} (Friday – Sunday)`}</h2><br/>
                <h2 className='logo-subtitle subtitle'>{__`ZhiHe Lobby GuangHua Building`}<br/>{__`Fudan University`}</h2><br/>
              </div>
              <div className='scroll-indicator'/>
            </div>
          </section>
          <About ref='about'/>
          <Signup ref='signup'/>
          <Timeline ref='timeline'/>
          <FAQ ref='faq'/>
          <Other ref='other'/>
        </div>
      </DocumentTitle>
    )
  }
}

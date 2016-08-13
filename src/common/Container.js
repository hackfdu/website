/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'react-fa'

import { locale } from './const'

import Navbar from './Navbar'
import Footer from './Footer'

let footerTop = 0

export default class extends Component {
  constructor() {
    super()
    this.scroll = this.scroll.bind(this)
    this.state = {
      fixedTop: false,
      darkBg: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll)
    window.addEventListener('touchmove', this.scroll)
    window.updateLocaleContainer = () => {
      this.forceUpdate()
    }
    window.addEventListener('resize', () => {
      let footer = ReactDOM.findDOMNode(this.refs.footer)
      footerTop = footer.offsetTop - 100
    })
    let footer = ReactDOM.findDOMNode(this.refs.footer)
    footerTop = footer.offsetTop - 100
  }

  scroll(event) {
    let scrollTop = event.srcElement.body.scrollTop
    let fixedTop = scrollTop >= 200
    if (fixedTop !== this.state.fixedTop) {
      this.setState({ fixedTop })
    }
    let darkBg = scrollTop >= footerTop
    if (darkBg !== this.state.darkBg) {
      this.setState({ darkBg })
    }
  }

  render() {
    return (
      <div className={`locale-${locale()}`}>
        <Navbar fixedTop={this.state.fixedTop} darkBg={this.state.darkBg}/>
        {this.props.children}
        <section className='hero'>
          <div className='hero-body'>
            <div className='container'>
              <nav className="level is-mobile">
                <div className="level-item has-text-centered">
                  <p className="heading">Facebook</p>
                  <p className="icon is-large">
                    <Icon name='facebook'/>
                  </p>
                </div>
                <div className="level-item has-text-centered">
                  <p className="heading">Twitter</p>
                  <p className="icon is-large">
                    <Icon name='twitter'/>
                  </p>
                </div>
                <div className="level-item has-text-centered">
                  <p className="heading">WeChat</p>
                  <p className="icon is-large">
                    <Icon name='wechat'/>
                  </p>
                </div>
                <div className="level-item has-text-centered">
                  <p className="heading">Weibo</p>
                  <p className="icon is-large">
                    <Icon name='weibo'/>
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </section>
        <Footer ref='footer'/>
      </div>
    )
  }
}

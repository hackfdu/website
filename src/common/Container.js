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

import wechatLogo from '../style/image/logo-wechat.jpg'

let footerTop = 0

const animationSize = 40
let animationStarted = false
let animationWidth, animationHeight
let animationStatus = []

function setAnimation(canvas, ctx) {
  animationWidth = canvas.width = window.innerWidth * 2
  animationHeight = canvas.height = window.innerHeight * 2

  for (let i = 0, _i = 0; i < animationHeight; i += animationSize, _i++) {
    animationStatus[_i] = []
    for (let j = 0, _j = 0; j < animationWidth; j += animationSize, _j++) {
      animationStatus[_i][_j] = 1
      if (Math.random() < 0.02) {
        animationStatus[_i][_j] *= -1
      }
    }
  }

  animationStatus[0][0] = -1

  if (!animationStarted) {
    animationStarted = true
    function tick() {
      for (let i = 0, _i = 0; i < animationHeight; i += animationSize, _i++) {
        for (let j = 0, _j = 0; j < animationWidth; j += animationSize, _j++) {
          if (Math.random() < 0.01) {
            animationStatus[_i][_j] *= -1
          }
          if (_i) {
            animationStatus[_i][_j] *= animationStatus[_i - 1][_j]
            animationStatus[_i - 1][_j] *= -1
          }
          if (_j) {
            animationStatus[_i][_j] *= animationStatus[_i][_j - 1]
          }
          ctx.fillStyle = animationStatus[_i][_j] > 0 ? '#222' : '#333'
          ctx.fillRect(j, i, animationSize, animationSize)
        }
      }
    }
    setInterval(tick, 150)
  }
}

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
    // let canvas = ReactDOM.findDOMNode(this.refs.canvas)
    // setAnimation(canvas, canvas.getContext('2d'))

    window.addEventListener('scroll', this.scroll)
    window.addEventListener('touchmove', this.scroll)
    window.updateLocaleContainer = () => {
      this.forceUpdate()
    }
    window.addEventListener('resize', () => {
      let footer = ReactDOM.findDOMNode(this.refs.footer)
      footerTop = footer.offsetTop - 100
      // setAnimation(canvas)
    })
    let footer = ReactDOM.findDOMNode(this.refs.footer)
    footerTop = footer.offsetTop - 100
  }

  scroll(event) {
    let scrollTop = event.srcElement.body.scrollTop
    let fixedTop = scrollTop >= 100
    if (fixedTop !== this.state.fixedTop) {
      this.setState({ fixedTop })
    }
    let darkBg = scrollTop >= footerTop
    if (darkBg !== this.state.darkBg) {
      this.setState({ darkBg })
    }
  }

  render() {
    // <canvas className='bg-canvas' ref='canvas'/>
    return (
      <div className={`locale-${locale()}`}>
        <img src={wechatLogo} style={{
          position: 'fixed',
          pointerEvents: 'none',
          left: '1000%',
          top: '-1000%',
        }} />
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

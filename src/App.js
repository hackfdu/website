import React, { Component } from 'react'
import { Router, Route, Link, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import FontFaceObserver from 'fontfaceobserver'

import logoSrc1 from './style/image/logo-24.png'
import logoSrc2 from './style/image/logo-24@mobile.png'

// Routers
import Index from './page/Index'

// Components
import Container from './common/Container'

export default class extends Component {
  componentDidMount() {
    let ABeeZee = new FontFaceObserver('ABeeZee', {
      weight: 400
    })
    let Montserrat = new FontFaceObserver('Montserrat', {
      weight: 700
    })

    ABeeZee.load().then(function () {
      document.body.className += ' abeezee'
    })

    Montserrat.load().then(function () {
      document.body.className += ' montserrat'
    })

    let logoObserver1 = new Image
    logoObserver1.onload = () => {
      document.body.className += ' logo1-loaded'
    }
    logoObserver1.src = logoSrc1

    let logoObserver2 = new Image
    logoObserver2.onload = () => {
      document.body.className += ' logo2-loaded'
    }
    logoObserver2.src = logoSrc2
  }

  render() {
    return (
      <Router history={useRouterHistory(createHashHistory)({queryKey: false})}>
        <Route component={Container}>
          <Route path='/(:section)' component={Index}/>
        </Route>
      </Router>
    )
  }
}

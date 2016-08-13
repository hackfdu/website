import React, { Component } from 'react'
import { Router, Route, Link, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

// Routers
import Index from './page/Index'

// Components
import Container from './common/Container'

export default class extends Component {
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

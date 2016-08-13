/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'

import { __, Space, TITLE } from '../common/const'

import host from '../style/image/host.png'
import host1 from '../style/image/host-1.png'
import host2 from '../style/image/host-2.png'
import host3 from '../style/image/host-3.png'

export default class extends Component {
  render() {
    return (
      <section className='section hero is-fullheight'>
        <div className='container'>
          <h2 className='title'>{__`Hosts`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='columns  has-text-centered'>
              <div className='column is-one-third'>
                <img className='sponsor-logo' src={host1} style={{padding: 13}}/>
                <p>{__`The Committee of Youth League at Fudan University`}</p>
              </div>
              <div className='column is-one-third'>
                <img className='sponsor-logo' src={host2}/>
                <p>{__`The School of Computer Science at Fudan University`}</p>
              </div>
              <div className='column is-one-third'>
                <img className='sponsor-logo' src={host3}/>
                <p>{__`Fudan University’s Student Union`}</p>
              </div>
            </div>
          </div>
          <h2 className='title'>{__`Event Organizer`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='has-text-centered'>
              <img className='sponsor-logo' src={host}/>
              <p>{__`葡萄科技技术（深圳）有限公司`}</p>
            </div>
          </div>
          <h2 className='title'>{__`Sponsors`}</h2>
          <div className='content space-bottom-a-lot'>
            <p>{__`We are currently in progress working with sponsor companies. We will release their brands soon!`}</p>
            <p>{__`If your company would like to sponsor us, please email us at sponsor@hackx.org! We would love to have you here at {T}!`}</p>
          </div>
        </div>
      </section>
    )
  }
}

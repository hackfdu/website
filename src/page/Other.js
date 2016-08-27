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
import fddn from '../style/image/fddn.png'

export default class extends Component {
  render() {
    return (
      <section className='section hero is-fullheight'>
        <div className='container'>
          <h2 className='title'>{__`Hosts`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='columns  has-text-centered'>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={host1} style={{padding: 13}}/>
                <p className='sponsor-text'>{__`The Committee of Youth League at Fudan University`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={host2}/>
                <p className='sponsor-text'>{__`The School of Computer Science at Fudan University`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={host3}/>
                <p className='sponsor-text'>{__`Fudan University’s Student Union`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={fddn}/>
                <p className='sponsor-text'>{__`Fudan University Developer’s Network`}</p>
              </div>
            </div>
          </div>
          <h2 className='title'>{__`Event Organizer`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='has-text-centered'>
              <img className='sponsor-logo' src={host}/>
              <p className='sponsor-text'>{__`Grape Tech (Shenzhen) LLC`}</p>
            </div>
          </div>
          <h2 className='title'>{__`Sponsors`}</h2>
          <div className='content space-bottom-a-lot'>
            <p>{__`We are currently in progress working with sponsor companies. We will release their brands soon!`}</p>
            <p>{__`If your company would like to sponsor us, please email us at ${<a href='mailto:sponsor@grapetech.org'>sponsor@grapetech.org</a>}! We would love to have you here at {T}!`}</p>
          </div>
        </div>
      </section>
    )
  }
}

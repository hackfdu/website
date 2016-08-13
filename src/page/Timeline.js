/**
 * Created by shuding on 7/23/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'

import { TITLE, Space, Compress, __ } from '../common/const'

const TTime = props => <div className='tl-1'>{props.children}</div>
const TNote = props => {
  if (props.square) {
    return <div className='tl-2 tl-square'/>
  } else if (props.dot) {
    return <div className='tl-2 tl-dot'/>
  } else if (props.line) {
    return <div className={`tl-2 tl-line tl-${props.color || 'red'}${props.long ? ' tl-long' : ''}`}/>
  }
  return <div className='tl-2'/>
}
const THead = props => <div className='tl-3'>{props.children}</div>

class Title extends Component {
  render() {
    return (
      <div className='tl'>
        <TTime/>
        <TNote square={true}/>
        <THead><h4>{this.props.children}</h4></THead>
      </div>
    )
  }
}

class Line extends Component {
  render() {
    let color = this.props.color || ['red', 'blue', 'yellow'][~~(Math.random() * 3)]
    return (
      <div className='tl'>
        <TTime/>
        <TNote line={true} color={color} long={this.props.long}/>
        <THead>{this.props.children}</THead>
      </div>
    )
  }
}

class Dot extends Component {
  render() {
    return (
      <div className='tl'>
        <TTime>{this.props.time}</TTime>
        <TNote dot={true}/>
        <THead>{this.props.children}</THead>
      </div>
    )
  }
}

class Empty extends Component {
  render() {
    return (
      <div className='tl'>
        <TTime/>
        <TNote/>
        <THead>{this.props.children}</THead>
      </div>
    )
  }
}

export default class extends Component {
  render() {
    return (
      <section className='section hero is-fullheight tl-section'>
        <div className='container'>
          <h2 className='title'>{__`Hackathon Schedule`}</h2>
          <div className='columns tl-box'>
            <div className='column is-one-third'>
              <Title>{__`September 26${<sup>th</sup>} (Monday)`}</Title>
              <Line long={true}>{__`Various Company Presentations`}<br/>{__`API/SDK Training Session`}</Line>
              <Title>{__`October 13${<sup>th</sup>} (Thursday)`}</Title>
              <Empty>{__`Hackathon is Ready!`}</Empty>
              <br/>
              <Title>{__`October 14${<sup>th</sup>} (Friday)`}</Title>
              <Dot time='17:30'>{__`Event Check-in and Setup`}</Dot>
              <Line/>
              <Dot time='19:00'>{__`${TITLE} Kickoff Ceremony`}</Dot>
              <Line/>
              <Dot time='21:00'>{__`Sponsor Company’s Tech Q&A Session`}</Dot>
              <Line/>
              <Dot time='23:00'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line>{__`(Past Night Hacking Time)${<Compress/>}`}</Line>
            </div>
            <div className='column is-one-third'>
              <Title>{__`October 15${<sup>th</sup>} (Saturday)`}</Title>
              <Dot time='7:30'>{__`Breakfast`}</Dot>
              <Line/>
              <Dot time='8:30'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line/>
              <Dot time='12:00'>{__`Lunch`}</Dot>
              <Line/>
              <Dot time='13:00'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line/>
              <Dot time='17:30'>{__`Dinner`}</Dot>
              <Line/>
              <Dot time='19:00'>{__`Sponsor Company’s Tech Q&A Session`}</Dot>
              <Line/>
              <Dot time='21:00'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line/>
              <Dot time='23:30'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line>{__`(Past Night Hacking Time)${<Compress/>}`}</Line>
            </div>
            <div className='column is-one-third'>
              <Title>{__`October 16${<sup>th</sup>} (Sunday)`}</Title>
              <Dot time='7:30'>{__`Breakfast`}</Dot>
              <Line/>
              <Dot time='8:30'>{__`Student Hacking Wrap-up Time`}</Dot>
              <Line/>
              <Dot time='11:00'>{__`Project Submission Deadline`}</Dot>
              <Line/>
              <Dot time='12:00'>{__`Lunch`}</Dot>
              <Line/>
              <Dot time='12:30'>{__`Exhibition Prep and Break`}</Dot>
              <Line/>
              <Dot time='15:00'>{__`Project Exhibition and Judging`}</Dot>
              <Line/>
              <Dot time='17:30'>{__`Closing and Awarding Ceremony`}</Dot>
              <Line/>
              <Dot/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

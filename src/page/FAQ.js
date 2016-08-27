/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'

import { Space, TITLE, __ } from '../common/const'

class Box extends Component {
  constructor() {
    super()
    this.state = {
      expand: false
    }

    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      expand: !this.state.expand
    })
  }
  render() {
    return (
      <div className={`faq-box ${this.state.expand ? 'expand' : '' }`}>
        <h4 onClick={this.toggle}>
          <i className='fa fa-caret-right'></i>
          {this.props.title}
        </h4>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default class extends Component {
  componentDidMount() {
    //let map = new BMap.Map('map')
    //map.centerAndZoom('复旦大学光华楼', 15)
    // fk.....
    (new AMap.Marker({
      position: [121.505257, 31.3001]
    })).setMap(new AMap.Map('map',{
      resizeEnable: true,
      zoomEnable: false,
      zoom: 15,
      center: [121.503584, 31.296426]
    }))
  }

  render() {
    return (
      <section className='section hero is-fullheight'>
        <div className='container'>
          <h2 className='title'>{__`FAQ`}</h2>
          <div className='content tile is-ancestor'>
            <div className='tile is-vertical is-6'>
              <Box title={
                <span>{__`What is {T}?`}</span>
              }>
                <p>
                  {__`{T} is hosted by Fudan University and created by Grape Tech (Shenzhen) LLC. This hackathon inspires students to focus on “learning by doing” and “working as a team”. Student developers could hack whatever their heart desire. You could develop across software, hardware, applications, games and any sorts of extension. Our goal is to encourage open-source technology expansion and provide hands-on learning experience for students to use APIs/SDKs.`}
                </p>
              </Box>
              <Box title={
                <span>{__`Does it cost anything to participate in {T}?`}</span>
              }>
                <p>{__`{T} is free for all accepted students! We will take care of everything including a place to have a rest at night. In addition, we will provide transportations’ compensation for students from outside of Shanghai City to join the hackathon. Come and join us now!!!`}</p>
              </Box>
              <Box title={
                <span>{__`Where exactly is {T} hosting?`}</span>
              }>
                <p>{__`The major event site will be at the main lobby (ZhiHe Lobby) at Fudan University Guanghua Building 2${<sup>nd</sup>} Floor. The address is No. 220 Handan Road, Yangpu District, Shanghai.`}</p>
              </Box>
              <Box title={__`Who can apply for {T}?`}>
                <p>{__`{T} will be available for any kinds of students to apply across China. After submitting your application, we will select the best 300 student talents from the application pool to participate in {T}.`}</p>
                <p>{__`We firmly believe that Innovation is a combination of arts and sciences. We are looking for the best talents across different majors. No matter your major is in general arts, mathematics, engineering field, we welcome you to apply for {T}!`}</p>
              </Box>
              <Box title={__`What kind of information do I need to include in my application?`}>
                <p>{__`Besides your basic personal information, we will look forward to seeing your resume (PDF/Word format is preferred). If you have any other kind of information such as your Github username, LinkedIn profile, WeChat username, you are welcome to submit as well!`}</p>
              </Box>
            </div>
            <div className='tile is-vertical is-6'>
              <Box title={__`What if I do not know how to code?`}>
                <p>{__`{T} is the perfect time and place to learn! No one is born to code perfectly. We will encourage starters to join us and learn from the technical masters within their development fields. Of course, we would also suggest you to take advantage of some great learning tools such as Jisuanke, Code Academy, Udacity, Coursera, etc.`}</p>
              </Box>
              <Box title={__`After my application get accepted, how can I build a team?`}>
                <p>{__`{T} encourages students to build team by themselves. During your application process, you will be asked about who you will apply together as a team. If you did come up with a team in advance, please fill out their name and basic information. We will take consideration of every single application and pick the best student applicants to join us!`}</p>
                <p>{__`Please make sure each team allows two to five students together. We will provide selected applicants opportunity to team up online, but if you cannot find a team before the hackathon, we will also offer you a chance for team building and brain storming after the kick-off ceremony.`}</p>
              </Box>
              <Box title={__`What should I bring during {T}?`}>
                <p>{__`All you need to bring is your ID card, student ID, laptop, change of clothes and toiletries. Of course, we will provide you meals, drinks, Wifi and power as well as rest and entertainment areas. We would provide out-of-town students blankets for sleeping, but to prevent overwhelming demand, we suggest you to prepare a sleeping bag or blanket for yourself.`}</p>
              </Box>
              <Box title={__`What I can win at {T}?`}>
                <p>{__`Accepted students not only have chance to win some great prizes and technology gadgets, but also receive awards from sponsor companies or even internship/full-time job offers. Nothing is impossible here, come and join us!!!`}</p>
              </Box>
              <Box title={__`What if I have other questions?`}>
                <p>{__`If you have any other questions, please email us at ${<a className='link-invert' href='mailto:ask@grapetech.org'>ask@grapetech.org</a>}.`}</p>
              </Box>
            </div>
          </div>
          <div id='map' style={{height: 400, width: '100%', margin: '100px auto 0'}}/>
        </div>
      </section>
    )
  }
}

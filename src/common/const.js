/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import i18n from '../i18n'

// [en, zh]
let _locale = 1

const getLocale = () => {
  // Init locale
  if (navigator) {
    if (/^zh/.test(navigator.language)) {
      _locale = 1
    } else {
      _locale = 0
    }
  }

  if (localStorage && localStorage.getItem) {
    try {
       let locale = localStorage.getItem('hackfdu_locale')
       if (locale) {
          _locale = (+locale) || 0
       }
    } catch (err) {
      // emmm..
    }
  }
}

const setLocale = locale => {
  if (localStorage && localStorage.setItem) {
    try {
      localStorage.setItem('hackfdu_locale', locale)
    } catch (err) {
      // emmm..
    }
  }
}

getLocale()

// Exports

export const TITLE = 'HACK×FDU'

export const Space =
  () => <span className='space'/>

export const Compress =
  () => <span className='compress'/>

export const __ = (template, ...args) => {
  const pharse = template.join('{}')
  const _template = (!_locale || !i18n[pharse]) ? pharse : i18n[pharse]

  return (
    _template
      .split('{}')
      .reduce((res, part, i) => [
        ...res,
        i? args.splice(0, 1)[0]: null,
        ...part
          .split('{ }')
          .reduce((res, part, i) =>
            [
              ...res,
              i ? <Space /> : null,
              part.split('{T}').join(TITLE)
            ]
          , []),
      ], [])
      .filter(part => part)
  )
}

// Both get & set
export const locale = (newLocale=null) => {
  _locale = newLocale === null ? _locale : newLocale
  setLocale(_locale)
  return _locale
}

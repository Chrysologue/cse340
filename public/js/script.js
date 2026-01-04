import {handleToggle, handleResize} from './utils.mjs';

const header = document.querySelector('header')
const humberger = document.querySelector('.humberger-lines')
const body = document.querySelector('body')

handleToggle(header, humberger, body)
handleResize(header, body)
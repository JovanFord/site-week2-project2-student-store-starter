import React from 'react'
import { BrowserRouter as Route, Routes, Link, } from 'react-router-dom'
import "./Logo.css"

const Logo = () => {
  return (
    <i>
      <img className="logo" src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"/>
    </i>
  )
}

export default Logo
import React from "react"

import Navbar from 'Components/Navbar/Navbar'
import Content from 'Components/Content/Content'

import style from './Main.less'

export default function Main() {
  return(
    <div>
      <Navbar />
      <hr/>
      <Content />      
    </div>
  );
}

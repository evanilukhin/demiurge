import React from "react"

import style from './wrapAsTab.less'

const wrapAsTab = (PassedComponent) =>
  ({header, ...props}) =>
      <div className = {style.container}>
        <div className = {style.header}> {header} </div>
        <div className = {style.body}>
          <PassedComponent  {...props}/>
        </div>
      </div>


export default wrapAsTab

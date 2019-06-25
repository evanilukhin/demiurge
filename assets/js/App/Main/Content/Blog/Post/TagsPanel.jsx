import React from "react"
import style from './TagsPanel.less'
import {Link} from 'react-router-dom'

export default function TagsPanel({tags}) {
  return(
    <div className={style.main}>
      { tags.map( tag =>
          <Link
            className={style.link}
            activeClassName={style.active_link}
            to={{patnname: "/posts", search: "?tag=" + tag}}
          >
            {"#" + tag}
          </Link>
      ) }
    </div>
  );
}

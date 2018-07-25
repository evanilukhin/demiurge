import React from "react"

export default function Skills({skills}) {
  const programming_languages = skills.programming_languages.map((language) =>
      <div key={language.name}>
        <b>{language.name}:</b>
        <p>{language.comment}</p>
      </div>
  );
  const human_languages = skills.human_languages.map((language) =>
    <div key={language.name}>
      <b>{language.name}:</b>
      <p>{language.level}</p>
    </div>
  );
  return(
    <div>
      <div key="programming_languages">
        <h4>Programing languages skills</h4>
        {programming_languages}
      </div>
      <hr/>
      <div key="human_languages">
        <h4>Human languages</h4>
        {human_languages}
      </div>
    </div>);
}

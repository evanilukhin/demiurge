import React from "react"

export default function Skills({skills}) {
  const skill_array = skills.map((skill) =>
      <div key={skill.category}>
        <p><b>{skill.category} : </b>{skill.text}</p>
      </div>
  );
  return(
    <div>
      {skill_array}
    </div>);
}

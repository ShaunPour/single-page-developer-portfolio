const SkillCard = (props) => {
    return (
        <div className={props.skills.skill}>
          <h3 className="card-title">{props.skills.skill}</h3>
          <p className="experience">{props.skills.years} years experience</p>
        </div>
    )
}

export default SkillCard;
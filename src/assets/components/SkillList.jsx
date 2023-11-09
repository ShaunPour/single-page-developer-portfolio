import SkillCard from './SkillCard'
import skills from '../data/skills';

const SkillList = () => {
    return (
        <div className='skills'>
            {skills.map((skills) => {
                return (
                    <div className='col' key={skills.id}>
                        <SkillCard skills = {skills}/>
                    </div>
                );
            }
            )}
      </div>
    )
}

export default SkillList;
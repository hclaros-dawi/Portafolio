import { useLanguage } from '@/context/language'
import repoIcon from '@/assets/icons/repo.svg'
import '@/styles/projectsDialog/project.css'

export default function Project ({ orderProjects, currentProject }) {
	const { translations, language } = useLanguage()

	return (
		<section>
			<h3 className='project-title'>
				<a href={orderProjects[currentProject].live} target='_blank' rel='noopener noreferrer' >
					{orderProjects[currentProject].name}
				</a>
			</h3>
			<p className='project-description'>
				{orderProjects[currentProject].description.long[language]}
			</p>

			<ul className='project-technologies'>
  {orderProjects[currentProject].techs.map((tech, index) => {
    if (!tech) return null // <-- evita errores si tech es undefined

    const hasContrast = tech?.contrast ?? false
    const backgroundColor = tech?.color ?? 'var(--primary-color)'
    const iconSrc = tech?.image !== false ? `/skills/${tech.name?.toLowerCase()}.svg` : null

    return (
      <li
        key={index}
        className={`project-skill ${hasContrast ? 'skill-contrast' : ''}`}
        style={{ backgroundColor }}
      >
        {iconSrc && <img src={iconSrc} alt={`${tech.name} icon`} />}
        {tech?.name}
      </li>
    )
  })}
</ul>

			<p className='project-links'>
				{
					orderProjects[currentProject]?.repo && (
						<a href={orderProjects[currentProject].repo} target='_blank' rel='noopener noreferrer' className='code-link'>
							<img src={repoIcon} alt='' />
							{translations.projects.code}
						</a>
					)
				}
			</p>
		</section>
	)
}

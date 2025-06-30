import { GmailIcon, GithubIcon } from '@/assets/icons/social-links'
import { useLanguage } from '@/context/language'
import '@/styles/social.css'

export default function Social () {
	const { translations } = useLanguage()
	const socialInfo = [
		{
			name: 'Github',
			link: 'https://github.com/hclaros-dawi',
			user: 'hclaros-dawi',
			color: '#181717',
			icon: <GithubIcon />,
			invert: true
		},
		{
			name: 'Hotmail',
			link: 'hidemiclaros@hotmail.com',
			user: 'hidemi claros campos',
			color: '#EA4335',
			icon: <GmailIcon />
		}
	]

	return (
		<section className='section social'>
			<h2 className='hidden'>{translations.social.title}</h2>

			<nav>
				<ul className='social-container'>
					{socialInfo.map((social, index) => {
						return (
							<li key={index} className={`social-link ${social.invert ? 'invert' : ''} `} style={{ '--bg-color': social.color, '--animation-delay': `${index * 0.1}s` }} title={social.name} >
								<a href={social.link} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
									{social.icon}
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		</section>
	)
}

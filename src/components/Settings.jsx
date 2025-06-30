import '@/styles/settings.css'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/language'

import LanguageIcon from '@/assets/settings/language.svg'
import DarkModeIcon from '@/assets/settings/darkmode.svg'
import LightModeIcon from '@/assets/settings/lightmode.svg'

export default function Settings () {
	const darkModeLocal = localStorage.getItem('darkmode')
		? localStorage.getItem('darkmode') === 'true'
		: true

	const { translations, language, changeLanguage } = useLanguage()
	const [darkmode, setDarkmode] = useState(darkModeLocal)

	useEffect(() => {
		document.documentElement.classList.toggle('darkmode', darkmode)
		localStorage.setItem('darkmode', darkmode)
	}, [darkmode])

	return (
		<nav className='section settings'>
			<ul>
				<li style={{ '--animation-delay': '0.1s' }}>
					<button
						className='sound-btn'
						onClick={() => setDarkmode(!darkmode)}
						title={`${translations.settings[darkmode ? 'lightmode' : 'darkmode']}`}>
						<img src={DarkModeIcon} alt='Dark Mode' className={`${darkmode ? '' : 'img-hidden'}`} data-sound='switch-on.mp3' />
						<img src={LightModeIcon} alt='Light Mode' className={`${darkmode ? 'img-hidden' : ''}`} data-sound='switch-off.mp3' />
					</button>
				</li>

				<li style={{ '--animation-delay': '0.2s' }}>
					<button
						onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
						title={`${translations.settings[language === 'es' ? 'english' : 'spanish']}`}
						className='language-btn'>
						<img src={LanguageIcon} alt={`${language === 'es' ? 'English' : 'Español'}`} />
						<span className={`${language === 'es' ? 'hidden' : ''}`} data-sound='switch-on.mp3'>ES</span>
						<span className={`${language === 'es' ? '' : 'hidden'}`} data-sound='switch-off.mp3'>EN</span>
					</button>
				</li>
			</ul>
		</nav>
	)
}

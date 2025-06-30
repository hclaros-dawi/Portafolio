import arrowIcon from '@/assets/icons/arrow.svg'
import '@/styles/projectsDialog/images.css'
import { useEffect, useState } from 'react'

export default function Images({ currentProject, orderProjects }) {
	const [currentImg, setCurrentImg] = useState(0)

	const images = orderProjects[currentProject]?.images || []
	const isCarouselActive = images.length > 0

	useEffect(() => {
		setCurrentImg(0)
	}, [currentProject])

	function handleWheel(e) {
		if (!isCarouselActive || orderProjects[currentProject].scroll) return
		changueCurrentImg(currentImg + (e.deltaY > 0 ? 1 : -1))
	}

	function changueCurrentImg(number) {
		if (number > images.length - 1 || number < 0) return
		document.querySelectorAll('.project-image').forEach(projectImg => {
			projectImg.classList.remove('slide-left', 'slide-right')
			if (projectImg.id !== `project-image-${number}`) {
				projectImg.classList.add(Number(projectImg.id.replace('project-image-', '')) < number ? 'slide-left' : 'slide-right')
			}
		})
		setCurrentImg(number)
	}

	return (
		<section>
			<div
				className={`project-imgs-container ${!isCarouselActive ? 'carousel-disabled' : ''}`}
				onWheel={handleWheel}
			>
				<article>
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Project ${orderProjects[currentProject].name} preview #${index + 1}`}
							className='project-image'
							loading='lazy'
							id={`project-image-${index}`}
						/>
					))}
				</article>

				<button
					onClick={() => isCarouselActive && changueCurrentImg(currentImg - 1)}
					disabled={!isCarouselActive || currentImg < 1}
					className='prev-img'
				>
					<img src={arrowIcon} alt='arrow' className='arrow-left' />
				</button>
				<button
					className='next-img'
					onClick={() => isCarouselActive && changueCurrentImg(currentImg + 1)}
					disabled={!isCarouselActive || currentImg === images.length - 1}
				>
					<img src={arrowIcon} alt='arrow' />
				</button>
			</div>

			<ul className='images-slider'>
				{images.map((_, index) => (
					<li
						key={index}
						className={currentImg === index ? 'selected-p' : ''}
						onClick={() => isCarouselActive && changueCurrentImg(index)}
					></li>
				))}
			</ul>
		</section>
	)
}

import { useState } from 'react'
import Icon from '../../components/IconButton'
import rainOn from '../../assets/Icons/rainLogoSelected.png'
import rainOff from '../../assets/Icons/rainUnselect.png'

type RainSfxProps = {
	audio: HTMLAudioElement
}
export default function RainSfx({ audio }: RainSfxProps) {
	const [isPlaying, setIsPlaying] = useState(false)
	function togglePlaying(isPlaying: boolean) {
		setIsPlaying(isPlaying)
		if (isPlaying) {
			audio.play()
			audio.loop = true
		} else {
			audio.pause()
		}
	}

	return (
		<div>
			<Icon
				activeIcon={rainOn}
				inActiveIcon={rainOff}
				isActive={isPlaying}
				onChange={togglePlaying}
				size={55}
			/>
		</div>
	)
}

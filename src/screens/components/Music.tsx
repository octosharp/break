import { useState } from 'react'

import Icon from '../../components/IconButton'
import musicOn from '../../assets/Icons/musicon.png'
import musicOff from '../../assets/Icons/musicOff.png'

type MusicProps = {
	audio: HTMLAudioElement
}
export default function Music({ audio }: MusicProps) {
	const [isPlaying, setIsPlaying] = useState(true)
	function togglePlaying(isPlaying: boolean) {
		if (isPlaying) {
			audio.play()
			audio.loop = true
		} else {
			audio.pause()
		}
		setIsPlaying(isPlaying)
	}
	return (
		<Icon
			activeIcon={musicOn}
			inActiveIcon={musicOff}
			isActive={isPlaying}
			onChange={togglePlaying}
		/>
	)
}

import { useState } from 'react'

import fireOffImg from '../../assets/Icons/fireLogoUnSelect.png'
import fireOnImg from '../../assets/Icons/fireLogoSelected.png'
import Icon from '../../components/IconButton'

type FireSfxProps = {
	audio: HTMLAudioElement
}
export default function FireSfx({ audio }: FireSfxProps) {
	const [isPlaying, setIsPlaying] = useState(false)

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
			activeIcon={fireOnImg}
			inActiveIcon={fireOffImg}
			isActive={isPlaying}
			onChange={togglePlaying}
		/>
	)
}

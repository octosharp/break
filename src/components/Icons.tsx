import { useState } from 'react'

type IconsProps = {
	img1: string
	img2: string
}

export default function Icons({ img1, img2 }: IconsProps) {
	const [isPlaying, setIsPlaying] = useState(false)
	function togglePlayPause() {
		setIsPlaying(!isPlaying)
	}
	return (
		<button onClick={togglePlayPause} className="mx-3">
			{isPlaying ? (
				<img src={img1} height={30} />
			) : (
				<img src={img2} height={30} className="" />
			)}
		</button>
	)
}

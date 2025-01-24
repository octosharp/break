import { useState } from 'react'
import './button.css'
type ButtonProps = {
	text: string
	anotherText?: string
	onclick: () => void
	width: number
	height: number
	size: number
	padding?: number
}
export default function Button({
	text,
	anotherText,
	onclick,
	width,
	height,
	size,
	padding = 10,
}: ButtonProps) {
	const [isPlaying, setIsPlaying] = useState(false)
	function toggleStartStop() {
		setIsPlaying(!isPlaying)
		onclick()
	}
	return (
		<div className="flex items-end">
			<button
				className="button text-white text-2xl flex justify-center items-center"
				onClick={toggleStartStop}
				style={{
					width: `${width}rem`,
					height: `${height}rem`,
					fontSize: `${size}rem`,
					padding: `${padding}px`,
				}}
			>
				{isPlaying ? <h1> {text}</h1> : <h1> {anotherText}</h1>}
			</button>
		</div>
	)
}

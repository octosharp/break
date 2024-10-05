import { useState } from 'react'
import './button.css'
type ButtonProps = {
	text: string
	anotherText?: string
}
export default function Button({ text, anotherText }: ButtonProps) {
	const [isPlaying, setIsPlaying] = useState(false)
	function toggleStartStop() {
		setIsPlaying(!isPlaying)
	}
	return (
		<div className="block">
			<div>
				<button
					className="button text-white text-2xl "
					onClick={toggleStartStop}
				>
					{isPlaying ? <h1> {text}</h1> : <h1> {anotherText}</h1>}
				</button>
			</div>
		</div>
	)
}

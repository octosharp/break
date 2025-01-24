import './inputBar.css'
import InputBg from '../assets/background/inputbg.png'

type InputBarProps = {
	value: number
}
export default function InputBar({ value }: InputBarProps) {
	return (
		<div>
			<input
				type="text"
				className="input bg-no-repeat bg-contain px-3 text-black"
				style={{ backgroundImage: `url(${InputBg})` }}
				value={value}
			/>
		</div>
	)
}

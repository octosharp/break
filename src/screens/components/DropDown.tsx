import Chevron from '../../assets/Icons/chevron.png'
import IconButton from '../../components/IconButton'
import { useState } from 'react'
import SliderBar from '../../components/SliderBar'
import fireHandle from '../../assets/Icons/fireHandle.png'
import rainHandle from '../../assets/Icons/rainHandle.png'
import musicHandle from '../../assets/Icons/musicHandle.png'

type DropDownProps = {
	fireAudio: HTMLAudioElement
	rainAudio: HTMLAudioElement
	musicAudio: HTMLAudioElement
}
export default function DropDown({
	fireAudio,
	rainAudio,
	musicAudio,
}: DropDownProps) {
	const [dropdownState, setDropdownState] = useState({ open: false })
	const [fireVolume, setFireVolume] = useState(100)
	const [rainVolume, setRainVolume] = useState(100)
	const [musicVolume, setMusicVolume] = useState(100)
	const handleDropdownClick = () =>
		setDropdownState({ open: !dropdownState.open })

	function fireHandleVolume(vol: number) {
		setFireVolume(vol)
		fireAudio.volume = vol / 100
		if (vol === 10) {
			fireAudio.volume = 0
		}
	}
	function rainHandleVolume(vol: number) {
		setRainVolume(vol)
		rainAudio.volume = vol / 100
		if (vol === 10) {
			rainAudio.volume = 0
		}
	}
	function musicHandleVolume(vol: number) {
		setMusicVolume(vol)
		musicAudio.volume = vol / 100
		if (vol === 10) {
			musicAudio.volume = 0
		}
	}
	return (
		<div>
			<IconButton
				inActiveIcon={Chevron}
				size={20}
				onChange={handleDropdownClick}
			/>
			{dropdownState.open && (
				<div>
					<ul className="absolute mt-5 right-[4.6rem] w-[12.7rem] pt-8 flex items-start   ">
						<SliderBar
							onChange={fireHandleVolume}
							value={fireVolume}
							color={'#EA702E'}
							handleImg={fireHandle}
							isVertical
							steps={10}
						/>
						<SliderBar
							onChange={rainHandleVolume}
							value={rainVolume}
							color={'#ACDDEA'}
							handleImg={rainHandle}
							isVertical
							steps={10}
						/>
						<SliderBar
							onChange={musicHandleVolume}
							value={musicVolume}
							color={'#BA7A72'}
							handleImg={musicHandle}
							isVertical
							steps={10}
						/>
					</ul>
				</div>
			)}
		</div>
	)
}

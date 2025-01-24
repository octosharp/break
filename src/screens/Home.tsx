import Timer from './components/Timer'
import FireSfx from './components/FireSfx'
import RainSfx from './components/RainSfx'
import Music from './components/Music'
// import MusicPlayer from './MusicPlayer'

import preLoadImages from '../components/preLoadImages'
import DropDown from './components/DropDown'
import RainSound from '../assets/Sounds/rain-sound-188158.mp3'
import FireSound from '../assets/Sounds/fire-sound-222359.mp3'
import img1 from '../assets/wallpapers/fifth.gif'
import img2 from '../assets/wallpapers/forth.gif'
import img3 from '../assets/wallpapers/giphy.gif'
import img4 from '../assets/wallpapers/rain.gif'
import img5 from '../assets/wallpapers/sec.gif'

import img16 from '../assets/Icons/settings.png'
import img14 from '../assets/background/musicPlayerBg.png'
import img15 from '../assets/background/settingBg.png'
import img17 from '../assets/background/inputbg.png'

const preLoadImgList = [
	img1,
	img2,
	img3,
	img4,
	img5,

	img14,
	img15,
	img16,
	img17,
]

import { useState } from 'react'

import Narisauna from '../assets/Sounds/Narisawna-Tribal Rain(Official).mp3'

export default function Home() {
	const Demo = new Audio(Narisauna)
	const rainSound = new Audio(RainSound)
	const fireSound = new Audio(FireSound)

	const [audio, setAudio] = useState<HTMLAudioElement>(Demo)
	function setMusic(audio: HTMLAudioElement) {
		setAudio(audio)
	}
	const { imagesPreLoaded } = preLoadImages(preLoadImgList)
	if (!imagesPreLoaded) {
		return <h1>Pending</h1>
	}
	return (
		<div
			className="home bg-no-repeat bg-cover flex justify-center h-screen"
			style={{
				backgroundImage: `url(${img1}), url(${img2}), url(${img3}),url(${img4}) url(${img5}),`,
			}}
		>
			<div className="w-full  ">
				<div className=" w-full flex  items-center px-6 justify-end  h-[7%]">
					<FireSfx audio={fireSound} />
					<RainSfx audio={rainSound} />
					<DropDown fireAudio={fireSound} rainAudio={rainSound} />
				</div>
				<div className="flex justify-center  items-end h-[93%]">
					<Timer />
				</div>
			</div>
		</div>
	)
}

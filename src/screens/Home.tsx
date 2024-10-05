import Timer from './components/Timer'
import Button from '../components/Button'
import FireSfx from './components/FireSfx'
import RainSfx from './components/RainSfx'
import Music from './components/Music'
// import MusicPlayer from './MusicPlayer'
import MusicPlayer from './components/MusicPlayer'
import preLoadImages from '../components/preLoadImages'
import DropDown from './components/DropDown'
import RainSound from '../assets/Sounds/rain-sound-188158.mp3'
import FireSound from '../assets/Sounds/fire-sound-222359.mp3'
import img1 from '../assets/wallpapers/fifth.gif'
import img2 from '../assets/wallpapers/forth.gif'
import img3 from '../assets/wallpapers/giphy.gif'
import img4 from '../assets/wallpapers/rain.gif'
import img5 from '../assets/wallpapers/sec.gif'

import img6 from '../assets/Icons/musicPlayer.png'
import img7 from '../assets/Icons/toxicity img.jpg'
import img8 from '../assets/Icons/playBtn.png'
import img9 from '../assets/Icons/pauseBtn.png'
import img10 from '../assets/Icons/menuBtn.png'
import img11 from '../assets/Icons/forwardBtn.png'
import img12 from '../assets/Icons/backwardBtn.png'
import img13 from '../assets/Icons/handleMusicPlayer.png'
import img14 from '../assets/background/musicPlayerBg.png'

const preLoadImgList = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
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
					<Music audio={audio} />
					<DropDown
						fireAudio={fireSound}
						rainAudio={rainSound}
						musicAudio={audio}
					/>
				</div>
				<div className="flex justify-center items-end  h-[58%]">
					<div className="w-[60rem]  items-center">
						<Timer />
						<div className="flex justify-center">
							<div className="mx-6">
								<Button text="Start" anotherText="Stop" />
							</div>
							<div className="mx-6">
								<Button text="Reset" anotherText="Reset" />
							</div>
						</div>
					</div>
				</div>
				<div className=" w-[32rem] h-[35%]    ">
					<MusicPlayer handleAudio={setMusic} />
				</div>
			</div>
		</div>
	)
}

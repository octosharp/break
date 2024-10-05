import { useState, useEffect } from 'react'
import MusicItem, { type Music } from '../../components/MusicItem'
import SliderBar from '../../components/SliderBar'

import musicPlayer from '../../assets/Icons/musicPlayer.png'
import Img from '../../assets/Icons/toxicity img.jpg'
import playBtn from '../../assets/Icons/playBtn.png'
import pauseBtn from '../../assets/Icons/pauseBtn.png'
import menuBtn from '../../assets/Icons/menuBtn.png'
import forwardBtn from '../../assets/Icons/forwardBtn.png'
import backwardBtn from '../../assets/Icons/backwardBtn.png'
import handleMusicPlayer from '../../assets/Icons/handleMusicPlayer.png'
import musicPlayerBg from '../../assets/background/musicPlayerBg.png'

import Narisauna from '../../assets/Sounds/Narisawna-Tribal Rain(Official).mp3'
import Abhiman from '../../assets/Sounds/Abhiman - Albatross (Barahsinghe Acoustic Sessions).mp3'
import Sparsha from '../../assets/Sounds/Sparsha Sangeet.mp3'
import Toxicity from '../../assets/Sounds/Toxicity.mp3'
import Rain from '../../assets/Sounds/rain-sound-188158.mp3'
import Fire from '../../assets/Sounds/fire-sound-222359.mp3'

const musicList: Music[] = [
	{
		audio: new Audio(Narisauna),
		title: 'Narisauna',
		artist: 'Tribal Rain',
		cover: Img,
	},
	{
		audio: new Audio(Abhiman),
		title: 'Abhiman',
		artist: 'Albatross',
		cover: Img,
	},
	{
		audio: new Audio(Sparsha),
		title: 'Sparsha Sangeet',
		artist: 'Purna Rai',
		cover: Img,
	},
	{
		audio: new Audio(Toxicity),
		title: 'Toxicity',
		artist: 'System of A Down',
		cover: Img,
	},
	{
		audio: new Audio(Rain),
		title: 'Rain',
		artist: 'Nature',
		cover: Img,
	},
	{
		audio: new Audio(Fire),
		title: 'Fire',
		artist: 'Nature',
		cover: Img,
	},
]

type MusicPlayer2Props = {
	handleAudio: (audio: HTMLAudioElement) => void
}

export default function MusicPlayer2({ handleAudio }: MusicPlayer2Props) {
	const [music, setMusic] = useState(musicList[0])
	const [isPlaying, setIsPlaying] = useState(true)
	const [progress, setProgress] = useState(0)
	const [menuActive, setMenuActive] = useState(false)

	useEffect(() => {
		handleAudioProps()
		music.audio.addEventListener('timeupdate', handleAudioTimeUpdate)
		music.audio.addEventListener('ended', handleNextSong)
		return () => {
			handleAudioProps()
			music.audio.removeEventListener('timeupdate', handleAudioTimeUpdate)
			music.audio.removeEventListener('ended', handleNextSong)
		}
	}, [music])

	function togglePlayPause() {
		setIsPlaying(!isPlaying)
		if (isPlaying) {
			music.audio.play()
		} else music.audio.pause()
		console.log(isPlaying)
	}

	function onDurationChange(value: number) {
		setProgress(value)
		music.audio.currentTime = (music.audio.duration * value) / 100
	}

	function handleAudioTimeUpdate() {
		const currentAudio = music.audio
		setProgress((currentAudio.currentTime * 100) / currentAudio.duration)
	}

	function changeMusic(nextMusic: Music) {
		music.audio.pause()
		music.audio.currentTime = 0
		nextMusic.audio.play()
		setMusic(nextMusic)
		setIsPlaying(false)
	}

	function handleNextSong() {
		const currentMusicIndex = musicList.findIndex(
			(m) => m.title === music.title,
		)
		const nextMusicIndex =
			musicList.length > currentMusicIndex + 1 ? currentMusicIndex + 1 : 0
		const nextMusic = musicList[nextMusicIndex]
		changeMusic(nextMusic)
	}

	function handlePreviousSong() {
		const currentMusicIndex = musicList.findIndex(
			(m) => m.title === music.title,
		)
		const nextMusicIndex =
			currentMusicIndex === 0 ? musicList.length - 1 : currentMusicIndex - 1
		const nextMusic = musicList[nextMusicIndex]
		changeMusic(nextMusic)
	}

	function handleAudioProps() {
		handleAudio(music.audio)
	}

	function toggleMenuActive() {
		setMenuActive(!menuActive)
	}

	return (
		<div>
			{menuActive ? (
				<div
					style={{ backgroundImage: `url(${musicPlayer})` }}
					className="bg-contain bg-no-repeat h-full"
				>
					<div className="h-[15rem]  text-white  mr-[2.2rem] ml-[3rem] pt-[1.7rem]">
						<div className="w-full flex h-[12.54rem]">
							<div
								className=" w-[50%] pt-1 bg-contain bg-no-repeat"
								style={{
									boxShadow: 'inset 0 0.3rem 0.2rem rgb(0,0,0,25%)',
									backgroundImage: `url(${musicPlayerBg})`,
								}}
							>
								<div className="flex justify-center  ">
									<div
										style={{ transform: 'scaleX(-1)' }}
										className="musicList"
									>
										<div
											className=" w-full pt-1"
											style={{ transform: 'scaleX(-1)' }}
										>
											{musicList.map((music) => (
												<MusicItem
													key={music.title}
													music={music}
													onChange={changeMusic}
												/>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className=" w-[50%] mt-[1rem] pl-[1.5rem]">
								<div className=" h-[10rem]">
									<img src={music.cover} className="w-[6rem] mb-[0.5rem]" />
									<div className=" mb-[1rem] ml-[0.5rem]">
										<h1 className="text-sm  font-['eightBitBold']">
											{music.title}
										</h1>
										<h2 className="text-[0.5rem] font-[eightBit] ">
											{music.artist}
										</h2>
									</div>
								</div>
								<div className="w-[9rem] ">
									<SliderBar
										handleImg={handleMusicPlayer}
										value={progress}
										onChange={onDurationChange}
										color="#6d2adc"
										height={0.4}
										width={1}
										minWidth={0.1}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-start justify-center h-[5rem] ">
						<div className=" h-[3rem] flex justify-center mr-3">
							<button className="w-[1.5rem]  " onClick={toggleMenuActive}>
								<img src={menuBtn} className="w-full" />
							</button>
						</div>

						<div className="flex items-center ">
							<button className="mx-6" onClick={handlePreviousSong}>
								<img src={backwardBtn} />
							</button>
							<button onClick={togglePlayPause}>
								{isPlaying ? <img src={playBtn} /> : <img src={pauseBtn} />}
							</button>
							<button className="mx-6" onClick={handleNextSong}>
								<img src={forwardBtn} />
							</button>
						</div>
					</div>
				</div>
			) : (
				<div
					style={{ backgroundImage: `url(${musicPlayer})` }}
					className="bg-contain bg-no-repeat h-full"
				>
					<div className="h-[15rem]  text-white pl-[4.5rem] py-[2.7rem] ">
						<div className="ml-[3rem] pt-[1rem] h-[11.5rem]">
							<div className="flex  h-[8rem]">
								<img src={music.cover} className="w-[6rem] h-[6rem]" />
								<div className="pl-[2rem] flex justify-end items-center">
									<div>
										<h1 className="text-xl  font-['eightBitBold']">
											{music.title}
										</h1>
										<h2 className="text-xs font-[eightBit] pl-2">
											{music.artist}
										</h2>
									</div>
								</div>
							</div>
							<div className="w-[18rem]">
								<SliderBar
									handleImg={handleMusicPlayer}
									value={progress}
									onChange={onDurationChange}
									color="#6d2adc"
									height={0.5}
									width={1.5}
									minWidth={0.1}
								/>
							</div>
						</div>
					</div>
					<div className="flex items-start justify-center h-[5rem] ">
						<div className=" h-[3rem] flex justify-center mr-3">
							<button className="w-[1.5rem]" onClick={toggleMenuActive}>
								<img src={menuBtn} className="w-full" />
							</button>
						</div>

						<div className="flex items-center ">
							<button className="mx-6" onClick={handlePreviousSong}>
								<img src={backwardBtn} />
							</button>
							<button onClick={togglePlayPause}>
								{isPlaying ? <img src={playBtn} /> : <img src={pauseBtn} />}
							</button>
							<button className="mx-6" onClick={handleNextSong}>
								<img src={forwardBtn} />
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

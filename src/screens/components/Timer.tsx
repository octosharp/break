import '../../index.css'
import { useState, useEffect } from 'react'
import Button from '../../components/Button'
import Settings from './Settings'
import TimerDisplay from './TimerDisplay'

export default function Timer() {
	const [isRunning, setIsRunning] = useState(false)
	const [isActiveStatus, setIsActiveStatus] = useState('Start')
	const [reset, setreset] = useState('Reset')
	const [animateColon, setAnimateColon] = useState(true)
	const [colon, setColon] = useState(':')
	const [timeMode, setTimeMode] = useState('pomo')
	const [pomoLength, setPomoLength] = useState(30)
	const [shortLength, setShortLength] = useState(5)
	const [longLength, setLongLength] = useState(15)
	const [longBreakIntervalValue, setLongBreakIntervalValue] = useState(4)
	const [counter, setCounter] = useState(1)
	const [cycle, setCycle] = useState(1)
	const [secondsLeft, setSecondsLeft] = useState(30 * 60)
	useEffect(() => {
		let intervalId: number
		if (isRunning) {
			intervalId = setInterval(() => {
				setSecondsLeft((secondsLeft) => secondsLeft - 1)
				handleAnimate()
			}, 1000)
			if (secondsLeft === 0) {
				clearInterval(intervalId)
				handleTimeMode()
			}
			return () => clearInterval(intervalId)
		}
		console.log('updated', pomoLength)
	}, [secondsLeft, isRunning, pomoLength])
	const formatTime = (seconds: number) => {
		if (seconds <= 540) {
			return `0${Math.floor(seconds / 60)}
      ${colon}
      ${seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`}
      `
		}
		// biome-ignore lint/style/noUselessElse: <explanation>
		else {
			return `${Math.floor(seconds / 60)}${colon}${
				seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`
			}
      `
		}
	}
	function handleAnimate() {
		if (animateColon === true) {
			setColon(' ')
			setAnimateColon(!animateColon)
		} else {
			setColon(':')
			setAnimateColon(!animateColon)
		}
	}
	function startStop() {
		if (isRunning === false) {
			setIsActiveStatus('Pause')
		} else {
			setIsActiveStatus('Start')
		}
		setIsRunning(!isRunning)
	}
	function handleUpdate(
		pomodoro: string,
		shortBreak: string,
		longBreak: string,
		longBreakInterval: string,
	) {
		setPomoLength(Number(pomodoro))
		setSecondsLeft(Number(pomodoro) * 60)
		setShortLength(Number(shortBreak))
		setLongLength(Number(longBreak))
		setLongBreakIntervalValue(Number(longBreakInterval))
	}
	function handleReset() {
		setSecondsLeft(pomoLength * 60)
		startStop()
	}
	function handleTimeMode() {
		if (counter === longBreakIntervalValue) {
			setSecondsLeft(longLength * 60)
			setTimeMode('long')
			setCounter(1)
			setCycle(cycle + 1)
		} else {
			if (timeMode === 'pomo') {
				setTimeMode('short')
				setSecondsLeft(shortLength * 60)
			} else {
				setTimeMode('pomo')
				setSecondsLeft(pomoLength * 60)
				setCounter(counter + 1)
			}
		}
	}

	return (
		<div className="timer flex items-center justify-center  h-full">
			<div>
				<div className=" text-[10rem]">
					<TimerDisplay timeLeft={formatTime(secondsLeft)} />
				</div>

				<div>
					<div className="flex justify-center  items-center ml-[3.8rem]">
						<div className="mx-6  flex  ">
							<div className="mr-6">
								<Button
									text={isActiveStatus}
									anotherText={isActiveStatus}
									width={12.5}
									onclick={startStop}
									height={4}
									size={2}
								/>
							</div>
							<div>
								<Button
									text={reset}
									anotherText={reset}
									width={12.5}
									onclick={handleReset}
									height={4}
									size={2}
								/>
							</div>
						</div>
						<Settings updateParents={handleUpdate} />
					</div>
				</div>
				<div className="text-5xl pt-10 text-white flex justify-center">
					#{cycle}
				</div>
			</div>
		</div>
	)
}

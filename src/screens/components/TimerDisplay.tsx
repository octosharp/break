type TimerDisplayProps = {
	timeLeft: string
}
const TimerDisplay = ({ timeLeft }: TimerDisplayProps) => {
	const timeText = timeLeft === '00:00' ? '00:00' : timeLeft

	return (
		<div className="">
			<h1 className=" text-white">{timeText}</h1>
		</div>
	)
}
export default TimerDisplay

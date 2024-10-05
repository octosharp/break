import './sliderBar.css'

type SliderBarProps = {
	value: number
	onChange: (duration: number) => void
	steps?: number
	height?: number
	isVertical?: boolean
	color?: string
	handleImg: string
	backgroundColor?: string
	width?: number
	minWidth?: number
}

const SliderBar = ({
	value,
	onChange,
	steps = 1,
	isVertical = false,
	height = 0.5,
	color = 'black',
	handleImg,
	backgroundColor,
	width = 1.2,
	minWidth = 1,
}: SliderBarProps) => {
	const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
		const duration = (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * 100
		onChange(Math.ceil(duration / steps) * steps)
	}

	return (
		<div
			style={{
				rotate: isVertical ? '270deg' : '',
				height: `${height}rem`,
			}}
			className="bg-[#aaaaaa]  rounded-md container w-full flex"
			onClick={handleChange}
		>
			<div
				className="progress h-full w-full rounded-md relative items-center "
				style={{
					width: `${value}%`,
					background: color,
					minWidth: `${minWidth}rem`,
				}}
			>
				<div
					className="sliderHandle absolute right-0 p-2 "
					style={{
						backgroundImage: `url(${handleImg})`,
						backgroundColor: backgroundColor,
						width: `${width}rem`,
					}}
				/>
			</div>
		</div>
	)
}

export default SliderBar

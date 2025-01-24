type IconsProps = {
	activeIcon?: string
	inActiveIcon?: string
	size?: number
	onChange: (isActive: boolean) => void
	isActive?: boolean
}

export default function IconButton({
	activeIcon,
	inActiveIcon,
	size = 40,
	isActive,
	onChange,
}: IconsProps) {
	function handleClick() {
		onChange(!isActive)
	}
	return (
		<button
			onClick={handleClick}
			className="mx-3"
			style={{ height: `${size}px`, width: `${size}px` }}
		>
			{isActive ? (
				<img src={activeIcon} className="w-full" />
			) : (
				<img src={inActiveIcon} className="w-full" />
			)}
		</button>
	)
}

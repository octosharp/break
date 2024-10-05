export type Music = {
	audio: HTMLAudioElement
	title: string
	artist: string
	cover: string
}

type MusicItemProps = {
	music: Music
	onChange: (music: Music) => void
}

const MusicItem = ({ music, onChange }: MusicItemProps) => {
	function playAudio() {
		onChange(music)
	}

	return (
		<div
			onClick={playAudio}
			style={{ cursor: 'pointer' }}
			className=" w-[80%] mb-1 p-2 px-4 flex  h-16 border-b items-center border-[rgb(255,255,255,23%)]"
		>
			<img
				src={music.cover}
				style={{ height: '3rem', width: '3rem' }}
				className="rounded mr-4"
			/>
			<div>
				<h1 className="pb-[0.3rem] text-[0.6rem] font-['eightBit']">
					{music.title}
				</h1>
				<div className="  text-[0.4rem] font-['eightBit']">{music.artist}</div>
			</div>
		</div>
	)
}
export default MusicItem

import '../index.css'
import Icons from '../components/Icons'
import Timer from './components/Timer'
import Button from '../components/Button'

import fireOnImg from '../assets/Icons/fireLogoSelected.png'
import rainOnImg from '../assets/Icons/rainLogoSelected.png'
import musicOn from '../assets/Icons/musicon.png'
import fireOffImg from '../assets/Icons/fireLogoUnSelect.png'
import rainOffImg from '../assets/Icons/rainUnselect.png'
import musicOff from '../assets/Icons/musicOff.png'

// import start from './assets/Icons/startbutton.png'
// import stop from './assets/Icons/stop button.png'

type Icon = {
	title: string
	selectedImg: string
	unSelectedImg: string
}
const iconList: Icon[] = [
	{
		title: 'FireSound',
		selectedImg: fireOnImg,
		unSelectedImg: fireOffImg,
	},
	{
		title: 'RainSound',
		selectedImg: rainOnImg,
		unSelectedImg: rainOffImg,
	},
	{
		title: 'Music',
		selectedImg: musicOn,
		unSelectedImg: musicOff,
	},
]

export default function Home() {
	return (
		<div className="home  flex justify-center py-5 px-6">
			<div className="w-full ">
				<div className=" w-full flex justify-end items-center  ">
					{iconList.map((icon) => (
						<div key={icon.title}>
							<Icons img1={icon.selectedImg} img2={icon.unSelectedImg} />
						</div>
					))}
				</div>
				<div className="flex justify-center items-center h-[90%]">
					<div>
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
			</div>
		</div>
	)
}

import SettingIcon from '../../assets/Icons/settings.png'
import IconButton from '../../components/IconButton'
import settingsBg from '../../assets/background/settingBg.png'
import Button from '../../components/Button'
import InputBg from '../../assets/background/inputbg.png'
import '../../components/inputBar.css'

import { useState, createContext } from 'react'

type SettingsProps = {
	updateParents: (
		pomoLength: string,
		shortLength: string,
		longLength: string,
		longBreakInterval: string,
	) => void
}
export const Context = createContext(1)
export default function Settings({ updateParents }: SettingsProps) {
	const [dropdownState, setDropdownState] = useState({ open: false })
	const [pomodoroValue, setPomodoroValue] = useState('30')
	const [shortBreakValue, setShortBreakValue] = useState('5')
	const [longBreakValue, setLongBreakValue] = useState('15')
	const [longBreakIntervalValue, setLongBreakIntervalValue] = useState('4')

	function handleSettingsPopUp() {
		setDropdownState({ open: !dropdownState.open })
	}
	function handleSubmit() {
		setDropdownState({ open: !dropdownState.open })
		updateParents(
			pomodoroValue,
			shortBreakValue,
			longBreakValue,
			longBreakIntervalValue,
		)
	}
	return (
		<div className="flex justify-center items-center">
			<IconButton
				inActiveIcon={SettingIcon}
				size={40}
				onChange={handleSettingsPopUp}
			/>
			{dropdownState.open && (
				<div
					className="text-sm absolute right-[-12rem]   top-[28rem] w-[18rem] h-[25rem] bg-contain bg-no-repeat pt-6  text-white"
					style={{ backgroundImage: `url(${settingsBg})` }}
				>
					<div className="flex justify-center pt-3 pb-2 border-b border-[rgb(255,255,255,40%)] ml-7 mr-[1.5rem] text-lg">
						<h1>Settings</h1>
					</div>
					<div className="mx-8 mt-3">
						<div>
							<h1 className="text-md">Timer (Minutes)</h1>
						</div>
						<div className="mt-5 pl-2 ">
							<div className="flex items-center justify-between">
								<p className="mr-3">Pomodoro</p>
								<input
									className="input bg-no-repeat bg-contain px-3 text-black"
									style={{ backgroundImage: `url(${InputBg})` }}
									onChange={(e) => setPomodoroValue(e.target.value)}
									value={pomodoroValue}
								/>
							</div>

							<div className="flex my-4 items-center justify-between">
								<p className="mr-3">Short Break</p>
								<input
									className="input bg-no-repeat bg-contain px-3 text-black"
									style={{ backgroundImage: `url(${InputBg})` }}
									onChange={(e) => setShortBreakValue(e.target.value)}
									value={shortBreakValue}
								/>
							</div>
							<div className="flex my-4 items-center justify-between">
								<p className="mr-3">Long Break</p>
								<input
									className="input bg-no-repeat bg-contain px-3 text-black "
									style={{ backgroundImage: `url(${InputBg})` }}
									onChange={(e) => setLongBreakValue(e.target.value)}
									value={longBreakValue}
								/>
							</div>
							<div className="flex my-4 items-center ">
								<p className="mr-3">Long Break Interval</p>
								<input
									type="text"
									className="input bg-no-repeat bg-contain px-3 text-black flex justify-end"
									style={{ backgroundImage: `url(${InputBg})` }}
									onChange={(e) => setLongBreakIntervalValue(e.target.value)}
									value={longBreakIntervalValue}
								/>
							</div>
							<div className=" flex justify-center mt-5 ">
								<Button
									text="Okay"
									anotherText="Okay"
									onclick={handleSubmit}
									width={4}
									height={1}
									size={1}
									padding={0}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

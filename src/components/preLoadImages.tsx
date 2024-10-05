import { useEffect, useState } from 'react'

function preLoadImage(src: string) {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = () => {
			resolve(img)
		}
		img.onerror = img.onabort = () => {
			reject(src)
		}
		img.src = src
	})
}

export default function usePreLoadedImages(imageList: string[]) {
	const [imagesPreLoaded, setImagesPreLoaded] = useState(false)
	useEffect(() => {
		let isCancelled = false
		async function effect() {
			console.log('Preloaded')
			if (isCancelled) {
				return
			}
			const imagesPromiseList: Promise<unknown>[] = []
			for (const i of imageList) {
				imagesPromiseList.push(preLoadImage(i))
			}

			await Promise.all(imagesPromiseList)

			if (isCancelled) {
				return
			}

			setImagesPreLoaded(true)
		}
		effect()

		return () => {
			isCancelled = true
		}
	}, [imageList])

	return { imagesPreLoaded }
}

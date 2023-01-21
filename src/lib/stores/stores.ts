import { writable } from 'svelte/store'

const createNewId = (): string => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	return (
		Array.from(Array(16)).reduce<string>(
			(generatedId) =>
				generatedId + characters.charAt(Math.floor(Math.random() * characters.length)),
			''
		) + new Date().getTime().toString().substring(9)
	)
}

export const destinations = writable([
	{
		id: createNewId(),
		name: 'Toronto',
		img: 'toronto.jpg',
		price: 120,
		propertyCount: 76
	},
	{
		id: createNewId(),
		name: 'Malibu',
		img: 'malibu.jpg',
		price: 215,
		propertyCount: 43
	},
	{
		id: createNewId(),
		name: 'Chicago',
		img: 'chicago.jpg',
		price: 130,
		propertyCount: 115
	},
	{
		id: createNewId(),
		name: 'Seattle',
		img: 'seattle.jpg',
		price: 135,
		propertyCount: 63
	},
	{
		id: createNewId(),
		name: 'Colorado',
		img: 'colorado.jpg',
		price: 85,
		propertyCount: 47
	},
	{
		id: createNewId(),
		name: 'Miami',
		img: 'miami.jpg',
		price: 115,
		propertyCount: 86
	}
])

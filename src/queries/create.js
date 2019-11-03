export function queryCreate(fieldArtist, fieldImageUrl, fieldTitle, fieldYear, createdByUser) {
	return `mutation {
		createArtwork(artwork: {
			artist: "${fieldArtist}"
			imageUrl: "${fieldImageUrl}"
			title: "${fieldTitle}"
			year: ${fieldYear}
			createdByUser: "${createdByUser}"
		}) {
			artist
			originalImageUrl
			imageUrl
			labels
			title
			year
			uuid
			createdByUser
		}
	}`;
}

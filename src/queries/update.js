export function queryUpdate(uuid, fieldArtist, fieldImageUrl, fieldTitle, fieldYear) {
	return `mutation {
		updateArtwork(artwork: {
			uuid: "${uuid}"
			artist: "${fieldArtist}"
			imageUrl: "${fieldImageUrl}"
			title: "${fieldTitle}"
			year: ${fieldYear}
		}) {
			success
			error
		}
	}`;
}

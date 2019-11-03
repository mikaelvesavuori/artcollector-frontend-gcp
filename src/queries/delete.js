export function queryDelete(uuid) {
	return `mutation {
		deleteArtwork(uuid: "${uuid}") {
			success
			error
		}
	}`;
}

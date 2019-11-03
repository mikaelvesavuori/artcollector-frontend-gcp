export function validate(fieldArtist, fieldTitle, fieldYear, fieldImageUrl) {
	if (
		fieldArtist !== '' &&
		fieldTitle !== '' &&
		fieldYear !== '' &&
		fieldYear.length > 0 &&
		fieldYear.length <= 4 &&
		fieldImageUrl.includes('http')
	) {
		return true;
	} else return false;
}

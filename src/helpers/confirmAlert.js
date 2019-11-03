export function confirmAlert(alertType) {
	if (alertType === 'delete' || alertType === 'update') {
		const MESSAGE = `Are you sure you want to ${alertType} this post?`;
		return window.confirm(MESSAGE);
	} else throw new Error('Unsupported "alertType" in confirmAlert()!');
}

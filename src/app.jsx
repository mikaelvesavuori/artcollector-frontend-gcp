import React from 'react';

import View from 'containers/View';
import H1 from 'components/H1';
import ButtonAdd from 'components/ButtonAdd';
import Card from 'compositions/Card';
import Modal from 'compositions/Modal';

import { authGoogle } from 'helpers/authGoogle'; // EDIT: Import your provider
import { callApi } from 'helpers/callApi';
import { confirmAlert } from 'helpers/confirmAlert';
import { validate } from 'helpers/validate';

import { queryCreate } from 'queries/create';
import { queryRead } from 'queries/read';
import { queryUpdate } from 'queries/update';
import { queryDelete } from 'queries/delete';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			artworks: [],
			fieldUuid: '',
			fieldImageUrl: '',
			fieldArtist: '',
			fieldTitle: '',
			fieldYear: 0,
			displayAddArtwork: false,
			loggedIn: false,
			editModeActive: false,
			allFieldsValid: false
		};
	}

	async login() {
		await authGoogle()
			.then(email => {
				if (email && email !== '' && email !== undefined) {
					localStorage.setItem('user', email);

					this.setState({
						loggedIn: true
					});
				} else {
					this.setState({
						loggedIn: false
					});

					alert('Could not log you in...');
				}
			})
			.then(() => {
				if (this.state.loggedIn) {
					this.handleGet();
				}
			});
	}

	toggleAddArtworkDisplay(artwork = null) {
		// The below is for 'edit' mode
		if (artwork) {
			this.setState(
				{
					editModeActive: true,
					displayAddArtwork: !this.state.displayAddArtwork,
					fieldUuid: artwork.uuid,
					fieldImageUrl: artwork.imageUrl,
					fieldArtist: artwork.artist,
					fieldTitle: artwork.title,
					fieldYear: artwork.year
				},
				() => {
					this.validateFields();
				}
			);
		} else {
			this.setState({
				displayAddArtwork: !this.state.displayAddArtwork
			});
		}
	}

	handleInput(e, target) {
		const VALUE = e.target.value;

		this.setState(
			{
				[target]: VALUE
			},
			() => {
				this.validateFields();
			}
		);
	}

	validateFields() {
		const IS_VALID = validate(
			this.state.fieldArtist,
			this.state.fieldTitle,
			this.state.fieldYear,
			this.state.fieldImageUrl
		);

		this.setState({
			allFieldsValid: IS_VALID
		});
	}

	async handleGet() {
		const QUERY = {
			query: queryRead
		};

		const DATA = await callApi(QUERY);

		this.setState({
			artworks: DATA.getArtworks
		});
	}

	async handleCreate() {
		const USER_EMAIL = localStorage.getItem('user');

		const QUERY = {
			query: queryCreate(
				this.state.fieldArtist,
				this.state.fieldImageUrl,
				this.state.fieldTitle,
				this.state.fieldYear,
				USER_EMAIL
			)
		};

		await callApi(QUERY).then(() => {
			this.toggleAddArtworkDisplay();
		});
	}

	async handleUpdate(uuid) {
		const CONFIRMED = confirmAlert('update');

		if (CONFIRMED) {
			const QUERY = {
				query: queryUpdate(
					uuid,
					this.state.fieldArtist,
					this.state.fieldImageUrl,
					this.state.fieldTitle,
					this.state.fieldYear
				)
			};

			await callApi(QUERY).then(() => {
				this.close();
				this.handleGet();
			});
		}
	}

	async handleDelete(uuid) {
		const CONFIRMED = confirmAlert('delete');

		if (CONFIRMED) {
			const QUERY = {
				query: queryDelete(uuid)
			};

			await callApi(QUERY).then(() => {
				this.handleGet();
			});
		}
	}

	close() {
		this.setState({
			fieldUuid: '',
			fieldImageUrl: '',
			fieldArtist: '',
			fieldTitle: '',
			fieldYear: 0,
			displayAddArtwork: false,
			loggedIn: false,
			editModeActive: false,
			allFieldsValid: false
		});
	}

	componentDidMount() {
		this.login();
	}

	render() {
		const LOGGED_IN = this.state.loggedIn;
		const DISPLAY_ADD_ARTWORK = this.state.displayAddArtwork;
		const CARDS = this.state.artworks.map((artwork, index) => (
			<Card
				artwork={artwork}
				edit={artwork => this.toggleAddArtworkDisplay(artwork)}
				handleDelete={e => this.handleDelete(e)}
				key={`Card__${index}`}
			/>
		));

		return (
			<View title="ArtCollector">
				<H1>ArtCollector</H1>
				{LOGGED_IN && (
					<>
						<ButtonAdd onClick={() => this.toggleAddArtworkDisplay()} />

						{CARDS}

						{DISPLAY_ADD_ARTWORK && (
							<Modal
								editMode={this.state.editModeActive}
								handleInput={(e, target) => this.handleInput(e, target)}
								handleCreate={() => this.handleCreate()}
								handleUpdate={uuid => this.handleUpdate(uuid)}
								allFieldsValid={this.state.allFieldsValid}
								close={() => this.close()}
								valueUuid={this.state.fieldUuid}
								valueArtist={this.state.fieldArtist}
								valueTitle={this.state.fieldTitle}
								valueImageUrl={this.state.fieldImageUrl}
								valueYear={this.state.fieldYear}
							/>
						)}
					</>
				)}
			</View>
		);
	}
}

export default App;

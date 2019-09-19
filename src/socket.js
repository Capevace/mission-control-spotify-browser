import io from 'socket.io-client';
import store from './store';

const socket = io();

socket.on('connect', () => {
	console.log('Connected to Mission Control.');

	socket.emit('subscribe', {
		event: 'update:spotify'
	});
});

socket.on('disconnect', () => {
	console.log('Disconnected to Mission Control.');
});

socket.on('initial-state', data => {
	console.log('Got state', data);
	const spotifyState = data.state.spotify;

	store.commit('auth/SET_ACCESS_TOKEN', spotifyState.accessToken);
});

socket.on('update:spotify', data => {
	console.log('Got update', data);
	const spotifyState = data.state.spotify;
	store.commit('auth/SET_ACCESS_TOKEN', spotifyState.accessToken);
});

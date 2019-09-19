import store from './store';
import { MissionControlClient } from 'mission-control-client';

const urlParams = new URLSearchParams(window.location.search);
const missionControlUrl = urlParams.get('url');
const apiToken = urlParams.get('token');

console.log('Using API token', apiToken);

const client = new MissionControlClient(missionControlUrl, apiToken);
 
// Listen to socket events
client.on('connect', () => {
    console.log('Connected to mission control');
});
 
client.on('disconnect', reason => {
    console.log('Disconnected from mission control:', reason);
});
 
client.on('initial-state', data => {
	console.log('Got state', data);
	const spotifyState = data.state.spotify;

	store.commit('auth/SET_ACCESS_TOKEN', spotifyState.accessToken);
});

client.subscribe('update:spotify', data => {
	console.log('Got update', data);

    const spotifyState = data.state.spotify;
	store.commit('auth/SET_ACCESS_TOKEN', spotifyState.accessToken);
});

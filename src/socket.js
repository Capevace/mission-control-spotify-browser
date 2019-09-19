import store from './store';
import { MissionControlClient } from 'mission-control-client';

const missionControlUrl = window.MISSION_CONTROL_URL;
const apiToken = window.MISSION_CONTROL_TOKEN;

console.log('Connecting to URL', missionControlUrl);
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

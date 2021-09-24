import fetch from "node-fetch";
import config from './config.js'
globalThis.fetch = fetch;

import Discord from "discord-user-bots";
const client = new Discord.Client(config.token);
import cron from "cron";

const getData = async (api) => {
	const response = await fetch(api);
	if (response.status !== 200) {
		throw new Error("fetch failed");
	}
	const data = await response.json();
	return data;
};

client.on.ready = function () {
	let channelku = [
		"872911192820162650",
		"888118378571640885"
	];
	console.log("Client online!");

	try {
		const q0 = new cron.CronJob(
			"*/5 * * * *",
			async () => {
				let randomTimer = Math.floor(Math.random() * 3000) + 1000;
				let quote;
				await getData("https://api.quotable.io/random")
					.then((data) => (quote = data.content))
					.catch((err) => console.log(err.message));
				setTimeout(() => {
					client.send(quote, channelku[0]);
				}, randomTimer);
			},
			null,
			true,
			"Asia/Jakarta"
		);
		const q1 = new cron.CronJob(
			"*/6 * * * *",
			async () => {
				let randomTimer = Math.floor(Math.random() * 3000) + 1000;
				let quote;
				let raw;
				await getData("https://api.quotable.io/random")
					.then((data) => (quote = data.content))
					.catch((err) => console.log(err.message));
				
				const res = await fetch("https://libretranslate.de/translate", {
					method: "POST",
					body: JSON.stringify({
						q: quote,
						source: "en",
						target: "id"
					}),
					headers: { "Content-Type": "application/json" }
				});
				
				raw = await res.json()
				quote = await raw.translatedText
				setTimeout(() => {
					client.send(quote, channelku[1]);
				}, randomTimer);
			},
			null,
			true,
			"Asia/Jakarta"
		);
	} catch (error) {
		console.log(error.message);
	}
};

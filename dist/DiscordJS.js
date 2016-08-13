(function() {
	//return;break;
	bot = {};
	bot.ready = false;
	BetterAPI.log(0, "info", "Discord.JS", "Loading...");
	// var saveDir = __dirname.replace('plugins', 'resources');
	// var saveDir = __dirname.slice(0, __dirname.indexOf("\\", __dirname.lastIndexOf('Discord') + "Discord".length + 1) + 1) + "resources";
	BetterAPI.npm('discord.js', process.env.APPDATA + '/BetterDiscord/', function () {
		var Discord = require(process.env.APPDATA + '/BetterDiscord/node_modules/discord.js');
		bot = new Discord.Client();
		bot.token = localStorage.token.match(/\"(.+)\"/)[1];
		bot.ready = false;
		console.log("Discord.JS: Plugin Loaded for Bot. Starting Bot.");
		bot.loginWithToken(bot.token).then(success).catch (err);
		console.log("Discord.JS: Logged in.");
		/*
		bot.on("ready", function (data) {
			console.log("BetterDiscordBot: Client connected.");
			bot.ready = true;
		});
		bot.on("disconnected", function (data) {
			console.log("BetterDiscordBot: Client disconnected. Auto reconnecting...");
			bot.ready = false;
			var _int = setInterval(function(){
				bot.loginWithToken(bot.token).then(clearInterval(_int)).catch(err);
			}, 5000);
		});*/
		function err2(error) {
			if (error) {
				console.log(error);
				return;
			}
		}
		function success(token) {}
		function err(error) {
			if (error) {
				console.log('Problem occurred while logging in! ' + error);
				return;
			}
		}
	});
	BetterAPI.log(0, "info", "Discord.JS", "Successfully loaded.");
})();

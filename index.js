//load libs
const Discord = require('discord.js');
const bot = new Discord.Client();

//connect to discord app
//const token = SET AS SYSTERM VARIABLE 

//set bot prefix
const prefix = 'bob ';

//execute on bot startup
bot.on('ready', () => {
    console.log('Bob is hot');
    bot.user.setPresence({ activity: { name: 'bob' }, status: 'online' });
});

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //split bot prefix. Using old method cuz lazy
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

	//help command
	if (command === 'help') {
		message.channel.send(':frog: :ocean::sweat_drops::four_leaf_clover::seedling::droplet::frog:\n:fire: ***Access to the hottt help menu has been granted***:fire:\n\n- ``bob picc``: sned a froggo picc\n- ``bob fbi``: :gun:\n- ``bob social``\n- ``bob follow``\n- ``bob goal``\n- ``bob frog``\n- ``bob schedule``\n- ``bob bi``\n- ``bob lesbian``\n- ``bob trans``\n- ``bob ace``\n- ``bob enby``\n- ``bob pan``\n- ``bob genderfluid``\n- ``bob gay``\n- ``bob lurk``\n- ``bob pronouns``\n- ``bob bonk``\n- ``bob friends``\n- ``bob flush``\n- ``bob berry``\n\n:frog: :ocean::sweat_drops::four_leaf_clover::seedling::droplet::frog:');
	}

	//bob fbi
	if (command === 'fbi') {
		message.react('💥');
		message.react('🔫');
		message.channel.send(':gun: :frog: **FBI** - Froggotten Bob Investigation services - **HANDS IN THE SKY**');
	}

	//bob picc
	if (command === 'picc') {
		message.react('😳');


		//vars for randomisation
		var pictures = ["https://media.discordapp.net/attachments/784128888045436930/825487016112160829/73a890b705d830e1f8c79d7fcc214acb.png?width=700&height=676",
			"https://media.discordapp.net/attachments/784128888045436930/825487051746705428/frog-syndrome-symptoms-frog-meme.png",
			"https://media.discordapp.net/attachments/784128888045436930/825487158953115648/e7070a7d5fa85ae7d49b5185a1d957de.png?width=676&height=676",
			"https://media.discordapp.net/attachments/784128888045436930/825487244806062180/wednesdaymydudeswide.png",
			"https://media.discordapp.net/attachments/784128888045436930/825487317535293470/385.png",
			"https://media.discordapp.net/attachments/784128888045436930/825487351848894474/xg6jekvvuo961.png?width=892&height=676",
			"https://media.discordapp.net/attachments/784128888045436930/825487426049933342/5e8.png?width=603&height=676",
			"https://media.discordapp.net/attachments/784128888045436930/825487754950475826/61W62RU4yNL.png",
			"https://media.discordapp.net/attachments/784128888045436930/825487863108993085/Frog-is-here-Dont-be-sad-Things-will-be-ok-meme-3638.png",
			"https://media.discordapp.net/attachments/784128888045436930/825488026079723590/frog.png",
			"https://media.discordapp.net/attachments/784128888045436930/825488201761947728/6018ce3772df2.png",
			"https://media.discordapp.net/attachments/784128888045436930/825488201761947728/6018ce3772df2.png",
			"https://media.discordapp.net/attachments/784128888045436930/825488308196868136/frogs-n-shit_o_476986.png?width=476&height=676",
			"https://media.discordapp.net/attachments/784128888045436930/825488370099945492/3446983.png?width=380&height=676",
			"https://media.discordapp.net/attachments/784128888045436930/825488553915187220/gratis-png-pepe-la-rana-kermit-el-meme-rana.png?width=795&height=676",
			"https://media.discordapp.net/attachments/784128888045436930/825488717405487164/frog-well-like-gets-eat-fried-chicken-men-think-women-want-women-really-want-money-jewelry-flowers.png",
			"https://media.discordapp.net/attachments/784128888045436930/825488751538733086/c8d.png",
			"https://media.discordapp.net/attachments/784128888045436930/825488874880368700/tenor.png",
			"https://media.discordapp.net/attachments/784128888045436930/825488976571793408/5bf0744d4ceb5.png?width=680&height=676",
			"https://media.discordapp.net/attachments/784128888045436930/825489130989420572/unknown.png",
			"https://media.discordapp.net/attachments/784128888045436930/825489904133603348/unknown.png"
		]
		var picture = Math.floor(Math.random() * pictures.length);

		//set const for embed (image)
		const pictureEmbed = new Discord.MessageEmbed()

			//set properties of embed (image)
			.setColor('#17fd45')
			.setTitle('Here is your froggo!')
			.setImage(pictures[picture])


		message.reply(pictureEmbed);
		//end of bob picc
	}
	if (command === 'social') {
		message.channel.send("https://linktr.ee/berrygalexy");
	}

	if (command === 'follow') {
		message.channel.send("Do 𝕗𝕠𝕝𝕝𝕠𝕨! If we hit 130 𝕗𝕠𝕝𝕝𝕠𝕨𝕖𝕣𝕤, Berrygalexy will play Fnaf nonstop for 3 hours!");
	}

	if (command === 'goal') {
		message.channel.send("My current 𝔾𝕠𝕒𝕝 is 100$ all money goes towards my bills :0");
	}

	if (command === 'frog') {
		message.channel.send("ʙᴏʙ ɪꜱ ꜰʀᴏɢ ʙᴏʙ ɪꜱ ʜᴏᴛ")
	}

	//schedule command
	if (command === 'schedule') {
		message.channel.send({
			embed: {
				color: 3066993,
				title: "Berry streams:",
				fields: [
					{ name: "(Eastern Time)", value: "\n💚 Steam Sunday 12am to 2pm\n🐸 Minecraft Monday 4pm-5pm\n🌿 Thriller Thursday 11am to 1pm\n🍏 Fear Friday 11am to 1pm", inline: true },
				]
			}
		});
	}

	//gender command spam
	if (command === 'bi') {
		message.channel.send("✨💗💜💙✨");
		message.react("🐸");
		message.react("💚")
	}

	if (command === 'lesbian') {
		message.channel.send("✨🧡💛🤍💗❤️✨");
		message.react("🐸");
		message.react("💚")
	}

	if (command === 'trans') {
		message.channel.send("✨💙💗🤍💗💙✨");
		message.react("🐸");
		message.react("💚")
	}

	if (command === 'ace') {
		message.channel.send("✨🖤🖤🤍💜✨");
		message.react("🐸");
		message.react("💚")
	}

	if (command === 'enby') {
		message.channel.send("✨💛🤍💜🖤✨");
		message.react("🐸");
		message.react("💚")
	}

	if (command === 'pan') {
		message.channel.send("✨💗💛💙✨");
		message.react("🐸");
		message.react("💚")
	}

	if (command === 'genderfluid') {
		message.channel.send("✨💗🤍💜🖤💙✨");
		message.react("🐸");
		message.react("💚")
	}

	if (command === 'gay') {
		message.channel.send("💚🤍💙");
		message.react("🐸");
		message.react("💚")
	}
	//end of gender command spam
	if (command === 'lurk') {
		message.channel.send("🌱 This tadpole is *hiding* under a lily pad 🌿")
		message.react("👀");
	}

	if (command === 'pronouns') {
		message.channel.send("🌱 Any Pronouns Work for Berry currently! 🌿");
		message.react("🐸");
		message.react("💚")
	}

	if (command === 'bonk') {
		message.channel.send("🔨 get bonked bitch 🔨");
	}

	if (command === 'friends') {
		message.channel.send({
			embed: {
				color: 3066993,
				title: "Friends socials:",
				fields: [
					{ name: "Nich:", value: "https://twitch.tv/ncho_halfboi \n https://www.youtube.com/channel/UCweOojBXB0bfekFa9As__4w", inline: true },
					{ name: "Sponk:", value: "https://twitch.tv/sponkar", inline: true },
					{ name: "Jel:", value: "https://www.youtube.com/channel/UCPMxvfpYkJoDlFjdV1HELJg", incline: true },
					{ name: "Sneezer:", value: "https://www.youtube.com/channel/UCgMRZT8LTQFLNNAxHknwRYw", incline: true },
					{ name: "DisguisedError:", value: "https://twitch.tv/disguisederror", incline: true }
				]
			}
		});
	}

	if (command === 'flush') {
		message.channel.send("https://media.discordapp.net/attachments/699574631476101180/825507036476735488/4fbaa30efce4569a160fa7352d377ced.png")
	}

	if (command === 'berry') {
		message.channel.send("https://media.discordapp.net/attachments/699574631476101180/825507167523307571/unknown.png")
	}

	if (command === 'pog') {
		message.channel.send("<:pogfrog:825503557427920927>")
		message.react("<:pogfrog:825503557427920927>")
    }
    //END OF CODE   
});

bot.login(process.env.BobTOKEN);
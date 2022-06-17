const Discord = require("discord.js");

const Client = new Discord.Client ({intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES
]
});

const prefix = "!con ";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login(process.env.TOKEN);

Client.on("messageCreate", message => {

    if (message.author.bot) return;

    if (message.content === prefix + "En avant"){
        message.channel.send("EN AVANT OUI-OUI, OUI OUIIIII, AVEC TON BEAU TAXI POUET POUET POUET");
    }
    if (message.content === prefix + "ping"){
        message.channel.send("pong");
    }

    if (message.content === prefix + "aide"){
        const aide = new Discord.MessageEmbed()
         .setColor("#1E90FF")
            .setTitle("Aide")
            .setDescription("Ce message liste toute l'aide dont vous avez besoin pour exécuter vos commandes. Si vous avez un problème avec le bot, écrivez moi en Message Privé. NotMe5063")
            .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
            .addField("Les commandes", "Pour écrire une commande CoN, il vous faut orthographier correctement le nom de l'objet. Par exemple, le !coc infanterie vous affichera la page de l'infanterie motorisée.")
            .addField("Préfixe", "Le préfixe du bot est !con . Pensez à mettre l'espace derrière, sinon la commande n'est pas valide.")
            .addField("Les catégories", "Le bot CoN vous donne des informations sur \n - Les différentes cartes (!con map) (en développement)\n - Les unités (!con units) (en développement)\n - Les batiments (!con bat)\n - Les mécanismes du jeu (!con play) (en développement)")
            .setImage("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
            .addField("Remerciements", "Ici NotMe, le créateur du bot. Je tiens à remercier K0NIGST1G3R, teacher france de Conflict of Nation, Pesk_nij, chef des Armées des Francophones, et Salonika, chef de la Maison Education et Recherche pour leur participation directe et l'effet moral indirect qu'ils m'ont apporté.")
            .setTimestamp()
            .setFooter("NotMe5063");

        message.channel.send({ embeds: [aide]});    
}

if (message.content === prefix + "help"){
    const help = new Discord.MessageEmbed()
     .setColor("#1E90FF")
        .setTitle("Aide")
        .setDescription("Ce message liste toute l'aide dont vous avez besoin pour exécuter vos commandes. Si vous avez un problème avec le bot, écrivez moi en Message Privé. NotMe5063")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les commandes", "Pour écrire une commande CoN, il vous faut orthographier correctement le nom de l'objet. Par exemple, le !coc infanterie vous affichera la page de l'infanterie motorisée.")
        .addField("Préfixe", "Le préfixe du bot est !con . Pensez à mettre l'espace derrière, sinon la commande n'est pas valide.")
        .addField("Les catégories", "Le bot CoN vous donne des informations sur \n - Les différentes cartes (!con map) (en développement)\n - Les unités (!con units) (en développement)\n - Les batiments (!con bat)\n - Les mécanismes du jeu (!con play) (en développement)")
        .setImage("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Remerciements", "Ici NotMe, le créateur du bot. Je tiens à remercier K0NIGST1G3R, teacher france de Conflict of Nation, Pesk_nij, chef des Armées des Francophones, et Salonika, chef de la Maison Education et Recherche pour leur participation directe et l'effet moral indirect qu'ils m'ont apporté.")
        .setTimestamp()
        .setFooter("NotMe5063");

    message.channel.send({ embeds: [help]});    
}

if (message.content === "!con" ){
    const aide = new Discord.MessageEmbed()
    .setColor("#1E90FF")
            .setTitle("Aide")
            .setDescription("Ce message liste toute l'aide dont vous avez besoin pour exécuter vos commandes. Si vous avez un problème avec le bot, écrivez moi en Message Privé. NotMe5063")
            .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
            .addField("Les commandes", "Pour écrire une commande CoN, il vous faut orthographier correctement le nom de l'objet. Par exemple, le !con infanterie vous affichera la page de l'infanterie motorisée.")
            .addField("Préfixe", "Le préfixe du bot est !con . Pensez à mettre l'espace derrière, sinon la commande n'est pas valide.")
            .addField("Les catégories", "Le bot CoN vous donne des informations sur \n - Les différentes cartes (!con map) (en développement)\n - Les unités (!con units) (en développement)\n - Les batiments (!con bat)\n - Les mécanismes du jeu (!con play) (en développement)")
            .setImage("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
            .addField("Remerciements", "Ici NotMe, le créateur du bot. Je tiens à remercier K0NIGST1G3R, teacher france de Conflict of Nation, Pesk_nij, chef des Armées des Francophones, et Salonika, chef de la Maison Education et Recherche pour leur participation directe et l'effet moral indirect qu'ils m'ont apporté.")            
            .setTimestamp()
            .setFooter("NotMe5063");

   message.channel.send({ embeds: [aide]});
}

if (message.content === prefix + "units"){
    const units = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Les catégories d'unités")
        .setDescription("Afin d'accéder à un type d'unité, veuillez saisir le code suivant :")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Infanterie", "!con units inf")
        .addField("Blindés", "!con units blindés")
        .addField("Soutien", "!con units soutien")
        .addField("Chasseurs", "!con units chas")
        .addField("Unités lourdes", "!con units lourdes")
        .addField("Unités navales", "!con units naval")
        .addField("Sous-marins", "!con sm")
        .addField("Missiles", "!con missiles")
        .addField("Officier", "!con officier")
        .addField("Unités de saison", "!con saison")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units]});
}

if (message.content === prefix + "units inf"){
    const units_inf = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Les infanteries")
        .setDescription("Afin d'accéder à l'unité voulue, veuillez saisir le code suivant :")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Infanterie motorisée", "!con units inf moto")
        .addField("Infanterie mécanisée", "!con units inf méca")
        .addField("Infanterie marine", "!con units inf mar")
        .addField("Infanterie aéroportée", "!con units inf aéro")
        .addField("Force spéciale", "!con units inf fs")
        .addField("Garde Nationale", "!con units inf gn")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf]});
}

if (message.content === prefix + "units inf moto"){
    const units_inf_moto = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie motorisée")
        .setDescription("Veuillez saisir le niveau de l'infanterie motorisée que vous voulez regarder:")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Infanterie motorisée niveau 1", "!con units inf moto 1")
        .addField("Infanterie motorisée niveau 2", "!con units inf moto 2")
        .addField("Infanterie motorisée niveau 3", "!con units inf moto 3")
        .addField("Infanterie motorisée niveau 4", "!con units inf moto 4")
        .addField("Infanterie motorisée niveau 5", "!con units inf moto 5")
        .addField("Infanterie motorisée niveau 6", "!con units inf moto 6")
        .addField("Infanterie motorisée niveau 7", "!con units inf moto 7")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_moto]});
}


if (message.content === prefix + "units inf moto 1"){
    const units_inf_moto_1 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie motorisée niveau 1")
        .setDescription("L'unité la plus courante du jeu, l'infanterie motorisée")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1075 ravitaillements, 1325 matériaux rares, 1500$.\n - Pour la production : 650 ravitaillements, 350 composants, 850 manpower, 1000$.\n - Pour l'entretien journalier : 40 ravitaillements, 15 manpower, 15 essence, 60$.")
        .addField("Les bâtiments requis", "Base militaire niveau 1 : 250 ravitaillements / 250 composants / 500 essences / 250 électroniques / 2000$.")
        .addField("Description", "L’infanterie motorisée, au niveau 1, est présente sur toutes vos villes de départ en deux bataillons. Elle peut conquérir les territoires, et elle a une signature de radar basse. Si elle doit faire de longs déplacements, elle peut embarquer dans un aéroport ou aérodrome dans un avion de transport, qui peut parcourir au maximum 2000 de distance. L’infanterie est défensive, à utiliser dans les premiers jours pour défendre votre pays contre les envahisseurs. ")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://static.wixstatic.com/media/bed242_1558fdedfd884614b75e5c8082b870f1~mv2.png/v1/fill/w_750,h_306,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bed242_1558fdedfd884614b75e5c8082b870f1~mv2.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_moto_1]});
}

if (message.content === prefix + "units inf moto 2"){
    const units_inf_moto_2 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie motorisée niveau 2")
        .setDescription("L'unité la plus courante du jeu, l'infanterie motorisée")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1075 ravitaillements, 1325 matériaux rares, 1500$.\n - Pour la production : 650 ravitaillements, 350 composants, 850 manpower, 1000$.\n - Pour l'entretien journalier : 40 ravitaillements, 15 manpower, 15 essence, 60$.")
        .addField("Les bâtiments requis", "Base militaire niveau 1 : 250 ravitaillements / 250 composants / 500 essences / 250 électroniques / 2000$.")
        .addField("Description", "L’infanterie motorisée, au niveau 2, peut conquérir les territoires, et elle a une signature de radar basse. Si elle doit faire de longs déplacements, elle peut embarquer dans un aéroport ou aérodrome dans un avion de transport, qui peut parcourir au maximum 2000 de distance. L’infanterie est défensive, à utiliser dans les premiers jours pour défendre votre pays contre les envahisseurs.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://static.wixstatic.com/media/bed242_6284e33564894723a1dbddf786d6b806~mv2.png/v1/fill/w_750,h_329,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bed242_6284e33564894723a1dbddf786d6b806~mv2.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_moto_2]});
}

if (message.content === prefix + "units inf moto 3"){
    const units_inf_moto_3 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie motorisée niveau 3")
        .setDescription("L'unité la plus courante du jeu, l'infanterie motorisée")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1290 ravitaillements, 1590 matériaux rares, 1800$.\n - Pour la production : 650 ravitaillements, 350 composants, 850 manpower, 1000$.\n - Pour l'entretien journalier : 40 ravitaillements, 15 manpower, 15 essence, 60$.")
        .addField("Les bâtiments requis", "Base militaire niveau 1 : 250 ravitaillements / 250 composants / 500 essences / 250 électroniques / 2000$.")
        .addField("Description", "L’infanterie motorisée, au niveau 3, peut conquérir les territoires, et elle a une signature de radar basse. Si elle doit faire de longs déplacements, elle peut embarquer dans un aéroport ou aérodrome dans un avion de transport, qui peut parcourir au maximum 2000 de distance. L’infanterie est défensive, à utiliser dans les premiers jours pour défendre votre pays contre les envahisseurs.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://static.wixstatic.com/media/bed242_8bf7128f74d549c7bd9630bd351cb33c~mv2.png/v1/fill/w_750,h_329,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bed242_8bf7128f74d549c7bd9630bd351cb33c~mv2.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_moto_3]});
}

if (message.content === prefix + "units inf moto 4"){
    const units_inf_moto_4 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie motorisée niveau 4")
        .setDescription("L'unité la plus courante du jeu, l'infanterie motorisée")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1400 ravitaillements, 1725 matériaux rares, 1950$.\n - Pour la production : 750 ravitaillements, 550 composants, 1000 manpower, 1250$.\n - Pour l'entretien journalier : 55 ravitaillements, 25 manpower, 30 essence, 70$.")
        .addField("Les bâtiments requis", "Base militaire niveau 1 : 250 ravitaillements / 250 composants / 500 essences / 250 électroniques / 2000$.")
        .addField("Description", "L’infanterie motorisée, au niveau 4, peut conquérir les territoires, et elle a une signature de radar basse. Si elle doit faire de longs déplacements, elle peut embarquer dans un aéroport ou aérodrome dans un avion de transport, qui peut parcourir au maximum 5000 de distance. L'infanterie motorisée peut aussi déployer une nuée de drones élite toutes les 8 heures.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://static.wixstatic.com/media/bed242_224f76bac6b74ddd9fd962e00c417164~mv2.png/v1/fill/w_750,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bed242_224f76bac6b74ddd9fd962e00c417164~mv2.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_moto_4]});
}

if (message.content === prefix + "units inf moto 5"){
    const units_inf_moto_5 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie motorisée niveau 5")
        .setDescription("L'unité la plus courante du jeu, l'infanterie motorisée")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1505 ravitaillements, 1855 matériaux rares, 2100$.\n - Pour la production : 750 ravitaillements, 550 composants, 1000 manpower, 1250$.\n - Pour l'entretien journalier : 55 ravitaillements, 25 manpower, 30 essence, 70$.")
        .addField("Les bâtiments requis", "Base militaire niveau 1 : 250 ravitaillements / 250 composants / 500 essences / 250 électroniques / 2000$.")
        .addField("Description", "L’infanterie motorisée, au niveau 5, peut conquérir les territoires, et elle a une signature de radar basse. Si elle doit faire de longs déplacements, elle peut embarquer dans un aéroport ou aérodrome dans un avion de transport, qui peut parcourir au maximum 5000 de distance. L'infanterie motorisée peut aussi déployer une nuée de drones élite toutes les 8 heures.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://static.wixstatic.com/media/bed242_83a123e0eed84d97a380590d5ed77cf7~mv2.png/v1/fill/w_750,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bed242_83a123e0eed84d97a380590d5ed77cf7~mv2.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_moto_5]});
}

if (message.content === prefix + "units inf moto 6"){
    const units_inf_moto_6 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie motorisée niveau 6")
        .setDescription("L'unité la plus courante du jeu, l'infanterie motorisée")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1615 ravitaillements, 1990 matériaux rares, 2250$.\n - Pour la production : 950 ravitaillements, 700 composants, 1250 manpower, 1500$.\n - Pour l'entretien journalier : 70 ravitaillements, 40 manpower, 40 essence, 80$.")
        .addField("Les bâtiments requis", "Base militaire niveau 1 : 250 ravitaillements / 250 composants / 500 essences / 250 électroniques / 2000$.")
        .addField("Description", "L’infanterie motorisée, au niveau 6, peut conquérir les territoires, et elle a une signature de radar basse. Si elle doit faire de longs déplacements, elle peut embarquer dans un aéroport ou aérodrome dans un avion de transport, qui peut parcourir au maximum 10000 de distance. L'infanterie motorisée peut aussi déployer une nuée de drones élite toutes les 8 heures, et, ajout intéressant, dispose d'un mortier qui a une portée de 25 pour éviter le corps à corps.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://static.wixstatic.com/media/bed242_08102a3611b4412784b4fa57d1a6a928~mv2.png/v1/fill/w_750,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bed242_08102a3611b4412784b4fa57d1a6a928~mv2.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_moto_6]});
}

if (message.content === prefix + "units inf moto 7"){
    const units_inf_moto_7 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie motorisée niveau 7")
        .setDescription("L'unité la plus courante du jeu, l'infanterie motorisée")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1720 ravitaillements, 2120 matériaux rares, 2400$.\n - Pour la production : 950 ravitaillements, 700 composants, 1250 manpower, 1500$.\n - Pour l'entretien journalier : 70 ravitaillements, 40 manpower, 40 essence, 80$.")
        .addField("Les bâtiments requis", "Base militaire niveau 1 : 250 ravitaillements / 250 composants / 500 essences / 250 électroniques / 2000$.")
        .addField("Description", "L’infanterie motorisée, au niveau 7, peut conquérir les territoires, et elle a une signature de radar basse. Si elle doit faire de longs déplacements, elle peut embarquer dans un aéroport ou aérodrome dans un avion de transport, qui peut parcourir au maximum 10000 de distance. L'infanterie motorisée peut aussi déployer une nuée de drones élite toutes les 8 heures, et, ajout intéressant, dispose d'un mortier qui a une portée de 25 pour éviter le corps à corps.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://static.wixstatic.com/media/bed242_1c472c1d9ea94056b5d2a9f6d4ef25e0~mv2.png/v1/fill/w_750,h_333,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bed242_1c472c1d9ea94056b5d2a9f6d4ef25e0~mv2.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_moto_7]});
}

if (message.content === prefix + "units inf méca"){
    const units_inf_meca = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie mécanisée")
        .setDescription("Veuillez saisir le niveau de l'infanterie mécanisée que vous voulez regarder:")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Infanterie mécanisée niveau 1", "!con units inf méca 1")
        .addField("Infanterie mécanisée niveau 2", "!con units inf méca 2")
        .addField("Infanterie mécanisée niveau 3", "!con units inf méca 3")
        .addField("Infanterie mécanisée niveau 4", "!con units inf méca 4")
        .addField("Infanterie mécanisée niveau 5", "!con units inf méca 5")
        .addField("Infanterie mécanisée niveau 6", "!con units inf méca 6")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_meca]});
}

if (message.content === prefix + "units inf méca 1"){
    const units_inf_meca_1 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie mécanisée niveau 1")
        .setDescription("L'infanterie la plus proche des blindés")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1200 ravitaillements, 1450 matériaux rares, 1850$.\n - Pour la production : 500 ravitaillements, 950 composants, 1000 manpower, 1750$.\n - Pour l'entretien journalier : 60 ravitaillements, 20 manpower, 20 essence, 80$.")
        .addField("Les bâtiments requis", "- Base militaire niveau 2 (niveau 1 compris): 1000 ravitaillements / 750 composants / 1500 pétroles / 625 électroniques / et 5500$.\n- Bureau de recrutement :750 ravitaillements / 500 composants / 500 pétroles / 300 électroniques / et 2000$")
        .addField("Description", "L’infanterie mécanisée, au niveau 1, peut conquérir les territoires, et elle a une signature de radar basse. Elle peut aussi déployer une nuée de drones élite toutes les 12 heures, et un véhicule terrestre sans pilote tous les jours. La doctrine Europe confie des avantages à l’infanterie mécanisée, +10% de dégâts face aux autres infanteries et une augmentation de 10% au niveau de leur vitesse.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://static.wixstatic.com/media/bed242_0f09eb34fcdd4a378451664086bdcade~mv2.png/v1/fill/w_750,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bed242_0f09eb34fcdd4a378451664086bdcade~mv2.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_meca_1]});
}

if (message.content === prefix + "units inf méca 2"){
    const units_inf_meca_2 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie mécanisée niveau 2")
        .setDescription("L'infanterie la plus proche des blindés")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1320 ravitaillements, 1595 matériaux rares, 2035$.\n - Pour la production : 500 ravitaillements, 950 composants, 1000 manpower, 1750$.\n - Pour l'entretien journalier : 60 ravitaillements, 20 manpower, 20 essence, 80$.")
        .addField("Les bâtiments requis", "La base militaire niveau 2 est nécessaire pour produire une infanterie mécanisée. Elle coûte, avec le niveau 1 compris, 1000 ravitaillements, 750 composants, 1500 pétroles, 625 électroniques, et 5500$. Il faut aussi un bureau de recrutement, qui coûte 750 ravitaillements, 500 composants, 500 pétroles, 300 électroniques, et 2000$")
        .addField("Description", "L’infanterie mécanisée, au niveau 2, peut conquérir les territoires, et elle a une signature de radar basse. Elle peut aussi déployer une nuée de drones élite toutes les 12 heures, et un véhicule terrestre sans pilote tous les jours. En doctrine europe, les infanteries mécanisées ont +10% de dommages face aux autres infanteries, et ont leur vitesse augmentée de 10%..")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://static.wixstatic.com/media/bed242_c6b2cfd3cd1849858303bcf121bf90ea~mv2.png/v1/fill/w_750,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bed242_c6b2cfd3cd1849858303bcf121bf90ea~mv2.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_meca_2]});
}

if (message.content === prefix + "units inf méca 3"){
    const units_inf_meca_3 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie mécanisée niveau 3")
        .setDescription("L'infanterie la plus proche des blindés")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1440 ravitaillements, 1740 matériaux rares, 2200$.\n - Pour la production : 550 ravitaillements, 1000 composants, 1250 manpower, 2000$.\n - Pour l'entretien journalier : 70 ravitaillements, 35 manpower, 30 essence, 90$.")
        .addField("Les bâtiments requis", "La base militaire niveau 2 est nécessaire pour produire une infanterie mécanisée. Elle coûte, avec le niveau 1 compris, 1000 ravitaillements, 750 composants, 1500 pétroles, 625 électroniques, et 5500$. Il faut aussi un bureau de recrutement, qui coûte 750 ravitaillements, 500 composants, 500 pétroles, 300 électroniques, et 2000$")
        .addField("Description", "L’infanterie mécanisée, au niveau 3, peut conquérir les territoires, et elle a une signature de radar basse. Elle peut aussi déployer une nuée de drones élite toutes les 8 heures, et un véhicule terrestre sans pilote toutes les 18 heures. Si elle doit parcourir une longue distance, l'infanterie mécanisée peut embarquer dans un avion de transport qui peut au maximum parcourir 5000. En doctrine europe, les infanteries mécanisées ont +10% de dommages face aux autres infanteries, et ont leur vitesse augmentée de 10%.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://media.discordapp.net/attachments/976805179280203820/985881136234373180/16551227700779047372946039346280.jpg")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_meca_3]});
}

if (message.content === prefix + "units inf méca 4"){
    const units_inf_meca_4 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie mécanisée niveau 4")
        .setDescription("L'infanterie la plus proche des blindés")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1560 ravitaillements, 1885 matériaux rares, 2405$.\n - Pour la production : 500 ravitaillements, 950 composants, 1000 manpower, 1750$.\n - Pour la production : 550 ravitaillements, 1000 composants, 1250 manpower, 2000$.\n - Pour l'entretien journalier : 70 ravitaillements, 35 manpower, 30 essence, 90$.")
        .addField("Les bâtiments requis", "La base militaire niveau 2 est nécessaire pour produire une infanterie mécanisée. Elle coûte, avec le niveau 1 compris, 1000 ravitaillements, 750 composants, 1500 pétroles, 625 électroniques, et 5500$. Il faut aussi un bureau de recrutement, qui coûte 750 ravitaillements, 500 composants, 500 pétroles, 300 électroniques, et 2000$")
        .addField("Description", "L’infanterie mécanisée, au niveau 4, peut conquérir les territoires, et elle a une signature de radar basse. Elle peut aussi déployer une nuée de drones élite toutes les 8 heures, et un véhicule terrestre sans pilote toutes les 18 heures. Si elle doit parcourir une longue distance, l'infanterie mécanisée peut embarquer dans un avion de transport qui peut au maximum parcourir 5000. De plus, le niveau 4 se dote d'une protection dite NBC, contre les missiles chimiques et nucléaires. En doctrine europe, les infanteries mécanisées ont +10% de dommages face aux autres infanteries, et ont leur vitesse augmentée de 10%.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://media.discordapp.net/attachments/976805179280203820/985881225791160340/16551227929417531570777596168267.jpg")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_meca_4]});
}

if (message.content === prefix + "units inf méca 5"){
    const units_inf_meca_5 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie mécanisée niveau 5")
        .setDescription("L'infanterie la plus proche des blindés")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1680 ravitaillements, 2030 matériaux rares, 2590$.\n - Pour la production : 550 ravitaillements, 1000 composants, 1250 manpower, 2000$.\n - Pour l'entretien journalier : 70 ravitaillements, 35 manpower, 30 essence, 90$.")
        .addField("Les bâtiments requis", "La base militaire niveau 2 est nécessaire pour produire une infanterie mécanisée. Elle coûte, avec le niveau 1 compris, 1000 ravitaillements, 750 composants, 1500 pétroles, 625 électroniques, et 5500$. Il faut aussi un bureau de recrutement, qui coûte 750 ravitaillements, 500 composants, 500 pétroles, 300 électroniques, et 2000$")
        .addField("Description", "L’infanterie mécanisée, au niveau 5, peut conquérir les territoires, et elle a une signature de radar basse. Elle peut aussi déployer une nuée de drones élite toutes les 6 heures, et un véhicule terrestre sans pilote toutes les 18 heures. Si elle doit parcourir une longue distance, l'infanterie mécanisée peut embarquer dans un avion de transport qui peut au maximum parcourir 5000. De plus, le niveau 5 est muni d'une protection dite NBC, contre les missiles chimiques et nucléaires. En doctrine europe, les infanteries mécanisées ont +10% de dommages face aux autres infanteries, et ont leur vitesse augmentée de 10%.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://cdn.discordapp.com/attachments/976805179280203820/985893710690652191/unknown.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_meca_5]});
}

if (message.content === prefix + "units inf méca 6"){
    const units_inf_meca_6 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie mécanisée niveau 6")
        .setDescription("L'infanterie la plus proche des blindés")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1800 ravitaillements, 2175 matériaux rares, 2775$.\n - Pour la production : 700 ravitaillements, 1150 composants, 1500 manpower, 2250$.\n - Pour l'entretien journalier : 80 ravitaillements, 45 manpower, 50 essence, 100$.")
        .addField("Les bâtiments requis", "La base militaire niveau 2 est nécessaire pour produire une infanterie mécanisée. Elle coûte, avec le niveau 1 compris, 1000 ravitaillements, 750 composants, 1500 pétroles, 625 électroniques, et 5500$. Il faut aussi un bureau de recrutement, qui coûte 750 ravitaillements, 500 composants, 500 pétroles, 300 électroniques, et 2000$")
        .addField("Description", "L’infanterie mécanisée, au niveau 3, peut conquérir les territoires, et elle a une signature de radar basse. Elle peut aussi déployer une nuée de drones élite toutes les 8 heures, et un véhicule terrestre sans pilote toutes les 18 heures. Si elle doit parcourir une longue distance, l'infanterie mécanisée peut embarquer dans un avion de transport qui peut au maximum parcourir 5000. En doctrine europe, les infanteries mécanisées ont +10% de dommages face aux autres infanteries, et ont leur vitesse augmentée de 10%.")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://media.discordapp.net/attachments/976805179280203820/985894075066646558/unknown.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_meca_6]});
}

if (message.content === prefix + "units inf mar"){
    const units_inf_mar = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie aéroportée")
        .setDescription("Veuillez saisir le niveau de l'infanterie marine que vous voulez regarder:")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Infanterie motorisée niveau 1", "!con units inf mar 1")
        .addField("Infanterie motorisée niveau 2", "!con units inf mar 2")
        .addField("Infanterie motorisée niveau 3", "!con units inf mar 3")
        .addField("Infanterie motorisée niveau 4", "!con units inf mar 4")
        .addField("Infanterie motorisée niveau 5", "!con units inf mar 5")
        .addField("Infanterie motorisée niveau 6", "!con units inf mar 6")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_mar]});
}

if (message.content === prefix + "units inf mar 1"){
    const units_inf_mar_1 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie marine niveau 1")
        .setDescription("L'infanterie du débarquement d'assaut")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Les frais pour la produire", "Produire une unité requiert une recherche, des bâtiments et des ressources.\n - Pour la recherche : 1325 ravitaillements, 1550 matériaux rares, 1900$.\n - Pour la production : 800 ravitaillements, 750 composants, 1000 manpower, 1500$.\n - Pour l'entretien journalier : 60 ravitaillements, 20 manpower, 20 essence, 80$.")
        .addField("Les bâtiments requis", "La base militaire niveau 2 est nécessaire pour produire une infanterie de marine. Elle coûte, avec le niveau 1 compris, 1000 ravitaillements, 750 composants, 1500 pétroles, 625 électroniques, et 5500$. Il faut aussi un bureau de recrutement, qui coûte 750 ravitaillements, 500 composants, 500 pétroles, 300 électroniques, et 2000$. Enfin, il faut une base navale niveau 2, qui coûte 500 ravitaillements, 750 composants, 750 essence, 500 électroniques et 2000$")
        .addField("Les statistiques", "Le premier tableau indique les statistiques en combat. Le second, les statistiques sur terrain.")
        .setImage("https://media.discordapp.net/attachments/976805179280203820/987036741825351691/unknown.png")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_mar_1]});
}









if (message.content === prefix + "units inf aéro"){
    const units_inf_aéro = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Infanterie aéroportée")
        .setDescription("Veuillez saisir le niveau de l'infanterie aéroportée que vous voulez regarder:")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .addField("Infanterie motorisée niveau 1", "!con units inf aéro 1")
        .addField("Infanterie motorisée niveau 2", "!con units inf aéro 2")
        .addField("Infanterie motorisée niveau 3", "!con units inf aéro 3")
        .addField("Infanterie motorisée niveau 4", "!con units inf aéro 4")
        .addField("Infanterie motorisée niveau 5", "!con units inf aéro 5")
        .addField("Infanterie motorisée niveau 6", "!con units inf aéro 6")
        .addField("Infanterie motorisée niveau 7", "!con units inf aéro 7")
        .setTimestamp()
        .setFooter("NotMe5063");

        message.channel.send({ embeds: [units_inf_aéro]});
}

if (message.content === prefix + "bat"){
    const bat = new Discord.MessageEmbed()
        .setTitle("Les bâtiments")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("Afin d'accéder au bâtiment voulu, veuillez saisir le code suivant")
        .addField("Base militaire", "!con bat bm")
        .addField("Base aérienne", "!con bat ba")
        .addField("Base navale", "!con bat bn")
        .addField("Bureau de recrutement", "!con bat br")
        .addField("Industrie de l'armement", "!con bat indu")
        .addField("Laboratoire secret de fabrication d'armes", "!con bat labo")
        .addField("Hôpital militaire", "!con bat hosto")
        .addField("Bunker souterrain", "!con bat bunker")
        .addField("Annexion d'une ville", "!con bat annex");

    message.channel.send({embeds : [bat]});
}

if (message.content === prefix + "bat bm"){
    const bat_bm = new Discord.MessageEmbed()
        .setTitle("La base militaire")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("Les bases militaires, sources de la production terrestre")
        .addField("Au niveau 1 :", "- Coûts : 250 ravi / 250 compo / 500 essence / 250 électro / 3500$\n - Permet de débloquer l'infanterie motorisée\n - Entretien journalier : 100$\n - Délai de construction : 1 minute 30 secondes.\n - Points de vie : 10")
        .addField("Au niveau 2 :", "- Coûts : 750 ravi / 500 compo / 1000 essence / 375 électro / 2000$\n - Permet de débloquer les blindés, avec une industrie de l'armement.\n - Entretien journalier : 110$\n - Délai de construction : 1 jour 4h.\n - Points de vie : 15")
        .addField("Au niveau 3 :", "- Coûts : 1250 ravi / 750 compo / 1500 essence / 500 électro / 5500$\n - Permet de débloquer l'artillerie mobile, ou le SAM.\n - Entretien journalier : 120$\n - Délai de construction : 1 jour 8 heures.\n - Points de vie : 20")
        .addField("Au niveau 4 :", "- Coûts : 2000 ravi / 1000 compo / 250 mr / 2000 essence / 750 électro / 7500$\n - Permet de débloquer le lance roquette multiple\n - Entretien journalier : 130$\n - Délai de construction : 1 jour 10 heures.\n - Points de vie : 25")
        .addField("Au niveau 5 :", "- Coûts : 2500 ravi / 1500 compo / 500 mr / 2500 essence / 1000 électro / 9500$\n - Permet de débloquer le système de défense de théatre.\n - Entretien journalier : 140$\n - Délai de construction : 1 jour 12 heures.\n - Points de vie : 30")

    message.channel.send({embeds : [bat_bm]});
}

if (message.content === prefix + "bat ba"){
    const bat_ba = new Discord.MessageEmbed()
        .setTitle("La base aérienne")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("Les bases aériennes, sources de la production aéronautique")
        .addField("Au niveau 1 :", "- Coûts : 750 ravi / 1000 compo / 1000 essence / 500 électro / 2750$\n - Permet de débloquer le chasseur de supériorité aérienne, ou l'hélicoptère de combat.\n - Production de ressource : +5%\n - Délai de construction : 1 jour\n - Points de vie : 10")
        .addField("Au niveau 2 :", "- Coûts : 1000 ravi / 1250 compo / 1500 essence / 750 électro / 4750$\n - Permet de débloquer les chasseurs bombardiers, ou les hélicoptères d'attaque avec une industrie de l'armement.\n - Production de ressource : +10%\n - Délai de construction : 1 jour 2h.\n - Points de vie : 15")
        .addField("Au niveau 3 :", "- Coûts : 1250 ravi / 1500 compo / 2000 essence / 1000 électro / 6750$\n - Permet de débloquer les bombardiers lourds, ou l'avion de patrouille maritime.\n - Production de ressource : +15%\n - Délai de construction : 1 jour 4 heures.\n - Points de vie : 20")
        .addField("Au niveau 4 :", "- Coûts : 1500 ravi / 2000 compo / 500 mr / 2500 essence / 1250 électro / 8750$\n - Permet de débloquer le SDCA.\n - Production de ressource : +20%\n - Délai de construction : 1 jour 6 heures.\n - Points de vie : 25")
        .addField("Au niveau 5 :", "- Coûts : 1750 ravi / 2500 compo / 750 mr / 3000 essence / 1500 électro / 11000$\n - Permet de débloquer les unités aérienne furtives.\n - Production de ressources : +25%\n - Délai de construction : 1 jour 8 heures.\n - Points de vie : 30")

    message.channel.send({embeds : [bat_ba]});
}

if (message.content === prefix + "bat bn"){
    const bat_bn = new Discord.MessageEmbed()
        .setTitle("La base navale")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("Les bases navales, sources de la production maritime")
        .addField("Au niveau 1 :", "Le niveau 1 des bases navales est construit automatiquement sur toutes les villes.")
        .addField("Au niveau 2 :", "- Coûts : 500 ravi / 750 compo / 750 essence / 500 électro / 2000$\n - Permet de débloquer les corvettes et frégates avec une industrie de l'armement.\n - Production de ressource : +5%\n - Délai de construction : 9 heures.\n - Temps d'embarquement : - 10%\n - Points de vie : 10")
        .addField("Au niveau 3 :", "- Coûts : 750 ravi / 1000 compo / 1250 essence / 750 électro / 3500$\n - Permet de débloquer les destroyers.\n - Production de ressource : +10%\n - Délai de construction : 1 jour 6 heures.\n - Temps d'embarquement : - 20%\n - Points de vie : 15")
        .addField("Au niveau 4 :", "- Coûts : 1000 ravi / 1500 compo / 1750 essence / 1000 électro / 5500$\n - Permet de débloquer les croiseurs.\n - Production de ressource : +15%\n - Délai de construction : 1 jour 8 heures.\n - Temps d'embarquement : - 40%\n - Points de vie : 20")
        .addField("Au niveau 5 :", "- Coûts : 1500 ravi / 2000 compo / 350 mr / 2250 essence / 1250 électro / 7500$\n - Permet de débloquer les portes-avions.\n - Production de ressources : +20%\n - Délai de construction : 1 jour 10 heures.\n - Temps d'embarquement : - 50%\n - Points de vie : 25")

    message.channel.send({embeds : [bat_bn]});
}

if (message.content === prefix + "bat br"){
    const bat_br = new Discord.MessageEmbed()
        .setTitle("Le bureau de recrutement")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("Les bureaux de recrutement, sources de manpower")
        .addField("Au niveau 1 :", "- Coûts : 250 ravi / 250 compo / 500 essence / 250 électro / 2000$\n - Permet de débloquer la Garde Nationale.\n - Production de ressource : +200 manpower/jour\n - Délai de construction : 30 minutes\n - Génération de main d'oeuvre : +5%\n - Vitesse de mobilisation : +10%\n - Points de vie : 10")
        .addField("Au niveau 2 :", "- Coûts : 750 ravi / 500 compo / 500 essence / 500 électro / 2000$\n - Production de ressource : +200 manpower/jour\n - Délai de construction : 1 jour 2 heures\n - Génération de main d'oeuvre : +10%\n - Vitesse de mobilisation : +25%\n - Points de vie : 15")
        .addField("Au niveau 3 :", "- Coûts : 1500 ravi / 750 compo / 750 essence / 750 électro / 3375$\n - Production de ressource : +200 manpower/jour\n - Délai de construction : 30 minutes\n - Génération de main d'oeuvre : +15%\n - Vitesse de mobilisation : +45%\n - Points de vie : 20")
        .addField("Au niveau 4 :", "- Coûts : 2000 ravi / 1000 compo / 1000 essence / 1000 électro / 5000$\n - Production de ressource : +200 manpower/jour\n - Délai de construction : 30 minutes\n - Génération de main d'oeuvre : +20%\n - Vitesse de mobilisation : +70%\n - Points de vie : 25")
        .addField("Au niveau 5 :", "- Coûts : 2500 ravi / 1500 compo / 1250 essence / 1250 électro / 6750$\n - Production de ressource : +200 manpower/jour\n - Délai de construction : 30 minutes\n - Génération de main d'oeuvre : +25%\n - Vitesse de mobilisation : +100%\n - Points de vie : 30")

    message.channel.send({embeds : [bat_br]});
}

if (message.content === prefix + "bat indu"){
    const bat_indu = new Discord.MessageEmbed()
        .setTitle("L'industrie de l'armement")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("Les bureaux de recrutement, sources de manpower")
        .addField("Au niveau 1 :", "- Coûts : 400 ravi / 350 compo / 225 mr / 350 essence / 250 électro / 1250$\n - Production de ressource : +10%\n - Délai de construction : 9 heures\n - Bonus de production de ressource : +100$/jour\n  - Points de vie : 10")
        .addField("Au niveau 2 :", "- Coûts : 450 ravi / 450 compo / 275 mr / 400 essence / 300 électro / 1250$\n - Production de ressource : +20%\n - Délai de construction : 1 jour\n - Bonus de production de ressource : +135$/jour\n  - Points de vie : 15")
        .addField("Au niveau 3 :", "- Coûts : 500 ravi / 500 compo / 300 mr / 425 essence /  325 électro / 3000$\n - Production de ressource : +30%\n - Délai de construction : 1 jour 6 heures\n - Bonus de production de ressource : +165$/jour\n  - Points de vie : 20")
        .addField("Au niveau 4 :", "- Coûts : 525 ravi / 525 compo / 325 mr / 450 essence / 350 électro / 4000$\n - Production de ressource : +40%\n - Délai de construction : 1 jour 12 heures\n - Bonus de production de ressource : +185$/jour\n  - Points de vie : 25")
        .addField("Au niveau 5 :", "- Coûts : 550 ravi / 550 compo / 350 mr / 475 essence / 375 électro / 5000$\n - Production de ressource : +50%\n - Délai de construction : 2 jours\n - Bonus de production de ressource : +200$/jour\n  - Points de vie : 30")
        
    message.channel.send({embeds : [bat_indu]});
}

if (message.content === prefix + "bat labo"){
    const bat_labo = new Discord.MessageEmbed()
        .setTitle("Le laboratoire de l'armement secret")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("Le laboratoire, source de l'armement nucléaire")
        .addField("Au niveau 1 :", "- Coûts : 750 ravi / 400 compo / 500 mr / 250 essence / 750 électro / 3500$\n - Le niveau 1 du laboratoire permet de produire les unités aériennes furtives, les ogives conventionnelles ou encore des unités de saison.\n - Délai de construction : 1 jour 1 heure\n - Entretien : 100$/jour\n  - Points de vie : 10")
        .addField("Au niveau 2 :", "- Coûts : 1000 ravi / 800 compo / 1000 mr / 500 essence / 1000 électro / 5500$\n - Le niveau 2 du laboratoire permet de produire les ogives chimiques.\n - Délai de construction : 1 jour 2 heure\n - Entretien : 110$/jour\n  - Points de vie : 15")
        .addField("Au niveau 3 :", "- Coûts : 1500 ravi / 1200 compo / 1500 mr / 750 essence / 1500 électro / 7500$\n - Le niveau 3 du laboratoire permet de produire les lance missiles balistiques et de croisière.\n - Délai de construction : 1 jour 4 heure\n - Entretien : 120$/jour\n  - Points de vie : 20")
        .addField("Au niveau 4 :", "- Coûts : 2500 ravi / 1600 compo / 2000 mr / 1000 essence / 2000 électro / 10 000$\n - Le niveau 4 du laboratoire permet de produire les ogives nucléaires.\n - Délai de construction : 1 jour 7 heure\n - Entretien : 130$/jour\n  - Points de vie : 25")
        .addField("Au niveau 5 :", "- Coûts : 3500 ravi / 2000 compo / 2500 mr / 1250 essence / 2500 électro / 12 500$\n - Le niveau 5 du laboratoire permet de produire le lance missile balistiques intercontinentaux.\n - Délai de construction : 1 jour 12 heure\n - Entretien : 140$/jour\n  - Points de vie : 30")
        
        
    message.channel.send({embeds : [bat_labo]});
}

if (message.content === prefix + "bat hosto"){
    const bat_hosto = new Discord.MessageEmbed()
        .setTitle("Le laboratoire de l'armement secret")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("Le laboratoire, source de l'armement nucléaire")
        .addField("Au niveau 1 :", "- Coûts : 500 ravi / 500 compo / 250 essence / 250 électro / 1350$\n - Vitesse de guérison : +1PV/jour \n - Délai de construction : 1 jour 1 heures\n Croissance de la population : +20%\n - Entretien : 100$/jour\n  - Points de vie : 10")
        .addField("Au niveau 2 :", "- Coûts : 750 ravi / 650 compo / 500 essence / 375 électro / 2000$\n - Vitesse de guérison : +2PV/jour \n - Délai de construction : 1 jour 2 heures\n Croissance de la population : +30%\n - Entretien : 110$/jour\n  - Points de vie : 15")
        .addField("Au niveau 3 :", "- Coûts : 1000 ravi / 750 compo / 700 essence / 500 électro / 4000$\n - Vitesse de guérison : +3PV/jour \n - Délai de construction : 1 jour 3 heures\n Croissance de la population : +40%\n - Entretien : 120$/jour\n  - Points de vie : 20")
        .addField("Au niveau 4 :", "- Coûts : 1500 ravi / 1000 compo / 850 essence / 625 électro / 6000$\n - Vitesse de guérison : +4PV/jour \n - Délai de construction : 1 jour 5 heures\n Croissance de la population : +55%\n - Entretien : 130$/jour\n  - Points de vie : 25")
        .addField("Au niveau 5 :", "- Coûts : 2000 ravi / 1500 compo / 1000 essence / 750 électro / 7500$\n - Vitesse de guérison : +5PV/jour \n - Délai de construction : 1 jour 8 heures\n Croissance de la population : +75%\n - Entretien : 140$/jour\n  - Points de vie : 30")
        
        
        
    message.channel.send({embeds : [bat_hosto]});
}

if (message.content === prefix + "bat bunker"){
    const bat_bunker = new Discord.MessageEmbed()
        .setTitle("Le laboratoire de l'armement secret")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("Le laboratoire, source de l'armement nucléaire")
        .addField("Au niveau 1 :", "- Coûts : 500 ravi / 750 compo / 750 essence / 2000$\n - Dégâts subis par la garnison : -33% \n - Délai de construction : 9 heures\n - Moral : +5%\n - Entretien : 100$/jour\n  - Points de vie : 20")
        .addField("Au niveau 2 :", "- Coûts : 1000 ravi / 1000 compo / 1250 essence / 3500$\n - Dégâts subis par la garnison : -43% \n - Délai de construction : 12 heures\n - Moral : +10%\n - Entretien : 110$/jour\n  - Points de vie : 40")
        .addField("Au niveau 3 :", "- Coûts : 1500 ravi / 1250 compo / 1500 essence / 5000$\n - Dégâts subis par la garnison : -56% \n - Délai de construction : 15 heures\n - Moral : +20%\n - Entretien : 120$/jour\n  - Points de vie : 75")
        .addField("Au niveau 4 :", "- Coûts : 2000 ravi / 1500 compo / 1750 essence / 6500$\n - Dégâts subis par la garnison : -68% \n - Délai de construction : 17 heures\n - Moral : +35%\n - Entretien : 130$/jour\n  - Points de vie : 100")
        .addField("Au niveau 5 :", "- Coûts : 2500 ravi / 1750 compo / 2000 essence / 8000$\n - Dégâts subis par la garnison : -73% \n - Délai de construction : 20 heures\n - Moral : +50%\n - Entretien : 140$/jour\n  - Points de vie : 125")
        
        
    message.channel.send({embeds : [bat_bunker]});
}

if(message.content === prefix + "bat qg"){
    const bat_qg = new Discord.MessageEmbed()
        .setTitle("Le Quartier Général")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("- Coûts : 2500 manpower / 15000$.\n -  Délai de construction : 1 jour 12 heures.\n - Le Quartier Général donne 25% de moral à la ville sur laquelle il est. S'il est capturé par l'ennemi, votre nation baisse sensiblement de moral.")

    message.channel.send({ embeds : [bat_qg]});
}

if(message.content === prefix + "bat annex"){
    const bat_qg = new Discord.MessageEmbed()
        .setTitle("L'annexion")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription(" - Coûts : 4250 ravitaillements / 3750 composants / 1250 manpower / 1500 mr / 2500 essences / 1750 électroniques / 15000$.\n - Délai de construction : 18 heures\n -  L'annexion vous permet de mobiliser des unités sur une ville conquise, augmente le moral maximum à 75%, et augmente la production de la ville de 25 à 50%.")

    message.channel.send({ embeds : [bat_qg]});
}

if(message.content === prefix + "bat forto"){
    const bat_forto = new Discord.MessageEmbed()
        .setTitle("L'avant poste de combat")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("L'avant poste de combat, tranchée improvisée pour la défense")
        .addField("Au niveau 1", "- Coûts : 500 ravitaillements / 750 composants / 2000$\n - Délai de construction : 1 heure\n - Dégâts subis par la garnison : - 33%\n - Moral de la province : +10%\n - Entretien journalier : 100$\n Points de vie : 15")
        .addField("Au niveau 2", "- Coûts : 750 ravitaillements / 900 composants / 2750$\n - Délai de construction : 4 heures 30 minutes\n- Dégâts subis par la garnison : - 50%\n - Moral de la province : +13%\n - Entretien journalier : 110$\n Points de vie : 25")
        .addField("Au niveau 3", "- Coûts : 1000 ravitaillements / 1000 composants / 3500$\n - Délai de construction : 9 heures\n - Dégâts subis par la garnison : - 65%\n - Moral de la province : +15%\n - Entretien journalier : 120$\n Points de vie : 30")

    message.channel.send({ embeds : [bat_forto]});
}

if(message.content === prefix + "bat aérodrome"){
    const bat_forto = new Discord.MessageEmbed()
        .setTitle("L'aérodrome")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("- Coûts : 700 ravitaillements / 900 composants / 800 essences / 2500$\n - Délai de construction : 21 heures\n - Entretien journalier : 100$\n Points de vie : 10")        

    message.channel.send({ embeds : [bat_forto]});
}

if(message.content === prefix + "bat hosto pro"){
    const bat_hosto_pro = new Discord.MessageEmbed()
        .setTitle("L'hôpital de campagne")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("L'hôpital de campagne, pour guérir les unités au front")
        .addField("Au niveau 1", "- Coûts : 750 ravitaillements / 750 composants / 1250$\n - Délai de construction : 9 heures\n - Guérison : +1PV/jour\n - Moral de la province : +10%\n - Entretien journalier : 100$\n Points de vie : 7")
        .addField("Au niveau 2", "- Coûts : 1000 ravitaillements / 900 composants / 1750$\n - Délai de construction : 18 heures 30 minutes\n- Guérison : +2PV/jour\n - Moral de la province : +13%\n - Entretien journalier : 110$\n Points de vie : 12")
        .addField("Au niveau 3", "- Coûts : 1250 ravitaillements / 1100 composants / 3500$\n - Délai de construction : 24 heures\n - Guérison : +3PV/jour\n - Moral de la province : +15%\n - Entretien journalier : 120$\n Points de vie : 15")

    message.channel.send({ embeds : [bat_hosto_pro]});
}

if(message.content === prefix + "bat indu loc"){
    const bat_indu_loc = new Discord.MessageEmbed()
        .setTitle("L'industrie locale")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("L'industrie locale, pour améliorer la petite production")
        .addField("Au niveau 1", "- Coûts : 750 ravitaillements / 750 composants / 1500$\n - Délai de construction : 9 heures\n  - Production de ressources : +100%\n Points de vie : 10")
        .addField("Au niveau 2", "- Coûts : 900 ravitaillements / 900 composants / 2000$\n - Délai de construction : 18 heures 30 minutes\n - Production de ressources : +150% \n Points de vie : 15")
        .addField("Au niveau 3", "- Coûts : 1000 ravitaillements / 1000 composants / 2500$\n - Délai de construction : 1 jour 3 heures\n - Production de ressources : +200% \n Points de vie : 20")

    message.channel.send({ embeds : [bat_indu_loc]});
}

if(message.content === prefix + "bat log"){
    const bat_log = new Discord.MessageEmbed()
        .setTitle("La logistique militaire")
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setDescription("Coûts : 250 ravitaillements / 250 composants / 250 essences / 500$. La logistique militaire vous permet d'accélérer le déplacement de vos unités de 150%. Ce modificateur d'applique aux ennemis sur votre territoire et à vos alliés.")

    message.channel.send({ embeds : [bat_log]});
}

if (message.content === prefix + "jump 0.2"){
    const jump_0_2 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setThumbnail("https://imgs.search.brave.com/qjJId41a1i16DlqchfvaFKawZCGULPaqs8iu1rp4_iQ/rs:fit:370:312:1/g:ce/aHR0cHM6Ly9kZS5j/b25mbGljdG5hdGlv/bnMuY29tL2ZpbGVh/ZG1pbi90ZW1wbGF0/ZXMvY29uZmxpY3Ru/YXRpb25zL2ltYWdl/cy9sb2dpbl9yZWdp/c3Rlcl9ib3gvbG9n/b19scDEwOC5wbmc")
        .setTitle("Le jump")
        .setDescription("Le jump est une technique du jeu qui permet de se téléporter au centre d'une province en en étant à moins de 5 de distance. Pour l'activer, il faut actualiser le mouvement de l'unité.")
        .addField("Le jump à 0.2 de vitesse", "Vous pouvez jump à 25 minutes du centre de la province");
        message.channel.send({embeds : [jump_0_2]});
}
});

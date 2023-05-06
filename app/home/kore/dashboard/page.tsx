const config = require('../../../../config.js');

const {Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login(config.discord.bot_token);

const DarkDashboard = require('dbd-dark-dashboard');
const DBD = require("discord-dashboard");
let langsSettings = {};

(async ()=>{
    let DBD = require('discord-dashboard');
    await DBD.useLicense(config.dbd_license);
    DBD.Dashboard = DBD.UpdatedClass();

    const Dashboard = new DBD.Dashboard({
        port: 3000,
        client: {
            id: config.discord.client_id,
            secret: config.discord.client_secret
        },
        redirectUri: config.redirect_uri,
        domain: 'http://localhost/home/kore/dashboard',
        bot: client,
        theme: DarkDashboard(DBD.default_configs.dbdDarkDashboard),
    });
    Dashboard.init();
})();
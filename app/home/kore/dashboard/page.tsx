const config = require('../../../../config.js');

import { Client, IntentsBitField } from "discord.js";

const client = new Client({ intents: [IntentsBitField.Flags.Guilds] });

client.login(config.discord.bot_token);

//@ts-ignore
import DarkDashBoard from "dbd-soft-ui";
import dbd from "discord-dashboard";

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
        //@ts-ignore
        theme: DarkDashboard(DBD.default_configs.dbdDarkDashboard),
    });
    Dashboard.init();
})();

const page = () => (
    <div>
    
    </div>
)

export default page;
import '../../src/styles/styles.css';
import '../../src/styles/bootstrap.css';
import '../../src/styles/modesta.css';

import Background from '../../src/images/background.png';

import FooterComponent from '@/public/footer';

import Image from 'next/image';

function Kore() {
  return (
    <div className="Kore">
        <div className="Home">
            <div className="fullscreen">
            <div><Image className="background" src={Background} alt=""></Image></div>
                <section className="me">
                    <section className="center-object overlay">
                        <h1>Kore</h1><br>
                        </br>
                        <p className="ktext">Kore is a Vrchat/Discord.js interactive bot for Vrchat Clubs aimed at making the process of club work easier. so you can have more fun!</p>
                        <section className="buttons">
                            <a href="https://discord.com/oauth2/authorize?client_id=1102004963347017919&scope=bot&permissions=8" className="btn animation hover discord-dropshadow">Invite Kore</a>
                            <a href="https://github.com/MythicXGN/Kore" className="btn animation hover github-dropshadow">Kore's Github</a>
                            <a href="/home/kore/dashboard" className="btn animation hover emerald-dropshadow">Kore Dashboard</a>
                        </section>
                    </section>
                </section>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
  );
}

export default Kore;
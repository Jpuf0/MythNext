import '../src/styles/styles.css';
import '../src/styles/bootstrap.css';
import '../src/styles/modesta.css';

import Background from '../src/images/background.png';
import BackgroundAboutMe from '../src/images/backgroundAboutme.png';
import BackgroundClubs from '../src/images/clubsBackground.png';
import Queen_LBQ from '../src/images/Queen_LBQ.png';

import HeaderComponent from '@/public/headder';
import FooterComponent from '@/public/footer';

import Image from 'next/image';

function Home() {
  return (
    <main className="Home">
        <div className="fullscreen">
          <div><Image src={Background} alt="" className="background"></Image></div>
            <section className="me">
              <section className="center-object overlay">
                <div className="alert alert-danger">
                  <p className="text-dark">Webpage Under Redevelpment Please Check Back Later</p>
                </div>
                  <a href="https://discord.com/users/847363776961314817"><img src="https://lanyard.cnrad.dev/api/847363776961314817?bg=23283d&borderRadius=8px" alt=""></img></a><br>
                  </br>
                  <a href="https://github.com/MythicXGN">
                    <img src="https://github-readme-stats.vercel.app/api?username=MythicXGN&count_private=true&show_icons=true&theme=tokyonight&hide_border=true" alt=""></img>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MythicXGN&theme=tokyonight&layout=compact&hide_border=true" alt="" height={"195px"} className=""></img>
                  </a>
                  <section className="buttons">
                    <a href="https://patreon.com/MythicStudios" className="btn animation hover patreon-dropshadow">Support My Work</a>
                  </section>
              </section>
            </section>
        </div>
        <div className="fullscreen">
          <div><Image src={BackgroundAboutMe} alt="" className="aboutMeback"></Image></div>
          <section className="me">
            <section className="center-object overlay">
              <div className="jumbotron bg-dark">
                <h1>About Me!</h1>
                <p>Hi Im Mythic, aka Thomas. Im a 20 year old Developer / World Creator with the passion to make everyones vrchat experience better and more amazing.</p><br>
                </br>
                <p>I love all of the people who support me and if there is any form of benifits you would like to see off of patreon lmk.</p><br>
                </br>
                <p>Looking for work done? Discord bot / World? Etc. Message me on Discord! Dms are always open</p>
              </div>
            </section>
          </section>
        </div>
        <section className="center">
          <div className="lem-jumbotron jumbotron bg-dark lem center"><h1>Amazing People</h1></div>
        </section>
        <div className="fullscreen fs">
          <div><Image src={Queen_LBQ} alt="" className="Queen"></Image></div>
          <section className="me center-object">
            <h2>Queen_LBQ</h2>
              <p>Vrc Mother
                & Owner of Royal Phoenix
              </p>
          </section>
        </div>
        <div className="fullscreen">
          <div><Image src={BackgroundClubs} alt="" className="clubsBackground"></Image></div>
            <section className="me">
              <section className="center-object overlay">
                <div className="jumbotron bg-dark center">
                <h1>Amazing Clubs</h1>
                  <section className="sadism">
                    <img src="https://i.imgur.com/00cVYAi.png" className="avatar" alt=""></img>
                    <a href="https://discord.gg/sadism" className="btn animation hover sadism-dropshadow">Sadism</a>
                  </section>
                  <section className="royalphx">
                    <img src="https://i.imgur.com/1NHq4Yp.png" className="avatar" alt=""></img>
                    <a href="https://discord.gg/royalphoenix" className="btn animation hover royalphx-dropshadow">The Royal Phoenix</a>
                  </section>
                  <section className="dystopia">
                    <img src="https://media.discordapp.net/attachments/1092530538688040980/1095036671340322836/Untitled_design.gif" className="avatar" alt=""></img>
                    <a href="https://discord.gg/clubdystopia" className="btn animation hover dystopia-dropshadow">Dystopia</a>
                  </section>
                  <section className="ds">
                    <img src="https://i.imgur.com/q2EoNmC.png" className="avatar-ds" alt=""></img>
                    <a href="https://discord.gg/clubdesirablesecrets" className="btn animation hover ds-dropshadow">Desirable Secrets</a>
                  </section>
                  <br>
                  </br>
                  <section className="ignit">
                    <img src="https://i.imgur.com/Jx6TjEa.jpg" className="avatar" alt=""></img>
                    <a href="https://discord.gg/ignit-entertainment" className="btn animation hover ignit-dropshadow">Ignit Entertainment</a>
                  </section>
                  <section className="playhouse">
                    <img src="https://cdn.discordapp.com/attachments/1096869341640786084/1101624386554957906/Playhouse_2.gif" className="avatar-ph"></img>
                    <a href="" className="btn animation hover playhouse-dropshadow">The Playouse</a>
                  </section>
                </div>
                <p>Background Image: The Royal Phoenix '4/9/2023'</p>
              </section>
            </section>
            <FooterComponent></FooterComponent>
        </div>
    </main>
  );
}

export default Home;
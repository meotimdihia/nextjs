import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
         var ramp = { mode: 'ramp', config: '//config.playwire.com/1024601/v2/websites/73441/banner.json', passiveMode: true, }

          var pwUnits = [
            {
              selectorId: 'leaderboard_atf',
              type: 'leaderboard_atf'
            },
            {
              selectorId: 'leaderboard_btf',
              type: 'leaderboard_btf'
            },
            {
              selectorId: 'med_rect_atf',
              type: 'med_rect_atf'
            },
            {
              selectorId: 'med_rect_btf',
              type: 'med_rect_btf'
            },
            {
              selectorId: 'sky_atf',
              type: 'sky_atf'
            },
            {
              selectorId: 'sky_btf',
              type: 'sky_btf'
            }, 
            {
              type: 'desktop_in_article'
            }, 
            {
              type: 'trendi_video'
            },
            {
              type: 'bottom_rail'
            }
          ]

          var init = function () {  
            ramp
            // pass in the array where you defined the units
            .addUnits(pwUnits)
            .then(() => {
              console.log(document.getElementsById("leaderboard_atf"))
              // then show the units
              ramp.displayUnits()
            }).catch( (e) =>{
              // catch errors
              ramp.displayUnits()
              console.log(e)
            })
          }

         `,
          }}
        />
      </Head>
      <Script
        id="ramp"
        src="//cdn.intergient.com/ramp.js"
        type="text/javascript"
      />
      <Script
        id="pageos"
        src="//cdn.intergient.com/pageos/pageos.js"
        type="text/javascript"
      />
      <div className={styles.container}>
        <div id="sky_btf"></div>
        <div id="sky_atf"></div>
        <div id="leaderboard_btf"></div>
        <div id="leaderboard_atf"></div>
        <div id="med_rect_atf"></div>
        <div id="med_rect_btf"></div>
      </div>
    </>
  );
};

export default Home;

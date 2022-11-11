import React from "react"
import profile from "../config.json";
import { CSSReset } from "../src/Components/CssReset";
import Menu from "../src/Components/Menu/";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";
import Favorites from "../src/components/Favorites";

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState('');
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlist={profile.playlist}></Timeline>
        <Favorites favorites={profile.favorites} />
      </div>
    </>
  );
}

export default HomePage;

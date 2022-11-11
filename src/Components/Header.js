import styled from "styled-components";
import profile from "../../config.json";
import banner from "../assets/banner-bg.png";

const StyleHeader = styled.div`
    .banner {
    margin-top: 3.4rem;
    width: 100%;
    height: 14.375rem;
  }

  .user img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .user {
    display: flex;
    width: 25.0625rem;
    height: 7rem;
    padding: 1rem;
  }
  .user-info{
    margin-left: 1.20rem;
    margin-top: 0.8125rem;
    
  }
  .user-info h2 {
    width: 19.375rem;
    height: 1.75rem;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #000000;
  }
  .user-info p {
    width: 10.75rem;
    height: 1.125rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.125rem;
    color: #666666;
  }
`;

export default function Header() {
  return (
    <StyleHeader>
      <img className="banner" src={banner.src} alt="Imagem banner" />
      <section className="user">
        <img
          src={`https://github.com/${profile.gitHub}.png`}
          alt="Imagem perfil"
        />
        <div className="user-info">
          <h2>{profile.name}</h2>
          <p>{profile.job}</p>
        </div>
      </section>
    </StyleHeader>
  );
}

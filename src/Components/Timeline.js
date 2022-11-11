import styled from "styled-components"; 

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 13.125rem;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 1rem;
    div {
      
      width: calc(100vw - 1rem * 4);
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fill,minmax(12.5rem,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(12.5rem,1fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 0.5rem;
          display: block;
          padding-right: 1.5rem;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }

  * {
  outline: 0;
  scrollbar-color: #000 transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 0.50rem;
    height: 0.5625rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    border: 0.1875rem solid transparent;
    background: #b3b2b3;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
}
`;


export default function Timeline({searchValue, ...props}) {
    const playlistNames = Object.keys(props.playlist);
    return (
      <StyledTimeline>
        {playlistNames.map((playlistName) => {
          const videos = props.playlist[playlistName];
          return (
            <section>
              <h2>{playlistName}</h2>
              <div>
                {videos.filter((video)=>{
                    const titleNormalize = video.title.toLowerCase()
                    console.log(titleNormalize)
                    const searchNormalize = searchValue.toLowerCase()
                    console.log(searchNormalize)
                   return titleNormalize.includes(searchNormalize)
                }).map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </StyledTimeline>
    );
  }
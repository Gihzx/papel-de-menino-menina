import * as S from "./style.jsx";
function VideoYoutube() {
  return (
    <>
      <S.Container>
        <h1>O que fazemos ?</h1>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dvBa56TSV-Y?si=JbXpRxWg7RnY-e1D"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="VideoYoutube"
          ></iframe>
        </div>
      </S.Container>
    </>
  );
}
export default VideoYoutube;

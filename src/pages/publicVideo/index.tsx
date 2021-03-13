import IVSPlayer from "@components/atoms/IVSPlayer";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

/** 라이브 스트리밍 url */
const playBackUrl = process.env.NEXT_PUBLIC_PLAYBACK_URL;

export default function Home() {
  return (
    <Wrapper>
      {/** IVS 플레이어 */}
      <IVSPlayer src={playBackUrl} />
    </Wrapper>
  );
}

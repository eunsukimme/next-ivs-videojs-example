import IVSPlayer from "@components/atoms/IVSPlayer";
import QuizModal from "@components/molecules/QuizModal";
import useQuiz from "@hooks/useQuiz";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

/** 라이브 스트리밍 url */
const playBackUrl = process.env.NEXT_PUBLIC_PLAYBACK_URL;

export default function Home() {
  const [src, setSrc] = useState(playBackUrl);
  const {
    showQuizModal,
    quizInfo,
    handleQuizEvent,
    handleClickAnswer,
  } = useQuiz();

  /**
   * 컴포넌트가 첫 렌더링되면 쿠키에 저장된 plabackToken 을 가져와 쿼리 파라미터로 추가한다
   */
  useEffect(() => {
    const cookies = new Cookies();
    const playbackToken = cookies.get("playbackToken");
    if (playbackToken) {
      setSrc(`${src}?token=${playbackToken}`);
    }
  }, []);

  return (
    <Wrapper>
      {/** IVS 플레이어 */}
      <IVSPlayer src={src} handleQuizEvent={handleQuizEvent} />
      {/** 퀴즈 모달 */}
      {showQuizModal && (
        <QuizModal quizInfo={quizInfo} onClickAnswer={handleClickAnswer} />
      )}
    </Wrapper>
  );
}

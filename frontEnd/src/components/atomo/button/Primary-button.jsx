import * as S from "./style.jsx";
export function PrimaryButton({ children, onClick, style }) {
  return (
    <S.button onClick={onClick} style={style}>
      {children}
    </S.button>
  );
}

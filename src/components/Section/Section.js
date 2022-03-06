import styled from "styled-components";

const MainSection = styled.section`
  background: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

function Section(props) {
  return props.custom ? (
    <MainSection bgImg={props.bgImg} className="custom-section">
      {props.children}
    </MainSection>
  ) : (
    <MainSection
      bgImg={props.bgImg}
      className="main-section"
      style={{
        backgroundColor: props.bgColor ? props.bgColor : "",
        overflow: props.overflow ? "hidden" : "",
      }}
    >
      {props.children}
    </MainSection>
  );
}

export default Section;

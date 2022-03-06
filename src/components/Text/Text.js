import styled from "styled-components";

const Head = styled.h1`
  width: 2258px;
  font-weight: 300;
  line-height: 305px;
  text-transform: capitalize;
  font-size: 100px;
  display: flex;
  justify-content: ${(props) => (props.right ? "space-around" : "flex-start")};
  user-select: none;
  position: absolute;
  top: ${(props) => (props.right ? "180px" : "295px")};
  left: ${(props) => (props.right ? "-230px" : "-160px")};
  z-index: 99;
  color: ${(props) => (props.white ? "white" : "black")};
  @media (max-width: 767px) {
    left: ${(props) => (props.right ? "-665px" : "-413px")};
    bottom: ${(props) => (props.right ? "40px" : "-33px")} !important;
    top: initial
  }
  }
`;

//left: -665px;
//bottom: 40px;

const Custom = styled.h1`
  width: 2258px;
  font-weight: 300;
  line-height: 305px;
  text-transform: capitalize;
  font-size: 298px;
  user-select: none;
  position: absolute;
  bottom: 105px;
  left: 303px;
  z-index: 99;
  color: black;
  @media (max-width: 767px) {
    width: 200px;
    font-size: 100px;
    bottom: initial;
    left: initial;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 150px;
  }
`;

function Text({ text, big, right, white, custom }) {
  return (
    <>
      {custom ? (
        <Custom>{text}</Custom>
      ) : (
        <Head big={big} right={right} white={white}>
          {text}
        </Head>
      )}
    </>
  );
}

export default Text;

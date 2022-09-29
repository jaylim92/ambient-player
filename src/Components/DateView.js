import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 20px;
`;

const TimeView = styled.span`
  display: flex;
  font-size: 30px;
  span:first-child {
    font-weight: 700;
  }
  span:nth-child(2) {
    margin-left: 5px;
    color: gray;
  }
`;

function DateView() {
  let now = new Date();
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOfWeek = week[now.getDay()];
  let hours = now.getHours();

  let minutes = now.getMinutes();

  return (
    <Wrapper>
      <TimeView>
        <span>
          {" "}
          {hours < 10 ? `0${hours}` : hours}:{minutes}
        </span>
        <span>{hours > 12 ? "p.m" : "a.m"}</span>
        {dayOfWeek}
      </TimeView>
    </Wrapper>
  );
}

export default DateView;

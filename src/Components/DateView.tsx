import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 20px;
`;

const TimeView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 30px;
`;

const Time = styled.span`
  margin-bottom: 5px;
  span:first-child {
    font-weight: 700;
  }
  span:nth-child(2) {
    margin-left: 5px;
    color: gray;
  }
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 20px;
  div {
    margin: 5px 0px;
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
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dayOfWeek = week[now.getDay()];
  let month = monthNames[now.getMonth()];
  let year = now.getFullYear();
  let hours = now.getHours();
  let date = now.getDate();
  let minutes = now.getMinutes();

  return (
    <Wrapper>
      <TimeView>
        <Time>
          <span>
            {hours < 10 ? `0${hours}` : hours}:{minutes}
          </span>
          <span>{hours > 12 ? "p.m" : "a.m"}</span>
        </Time>
        <DateBox>
          <div>
            <span>
              {dayOfWeek}, {date}
            </span>
          </div>
          <div>
            <span>
              {month} {year}
            </span>
          </div>
        </DateBox>
      </TimeView>
    </Wrapper>
  );
}

export default DateView;

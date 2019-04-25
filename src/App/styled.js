import styled from '@emotion/styled';
import blue from '@material-ui/core/colors/blue';

export const primaryColor = blue['200'];
export const accentColor = blue['400'];


export const AppStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .app {
    padding: 10px;
    /* border: 1px solid #ccc; */
    background-color: ${primaryColor};
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.3);
    width: 60%;

    .title {
      background-color: ${accentColor};
      padding: 10px;
      text-align: center;
    }

    .add-todo {
      padding: 5px;
      display: flex;

      .add-btn { margin-left: 5px; }
    }
  }
`;

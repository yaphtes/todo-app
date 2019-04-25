import React, { Component } from 'react';
import { AppStyled } from './styled';
import { css, Global } from '@emotion/core';
import {
  List,
  ListItem,
  Checkbox,
  Input,
  Button,
} from '@material-ui/core';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          value: 'Изучить React',
          isCompleted: false,
        },
        {
          id: 2,
          value: 'Изучить JavaScript',
          isCompleted: true,
        },
        {
          id: 3,
          value: 'Написать приложение',
          isCompleted: false,
        }
      ],
    };
  }

  render() {
    const { todos } = this.state;
  
    return (
      <AppStyled>
        <Global
          styles={css`body {
            margin: 0;
            padding: 0;
          }`}
        />
        <div className="app">
          <div className="title">
            TODO list
          </div>
          <List>
            {todos.map(({ id, value, isCompleted }) => {
              return (
                <ListItem key={id}>
                  <Checkbox checked={isCompleted} />
                  {value}
                </ListItem>
              );
            })}
          </List>
          <div className="add-todo">
            <Input fullWidth={true} />
            <Button className="add-btn">Добавить</Button>
          </div>
        </div>
      </AppStyled>
    );
  }
}

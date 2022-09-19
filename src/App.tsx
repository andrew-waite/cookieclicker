import './App.css';
import * as React from 'react';
import { GameStateStorage } from './GameStateStorage';
import { container } from 'tsyringe';
import AppInterface from './AppInterface';

export default class App extends React.Component<AppInterface, {}> { 
  private onCookieClick() {
    let gameState = container.resolve(GameStateStorage);
    gameState.addCookies(1);
  }

  public render() {
    return (
      <div className="App">
        <h1>Cookies {this.props.cookies}</h1>
        <img onClick={this.onCookieClick} src={require('./assets/download.png')} alt=''/>
    </div>
    );
  }
}
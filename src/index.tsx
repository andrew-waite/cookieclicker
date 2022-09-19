import "reflect-metadata";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { container } from 'tsyringe';
import { GameStateStorage } from "./GameStateStorage";

export default class Index {
  constructor() {
    this.startApp();
  }

  private startApp(): void {
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );

    setInterval(this.loop, 1000, root);
  }

  private loop(root: ReactDOM.Root): void { 
    let gameMetadata = container.resolve(GameStateStorage);
    root.render(
      <React.StrictMode>
        <App cookies={gameMetadata.getCookies()}/>
      </React.StrictMode>
    );
    console.log(gameMetadata.getCookies());
  }
}

new Index();
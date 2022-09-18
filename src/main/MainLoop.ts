import {GameStateStorage} from '../GameStateStorage';

export class MainLoop { 
    private gameMetadata: GameStateStorage = new GameStateStorage();

    constructor () {
        this.initialize();
    }

    private initialize(): void {
        setInterval(this.loop, 1000);
    }

    private loop(): void { 
        this.gameMetadata.addCookies(1);
        console.log('1');
    }
}
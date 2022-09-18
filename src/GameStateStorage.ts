export class GameStateStorage { 
    private cookies: number = 0;

    private getCookies(): number { 
        return this.cookies;
    }

    public addCookies(add: number) {
        this.cookies += add;
    }
}
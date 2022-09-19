import {singleton} from "tsyringe"

@singleton()
export class GameStateStorage { 
    private cookies: number = 0;
    private cookesPS: number = 0;

    public getCookies(): number { 
        return this.cookies;
    }

    public addCookies(add: number): void {
        this.cookies += add;
    }

    public getCookiesPerSecond(): number {
        return this.cookesPS;
    }

    public addCookiesPerSecond(add: number): void {
        this.cookesPS += add;
    }
}
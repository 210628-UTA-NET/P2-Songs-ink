export interface Profile{
    email: string | undefined, // so technically an email will always be used but auth may not have one
    playerName: string | undefined,
    playerScore: number,
    currentScore: number,
    gamesPlayed: number,
    id: number,
    customWords: string[]
}
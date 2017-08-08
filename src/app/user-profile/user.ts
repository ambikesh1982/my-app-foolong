export class AppUser {
    constructor(
        private uid: string,
        private name: string,
        private email: string,
        private photoURL: string,
        private isAnonymous: boolean,
        private providerId: string
    ) { }
}
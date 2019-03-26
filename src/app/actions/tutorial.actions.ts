import { Tutorial } from './../models/tutorial.model'

export class AddTutorial {
    static readonly type = '[TUTORIAL] Add'

    constructor(public payload: Tutorial) { }
}

export class RemoveTutorial {
    static readonly type = '[TUTORIAL] Remove'

    constructor(public payload: string) { }
}

export class LoadTutorials {
    static readonly type = '[TUTORIAL] Load'

    constructor() { }
}

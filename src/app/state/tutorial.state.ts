// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Tutorial } from './../models/tutorial.model'
import { AddTutorial, RemoveTutorial, LoadTutorials } from './../actions/tutorial.actions'

// Section 2
export class TutorialStateModel {
    tutorials: Tutorial[];
}

// Section 3
@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})
export class TutorialState {

    // Section 4
    @Selector()
    static getTutorials(state: TutorialStateModel) {
        return state.tutorials
    }

    // Section 5
    @Action(AddTutorial)
    add({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
        const state = getState();
        patchState({
            tutorials: [...state.tutorials, payload]
        })
    }

    @Action(RemoveTutorial)
    remove({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {
        patchState({
            tutorials: getState().tutorials.filter(a => a.name != payload)
        })
    }

    @Action(LoadTutorials)
    async load({ getState, patchState }: StateContext<TutorialStateModel>) {
        await new Promise(resolve => setTimeout(() => resolve(), 1000));
        patchState({
            tutorials: [{ name: 'test1', url: 'www.google.com' }, { name: 'test2', url: 'www.youporn.com' }]
        });
    }

}

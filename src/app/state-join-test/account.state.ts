// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Account } from './account';

// Section 2
export class AccountStateModel {
    account: Account;
}

// Section 3
@State<AccountStateModel>({
    name: 'account',
    defaults: {
        account: {
            id: 123,
            name: 'some account',
            brandIds: [1, 4]
        }
    }
})
export class AccountState {

    @Selector()
    static getAccount(state: AccountStateModel) {
        return state.account;
    }

    @Selector()
    static getBrandIds(state: AccountStateModel): number[] {
        return state.account.brandIds;
    }

}

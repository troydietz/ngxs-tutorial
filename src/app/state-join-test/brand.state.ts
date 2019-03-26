// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Brand } from './brand';
import { AccountStateModel } from './account.state';

// Section 2
export class BrandStateModel {
    brands: { [id: number]: Brand };
}

// Section 3
@State<BrandStateModel>({
    name: 'brand',
    defaults: {
        brands: {
            1: {id: 1, name: 'Brand 1'},
            2: {id: 2, name: 'Brand 2'},
            3: {id: 3, name: 'Brand 3'},
            4: {id: 4, name: 'Brand 4'}
        }
    }
})
export class BrandState {

    @Selector()
    static getBrands(state: BrandStateModel): Brand[] {
        return Object.keys(state.brands).map(key => state.brands[key]);
    }

}
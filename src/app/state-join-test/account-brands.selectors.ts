import { Selector } from '@ngxs/store';
import { AccountState } from './account.state';
import { BrandState } from './brand.state';
import { Brand } from './brand';

export class AccountBrandsQuery {

    @Selector([AccountState.getBrandIds, BrandState.getBrandsMap])
    static getBrands(ids: number[], brands): Brand[] {
        return ids.map(id => brands[id]).filter(Boolean);
    }

}
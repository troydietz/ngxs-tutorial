import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountState } from './account.state';
import { BrandState } from './brand.state';
import { Account } from './account';
import { Brand } from './brand';
import { AccountBrandsQuery } from './account-brands.selectors';

@Component({
    selector: 'app-state-join-test',
    templateUrl: './state-join-test.component.html',
    styleUrls: ['./state-join-test.component.css']
})
export class StateJoinTestComponent implements OnInit {

    @Select(AccountState.getAccount)
    account$: Observable<Account>;

    @Select(BrandState.getBrands)
    brand$: Observable<Brand[]>;

    @Select(AccountBrandsQuery.getBrands)
    accountBrands$: Observable<Brand[]>

    public account: Account;
    public brands: Brand[];

    constructor() {
    }

    ngOnInit() {
        this.account$.subscribe((account_: Account) => { this.account = account_; console.log('account: ', account_) });
        this.brand$.subscribe((brands_: Brand[]) => { this.brands = brands_; console.log('brand: ', brands_) });
    }

}

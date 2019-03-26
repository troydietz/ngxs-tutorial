import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { store } from '@angular/core/src/render3';
import { LoadTutorials } from './actions/tutorial.actions';

@Injectable({
  providedIn: 'root'
})
export class TutorialResolverService implements Resolve<void>{
  constructor(private store: Store) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
    console.log('load tutorials');
    return this.store.dispatch(new LoadTutorials());
  }
}

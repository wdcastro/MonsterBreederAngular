
import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ActionService {

  private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });


constructor(private http: Http) { }



}

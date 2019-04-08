import { BehaviorSubject, Observable } from 'rxjs';

export class WorkerJob {

  public data$: Observable<any>;
  private _data$: BehaviorSubject<any>;
  private readonly _url: string;
  private readonly _message: any;
  private readonly _transferable: Array<Transferable | OffscreenCanvas>;

  public constructor(url: string, message: any, transferable?: Array<Transferable | OffscreenCanvas>) {
    this._url = url;
    this._message = message;
    this._transferable = transferable;
    this._data$ = new BehaviorSubject(undefined);
    this.data$ = this._data$.asObservable();
  }

  public set data(data: any) {
    this._data$.next(data);
  }
}

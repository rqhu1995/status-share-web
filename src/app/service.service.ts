import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemData} from './ItemData';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // private static METHOD_DELTE = 'DELETE';
  // private static METHOD_POST = 'POST';
  // private static METHOD_GET = 'GET';
  // private static METHOD_PUT = 'PUT';

  private serviceUrl = 'http://127.0.0.1:5000';


  constructor(private httpClient: HttpClient) {
  }

  // 获取列表数据
  getUserList(): Observable<ItemData[]> {
    return this.httpClient.get<ItemData[]>(this.serviceUrl + '/get_status');
  }

  setUserList(listofData: ItemData): Observable<ItemData[]> {
    return this.httpClient.post<ItemData[]>(this.serviceUrl + '/set_status', listofData);
  }

  /**
   // 获取单个数据
   getOneUser(id: number): Observable<UserInfo> {
    const params = new HttpParams({
      fromString: 'id=' + id
    });
    const findhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      params: params
    };
    return this.httpClient.get<UserInfo>(this.serviceUrl + '/findOneUser', findhttpOptions)
      .pipe(catchError(this.handleError<UserInfo>('getOneUser id' + id)));
  }

   // 添加一个新用户
   addUser(user: UserInfo): Observable<UserInfo> {
    return this.httpClient.post<UserInfo>(this.serviceUrl + '/save', user, httpOptions)
      .pipe(catchError(this.handleError<UserInfo>('addUser')));
  }

   // 删除一个用户
   deleteUser(user: UserInfo | number): Observable<UserInfo> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.serviceUrl}/${id}`;
    const delhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      body: user
    };
    return this.httpClient.delete<UserInfo>(url, delhttpOptions)
      .pipe(catchError(this.handleError<UserInfo>('deleteUser')));
  }

   // 更新数据
   updateUser(user: UserInfo): Observable<any> {
    return this.httpClient.put(this.serviceUrl + '/update', user, httpOptions)
      .pipe(catchError(this.handleError('updateUser id=' + user.id)));
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  /**
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
   **/
}

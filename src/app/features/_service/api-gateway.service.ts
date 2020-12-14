import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {API_URL_TOKEN} from "@app/app.token";

@Injectable()
export class ApiGatewayService {
    constructor(
        private _http: HttpClient,
        @Inject(API_URL_TOKEN) private apiUrl: string,
        // private cookieService: CookieService
    ) {}

    public async getData(): Promise<Response> {
        return await this._http.get<Response>('{{ request uri }}').toPromise();
        //or return await this.http.get('{{ request uri }}').toPromise() as Data;
    }

    get(url: string) {
        // let httpHeaders = new HttpHeaders()
        //     .set('Authorization', this.getToken());


        return this._http.get<Response>(`${this.apiUrl}/${url}`)
            // .delay(100)
            .pipe(
                catchError(this.handleError())
            )
        // .catch(this.handleError);
    }

    post(url: string, data: any) {
        // let httpHeaders = new HttpHeaders({
        //     'Authorization': this.getToken(),
        //     'Content-type': 'application/json'
        // });
        // if(url !== 'admin/login') {
        //     this.setCookies();
        // }
        return this._http.post(`${this.apiUrl}/${url}`, data)
            // .delay(100)
            .pipe(
                catchError(this.handleError())
            )
        // .catch(this.handleError);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // send the error to remote logging infrastructure
            console.error(error);

            if(error instanceof HttpErrorResponse) {
                // Server or connection error happened
                if(!navigator.onLine) {
                    alert('No Internet connection');
                    // No Internet connection
                } else {
                    // Handle Http Error (error.status === 403, 404...)
                }
            } else {
                // Handle Client Error (angular Error, ReferenceError...)
            }

            // better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}

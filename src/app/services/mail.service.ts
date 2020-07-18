import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactForm } from 'src/app/pages/contact/models/contact-form';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  URL: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  sendMail(data: ContactForm): Observable<boolean> {
    return this.http.post(`${this.URL}/sendMail`, data).pipe(
      map((response: any) => <boolean>response)
    );
  }

}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  title = "Atención";
  constructor(private toastr: ToastrService) { }
  success(description: string, title: string = this.title) {
    return this.toastr.success( description, title);
  }
  warning(description: string, title: string = this.title){
    return this.toastr.warning( description, title );
  }
  error(description: string, title: string = this.title){
    return this.toastr.error(description,  title );
  }
  info(description: string, title: string = this.title){
    return this.toastr.info( description, title );
  }
}

import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  constructor(private toastr: ToastrService){}

    copyData(data: string) {
    navigator.clipboard.writeText(data)
    this.toastr.success('Texto copiado para área de transferência', '', {
      positionClass: 'toast-bottom-center',
      tapToDismiss: true,
      progressBar: true,
    })
  }
}

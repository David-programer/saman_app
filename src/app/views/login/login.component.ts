import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  constructor(private router:Router, private _globalService: GlobalService, private alertController: AlertController) { }

  public message:string = '';
  public credenciales = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public login(){
    if(this.credenciales.invalid){this.message = '¡Revisa tus datos!, hay campos incorrectos'; return }

    this.message = '';
    this._globalService.postRequest('loginJson', this.credenciales.value).subscribe({
      next: (res:any)=>{
        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.usuario));
        this.router.navigate(['home']);
      },
      error: async (e)=>{        
        await this.open_alert(e.error.message);
      }
    })
  }

  async open_alert(message:string) {
    const alert = await this.alertController.create({
      header: 'Verificación de indentidad',
      subHeader: 'Revisa que los datos que ingresaste sean correctos', message,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  ngOnInit(){
    let identity:any = localStorage.getItem('identity'), usuario = JSON.parse(identity), token = localStorage.getItem('token');

    if(usuario && token){
      this._globalService.getRequest(`validaToken?id=${usuario.id}&token=${token}`).subscribe({
        next: (res)=>{ 
          if(res) this.router.navigate(['home']);
        }
      })
    }

    // this._globalService.getRequestPublic('https://saman.lafortuna.com.co:4433/api/powerbi/listapuntosventasJSON').subscribe({
    //   next: (res)=>{
    //     this.error = res
    //   },
    //   error: (error)=>{
    //     this.error = error;
    //   }
    // })
  }
}

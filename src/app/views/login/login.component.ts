import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  constructor(private router:Router, private _globalService: GlobalService, private alertController: AlertController) { }

  public error:any;
  public message:string = '';
  public credenciales = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public login(){
    if(this.credenciales.invalid){this.message = '¡Revisa tus datos!, hay campos incorrectos'; return }

    this.message = '';
    this._globalService.postRequest('loginJson', this.credenciales.value)
    .then((res:any)=>{
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('identity', JSON.stringify(res.data.usuario));
      this.router.navigate(['home']);
    }).catch(async (e:any)=>{    
      await this.open_alert(JSON.parse(e.error)?.message);
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
      this._globalService.getRequestToken(`validaToken?id=${usuario.id}&token=${token}`)
      .then(res =>{
        if(Number(res.data) == 1) this.router.navigate(['home']); 
      }).catch(error =>{ this.error = error })
    }
  }
}
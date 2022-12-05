import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss'],
})

export class LayoutComponent implements OnInit, OnDestroy{
  constructor(private _globalService: GlobalService, private router:Router) {}

  public verifyToken:any;
  public menuState:boolean = false;
  public menu = new BehaviorSubject<any[]>([]);
  public identity:any = localStorage.getItem('identity');
  public user = JSON.parse(this.identity);
  
  ngOnInit(){
    let token = localStorage.getItem('token');

    //Consultar permisos del usuario
    this._globalService.getRequest(`menuxUsuario/${this.user.id}`)
    .then((res:any)=>{this.menu.next(res.data)})
    .catch(()=>{this.router.navigate(['login']) })

    //Verificar token cada 30 segundos
    this.verifyToken = setInterval(()=>{
      this._globalService.getRequestToken(`validaToken?id=${this.user.id}&token=${token}`)
      .then((res:any)=>{ if(Number(res.data) != 1) this.router.navigate(['login']) })
      .catch(()=>{this.router.navigate(['login']) })
    }, 30000)
  }

  ngOnDestroy(): void {
    clearInterval(this.verifyToken)
  }
}

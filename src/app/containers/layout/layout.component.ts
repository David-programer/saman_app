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

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public verifyToken:any;
  public menuState:boolean = false;
  public menu = new BehaviorSubject<any[]>([]);
  public identity:any = localStorage.getItem('identity');
  public user = JSON.parse(this.identity);
  
  ngOnInit(){
    let token = localStorage.getItem('token');

    //Consultar permisos del usuario
    this._globalService.getRequest(`menuxUsuario/${this.user.id}`).subscribe({
      next: (res:any)=>{ this.menu.next(res);},
      error: ()=>{ this.router.navigate(['login']) }
    });

    //Verificar token cada 30 segundos
    this.verifyToken = setInterval(()=>{
      this._globalService.getRequest(`validaToken?id=${this.user.id}&token=${token}`).subscribe({
        error: ()=>{ this.router.navigate(['login']) }
      })
    }, 30000)
  }

  ngOnDestroy(): void {
    clearInterval(this.verifyToken)
  }
}

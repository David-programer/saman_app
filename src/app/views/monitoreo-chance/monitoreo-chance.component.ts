import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { MonitoreoChanceUtil, MonitoreoChanceInterface } from 'src/app/utils/monitoreo-chanche.util';

@Component({
  selector: 'app-monitoreo-chance',
  templateUrl: './monitoreo-chance.component.html',
  styleUrls: ['./monitoreo-chance.component.scss'],
})
export class MonitoreoChanceComponent implements OnInit {

  constructor(private router: Router, public _monitoreoChanceUtil: MonitoreoChanceUtil, private _globalService: GlobalService) { }

  public pdvt:any = {};
  public mode:string = '';
  public tipos:any[] = [];
  public estados:any[] = [];
  public copy_data:any[] = [];
  public tipos_test:any[] = [];
  public modal:boolean = false;
  public loading:boolean = true;
  public estados_test:any[] = [];
  public cantidad_x_zona:any = {};
  public modal_state:string = '';
  public hora_consulta:string = '';
  public municipios_x_zona:any = {};
  public error_status:boolean = false;
  public rentabilidad_x_zona:any = {};
  public municipios_selected:any = {};
  public data = new BehaviorSubject<any>([]);
  public totales:any = {pdvt: 0, rentabilidad: 0};
  public estados_order:any = {'V': 4, 'R': 2, 'A': 3, 'N': 1, 'NX': 6, 'NN': 7, 'N5': 8};
  public venta_x_mode:any = {'raspa': 'total_venta_raspa', 'chance': 'total_venta_chance', 'baloto' : 'total_venta_baloto'};
  public colors:any = {'V': 'green-500', 'R': 'red-500', 'A': 'yellow-500', 'N': 'black', 'NX': 'black', 'NN': 'black', 'N5': 'black'};

  public filter_by(value:string, isActive:boolean, type:string):void{
    if(type == 'estado') isActive ? this.estados_test.splice(this.estados_test.indexOf(value), 1) : this.estados_test.push(value);
    else if(type == 'tipo') isActive ? this.tipos_test.splice(this.tipos_test.indexOf(value), 1) : this.tipos_test.push(value) 

    this.data.next(
      this.copy_data.map((element:any)=>{
        return {
          nom_zona: element.nom_zona, 
          data: element.data.filter((item:any) => {
            if(this.municipios_selected[element.nom_zona] == 'Todos') return true && !this.tipos_test.find((tipo:string) => item.nom_tipositioventa == tipo) && !this.estados_test.find((estado:string) => item.estado == estado)
            return item.nom_ciudad == this.municipios_selected[element.nom_zona] && !this.tipos_test.find((tipo:string) => item.nom_tipositioventa == tipo) && !this.estados_test.find((estado:string) => item.estado == estado)
          })
        }
      })
    );
  }

  public hidden_modal(element:any):void{
    element.classList.add('modal_hidden');
    setTimeout(() => { this.modal = false}, 400);
  }

  public goTo(route:any):void{
    this.router.navigate([`/${route.target.value}`]);
  }

  ngOnInit() {
    this.hora_consulta = new Date().toLocaleTimeString();
    let routes:any = {'/monitoreo-linea': 'chance', '/monitoreo-linea-raspa': 'raspa', '/monitoreo-linea-baloto': 'baloto'}
    this.mode = routes[this.router.url];
    let num_identificacion = JSON.parse(`${localStorage.getItem('identity')}`).cedula;


    this._globalService.postRequest('movil/comercial/getmonitoreoenlineaMovil', { num_identificacion, "tabla": this.mode })
    .then((response:any)=>{
      if(response.data.successful){
        console.log(response.data)
        let data = response.data.data;
        let zonas:any = {};
    
        data.forEach((item:any)=>{
          zonas[item.nom_zona] 
          ? (zonas[item.nom_zona].push(item), this.municipios_x_zona[item.nom_zona][item.nom_ciudad] = true)
          : (zonas[item.nom_zona] = [item], this.municipios_x_zona[item.nom_zona] = {}, this.municipios_x_zona[item.nom_zona][item.nom_ciudad] = true);
        });
    
        Object.keys(this.municipios_x_zona).forEach(key =>{this.municipios_selected[key] = 'Todos' ; this.municipios_x_zona[key] = ['Todos',...Object.keys(this.municipios_x_zona[key])]})
    
        const new_data = Object.entries(zonas).map(([key, item]: [string, any])=> {this.cantidad_x_zona[key] = item.length ; return {nom_zona: key, data: item}});
    
        this.copy_data = new_data;
    
        data.map((item:any) =>{ 
          this.estados[item.estado] = {estado: item.estado};
          this.tipos[item.nom_tipositioventa] = {nombre: item.nom_tipositioventa}
          this.totales.pdvt += 1;
        });
    
        this.tipos = Object.values(this.tipos).map((item:any) => {return item});
        this.estados = Object.values(this.estados).map((item:any) => {item.porcentaje = item.cantidad / data.length * 100 ;return item});
        this.data.next(new_data);
      }
      this.loading = false;
    }).catch((error)=>{
      this.loading = false;
      this.error_status = true;
    });
    
    this.data.subscribe((value: MonitoreoChanceInterface[]) => {
      let tipos: any = {};
      let estados: any = {};
      this.rentabilidad_x_zona = {};
      this.totales.rentabilidad = 0;

      let data_flat:any[] = [];
      value.forEach((item:any) => {
        item.data.sort((a: any, b: any) => this.estados_order[a.estado] - this.estados_order[b.estado]);      
        data_flat.push(...item.data);
      });

      data_flat.forEach((element: any) => {
        tipos[element.nom_tipositioventa] ? tipos[element.nom_tipositioventa] += 1: tipos[element.nom_tipositioventa] = 1;
        estados[element.estado] ? estados[element.estado] += 1 : estados[element.estado] = 1;

        this.rentabilidad_x_zona[element.nom_zona] 
        ? this.rentabilidad_x_zona[element.nom_zona] += element.total_venta
        : this.rentabilidad_x_zona[element.nom_zona] = element.total_venta

        this.totales.rentabilidad += element.total_venta;
      });

      this.estados.forEach(item => {
        item.cantidad = estados[item.estado] ?? 0;
        item.porcentaje = item.cantidad / data_flat.length * 100;
      });

      this.tipos.forEach(item =>{ item.cantidad = tipos[item.nombre] ?? 0 });
    });
  }
}
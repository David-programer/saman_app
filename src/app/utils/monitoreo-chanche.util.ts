import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MonitoreoChanceUtil{
    public date = new BehaviorSubject<any>([]);
}

export interface MonitoreoChanceInterface {
    "ide_sitioventa": String,
    "fecha_creacion": Date,
    "nom_sitioventa": String,
    "nom_oficina": String,
    "nom_zona": String,
    "nom_ciudad": String,
    "hora_ingreso": String | null,
    "fecha_primera_tx": String | null,
    "fecha_ultima_tx": String | null,
    "total_venta": Number,
    "total_venta_chance": Number,
    "total_venta_doble": Number,
    "estado": string | any,
    "detalle_no_ventas": [
        {
            "fecha_sql": String
            "fecha_ultima_tx": String | null,
            "can_dias_sin_ventas": String | null
        }
    ],
    "tipo_sitioventa": String,
    "nom_tipositioventa": string | any
  }

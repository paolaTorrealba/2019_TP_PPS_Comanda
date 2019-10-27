export class Pedido {
    id:string;
    nombre_cliente:string;
    correo:string;
    delivery:boolean;
    direccion_entrega:string;
    estado_pedido:string;
    fecha_pedido:string;
    foto_perfil_cliente:string;
    hora_finalizacion:string;    
    monto_total:number;    
    productos:Array<any>;
    tiempo_eleboracion_total:string;
    tiempo_envio:string;

}

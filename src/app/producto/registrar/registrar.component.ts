import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  titulo: string="Registrar nueva producto";
  producto: Producto = new Producto();

  constructor(private productoService: ProductoService,
    private router: Router,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  public crearProducto(): void{
    this.productoService.registrarProducto(this.producto).subscribe(
      //response => this.router.navigate(['/producto']) anterior
      producto => {
        this.router.navigate(['/productos'])
       Swal.fire("Enhorabuena",'Se ha registrado de manera satisfactoria',"success")
      }
    )
  }

}

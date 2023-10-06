import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from '../clases/mensaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private dbPath = '/mensajes';
  mensajesRef: AngularFirestoreCollection<Mensaje> = this.db.collection<Mensaje>(this.dbPath, ref => ref.orderBy('fecha', 'asc'));
  mensajes: Mensaje[] = [];

  constructor(private db: AngularFirestore) {
    this.getAll().subscribe(
      (msj: Mensaje[]) => {
        for (let x = 0; x < msj.length; x++) {
          msj[x].fecha = new Date((msj[x].fecha as any)['seconds'] * 1000);
        }

        this.mensajes = msj;
        console.log(this.mensajes);
      }
    );

  }

  getAll(): Observable<Mensaje[]> {
    return this.mensajesRef.valueChanges();
  }

  create(mensaje: Mensaje): any {
    return this.mensajesRef.add({ ...mensaje });
  }

  update(id: string, data: any): Promise<void> {
    return this.mensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.mensajesRef.doc(id).delete();
  }
}
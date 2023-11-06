import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPaciente = [];
    for (const paciente of value) {
      if (paciente.numero_hc.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
      // if (paciente.numero_hc.toLowerCase().indexOf(arg.toLowerCase()) > -1 || paciente.numero_documento.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        // console.log('sip');
        resultPaciente.push(paciente);
      }
    }
    return resultPaciente;
  }

}

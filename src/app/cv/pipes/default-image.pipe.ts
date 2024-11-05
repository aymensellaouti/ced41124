import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONSTANTES } from '../../config/app-constantes.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    return path.trim() ? path : APP_CONSTANTES.defaultImage;
  }

}

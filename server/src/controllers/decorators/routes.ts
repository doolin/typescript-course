import 'reflect-metadata';
import { router } from '../../routes/loginRoutes';

function routeBinder(method: string) {
  return function (path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  }
}

export const get    = routeBinder('get');
export const put    = routeBinder('put');
export const post   = routeBinder('post');
export const update = routeBinder('update');
export const del    = routeBinder('delete');
export const patch  = routeBinder('patch');
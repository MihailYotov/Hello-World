import {Pipe} from 'angular2/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe {
    transform(input) {
        if (input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    }
}
import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'alphabet-navigation',
    inputs: [
    ],
    outputs: [
        'letterChanged'
    ],
    template: `
    <div class="alphabet-navigation">
        <ul>
            <li *ngFor="#letter of alphabet" >
            <span (click)="selectLetter(letter)">{{letter}}</span>
            </li>
        </ul>
    </div>
    `
})

export class AlphabetNavigation {
    constructor() {
        this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        this.letterChanged = new EventEmitter();
    }

    selectLetter(letter) {
        this.letterChanged.emit(letter)
    }

    ngOnInit() {
        this.chosenletter = this.chosenletter || '';
    }
}
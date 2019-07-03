'use strict';

const members = ['far', 'mor', 'man', 'fru', 'bror', 'syster', 'son', 'dotter'];
const specialKeys = ['UNDO', 'CLEAR', '<=>', '='];
let list = [];

function makeB(id) {
    const button = document.createElement('button');
    button.setAttribute('id', String(id));
    button.setAttribute('class', 'buttons');
    button.innerText = id;
    button.style.height = '20%';
    document.querySelector('.buttonBlock').appendChild(button);
    return button;
}

function makeSB(id) {
    const button = document.createElement('button');
    button.setAttribute('id', String(id));
    button.setAttribute('class', 'buttons');
    button.classList.add('specialBs');
    button.innerText = id;
    button.style.height = '40%';
    button.style.fontSize = '70px';
    document.querySelector('.buttonBlock').appendChild(button);
    return button;
}

document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelector('#steps');
    const ans = document.querySelector('#answer');
    for (const member of members) {
        makeB(member);
    }
    for (const specialKey of specialKeys) {
        makeSB(specialKey);
    }
    document.querySelector('#UNDO').style.fontSize = '30px';
    document.querySelector('#CLEAR').style.fontSize = '30px';

    document.querySelectorAll('.buttons').forEach(click => {
        click.onclick = () => {
            list.push(click.innerText);
            ans.innerText = '';
            if (list.length > 1) {
                steps.textContent += `s ${click.innerText}`;
            } else {
                steps.textContent = click.innerText;
            }
        };
    });

    document.querySelectorAll('.specialBs').forEach(click => {
        click.onclick = () => {
            switch (click.innerText) {
                case 'CLEAR':
                    steps.innerText = '';
                    ans.innerText = '';
                    list = [];
                    break;
                case 'UNDO':
                    if (list.length > 1) {
                        const pop = list.pop();
                        steps.innerText = steps.innerText.slice(
                            0,
                            steps.innerText.length - pop.length - 1,
                        );
                    }
                    break;

                case '<=>': //under construction
                    ans.innerText = '...det kommer snart!';
                    break;
                case '=':
                    switch (steps.innerText) {
                        case 'fars fars far':
                            ans.innerText = 'gammelfarfar';
                            break;
                        case 'fars fars mor':
                            ans.innerText = 'gammelfarmor';
                            break;
                        case 'fars mors far':
                            ans.innerText = 'gammelmorfar';
                            break;
                        case 'fars mors mor':
                            ans.innerText = 'gammelmormor';
                            break;
                        case 'fars fru':
                            ans.innerText = 'kanske min mor?';
                            break;
                        case 'fars far':
                            ans.innerText = 'farfar';
                            break;
                        case 'fars mor':
                            ans.innerText = 'farmor';
                            break;
                        case 'fars bror':
                            ans.innerText = 'farbror';
                            break;
                        case 'fars syster':
                            ans.innerText = 'faster';
                            break;
                        case 'fars son':
                            ans.innerText = 'min syskon eller jag?';
                            break;
                        case 'fars dotter':
                            ans.innerText = 'min syskon eller jag?';
                            break;
                        case 'farrs brors son':
                            ans.innerText = 'kusin';
                            break;
                        case 'fars brors dotter':
                            ans.innerText = 'kusin';
                            break;
                        case 'fars systers son':
                            ans.innerText = 'kusin';
                            break;
                        case 'fars systers dotter':
                            ans.innerText = 'kusin';
                            break;
                        case 'mors fars far':
                            ans.innerText = 'gammelfarfar';
                            break;
                        case 'mors fars mor':
                            ans.innerText = 'gammelfarmor';
                            break;
                        case 'mors mors far':
                            ans.innerText = 'gammelmorfar';
                            break;
                        case 'mors mors mor':
                            ans.innerText = 'gammelmormor';
                            break;
                        case 'mors man':
                            ans.innerText = 'kanske min far?';
                            break;
                        case 'mors far':
                            ans.innerText = 'morfar';
                            break;
                        case 'mors mor':
                            ans.innerText = 'mormor';
                            break;
                        case 'mors bror':
                            ans.innerText = 'morbror';
                            break;
                        case 'mors syster':
                            ans.innerText = 'moster';
                            break;
                        case 'mors son':
                            ans.innerText = 'min syskon eller jag?';
                            break;
                        case 'mors dotter':
                            ans.innerText = 'min syskon eller jag?';
                            break;
                        case 'mors brors son':
                            ans.innerText = 'kusin';
                            break;
                        case 'mors brors dotter':
                            ans.innerText = 'kusin';
                            break;
                        case 'mors systers son':
                            ans.innerText = 'kusin';
                            break;
                        case 'mors systers dotter':
                            ans.innerText = 'kusin';
                            break;
                        case 'mans far':
                            ans.innerText = 'svärfar';
                            break;
                        case 'mans mor':
                            ans.innerText = 'svärmor';
                            break;
                        case 'mans bror':
                            ans.innerText = 'svåger';
                            break;
                        case 'mans syster':
                            ans.innerText = 'svägerska';
                            break;
                        case 'frus far':
                            ans.innerText = 'svärfar';
                            break;
                        case 'frus mor':
                            ans.innerText = 'svärmor';
                            break;
                        case 'frus bror':
                            ans.innerText = 'svåger';
                            break;
                        case 'frus syster':
                            ans.innerText = 'svägerska';
                            break;
                        case 'brors far':
                            ans.innerText = 'kanske min far?';
                            break;
                        case 'brors mor':
                            ans.innerText = 'kanske min mor?';
                            break;
                        case 'brors fru':
                            ans.innerText = 'svägerska';
                            break;
                        case 'brors son':
                            ans.innerText = 'brorson';
                            break;
                        case 'brors dotter':
                            ans.innerText = 'brosdotter';
                            break;
                        case 'systers man':
                            ans.innerText = 'svåger';
                        case 'systers son':
                            ans.innerText = 'systerson';
                            break;
                        case 'systers dotter':
                            ans.innerText = 'systerdotter';
                            break;
                        case 'sons fru':
                            ans.innerText = 'svärdotter';
                            break;
                        case 'sons son':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'sons dotter':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'sons bror':
                            ans.innerText = 'son';
                            break;
                        case 'sons syster':
                            ans.innerText = 'dotter';
                            break;
                        case 'dotters man':
                            ans.innerText = 'svärson';
                            break;
                        case 'dotters son':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'dotters dotter':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'dotters bror':
                            ans.innerText = 'son';
                            break;
                        case 'dotters syster':
                            ans.innerText = 'dotter';
                            break;
                        default:
                            ans.innerText = 'Jag vet inte!';
                    }
                    break;
            }
        };
    });
});

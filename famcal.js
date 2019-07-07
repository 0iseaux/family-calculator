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
            if (steps.innerText.length < 115) {
                if (list.length > 1) {
                    steps.textContent += `s ${click.innerText}`;
                } else {
                    steps.textContent = `min ${click.innerText}`;
                }
            }
        };
    });

    document.querySelectorAll('.specialBs').forEach(click => {
        click.onclick = () => {
            switch (click.innerText) {
                case 'CLEAR':
                    steps.innerText = '';
                    ans.innerText = 'Ställ din fråga.';
                    list = [];
                    break;
                case 'UNDO':
                    if (list.length > 1) {
                        const pop = list.pop();
                        steps.innerText = steps.innerText.slice(
                            0,
                            steps.innerText.length - pop.length - 2,
                        );
                    }
                    break;
                case '=':
                    switch (steps.innerText) {
                        case 'HEJ! HUR KALLAR JAG DIG?':
                            ans.innerText = 'Ställ din fråga.';
                            break;
                        case '':
                            ans.innerText = 'Ställ din fråga.';
                            break;
                        case 'min fars fars far':
                            ans.innerText = 'gammelfarfar';
                            break;
                        case 'min fars fars mor':
                            ans.innerText = 'gammelfarmor';
                            break;
                        case 'min fars mors far':
                            ans.innerText = 'gammelmorfar';
                            break;
                        case 'min fars mors mor':
                            ans.innerText = 'gammelmormor';
                            break;
                        case 'min fars fru':
                            ans.innerText = 'kanske min mor?';
                            break;
                        case 'min fars far':
                            ans.innerText = 'farfar';
                            break;
                        case 'min fars mor':
                            ans.innerText = 'farmor';
                            break;
                        case 'min fars bror':
                            ans.innerText = 'farbror';
                            break;
                        case 'min fars syster':
                            ans.innerText = 'faster';
                            break;
                        case 'min fars son':
                            ans.innerText = 'min syskon eller jag?';
                            break;
                        case 'min fars dotter':
                            ans.innerText = 'min syskon eller jag?';
                            break;
                        case 'min fars brors son':
                            ans.innerText = 'kusin';
                            break;
                        case 'min fars brors dotter':
                            ans.innerText = 'kusin';
                            break;
                        case 'min fars systers son':
                            ans.innerText = 'kusin';
                            break;
                        case 'min fars systers dotter':
                            ans.innerText = 'kusin';
                            break;
                        case 'min mors fars far':
                            ans.innerText = 'gammelfarfar';
                            break;
                        case 'min mors fars mor':
                            ans.innerText = 'gammelfarmor';
                            break;
                        case 'min mors mors far':
                            ans.innerText = 'gammelmorfar';
                            break;
                        case 'min mors mors mor':
                            ans.innerText = 'gammelmormor';
                            break;
                        case 'min mors man':
                            ans.innerText = 'kanske min far?';
                            break;
                        case 'min mors far':
                            ans.innerText = 'morfar';
                            break;
                        case 'min mors mor':
                            ans.innerText = 'mormor';
                            break;
                        case 'min mors bror':
                            ans.innerText = 'morbror';
                            break;
                        case 'min mors syster':
                            ans.innerText = 'moster';
                            break;
                        case 'min mors son':
                            ans.innerText = 'min syskon eller jag?';
                            break;
                        case 'min mors dotter':
                            ans.innerText = 'min syskon eller jag?';
                            break;
                        case 'min mors brors son':
                            ans.innerText = 'kusin';
                            break;
                        case 'min mors brors dotter':
                            ans.innerText = 'kusin';
                            break;
                        case 'min mors systers son':
                            ans.innerText = 'kusin';
                            break;
                        case 'min mors systers dotter':
                            ans.innerText = 'kusin';
                            break;
                        case 'min mans far':
                            ans.innerText = 'svärfar';
                            break;
                        case 'min mans mor':
                            ans.innerText = 'svärmor';
                            break;
                        case 'min mans bror':
                            ans.innerText = 'svåger';
                            break;
                        case 'min mans syster':
                            ans.innerText = 'svägerska';
                            break;
                        case 'min mans fru':
                            ans.innerText = 'jag?';
                            break;
                        case 'min mans son':
                            ans.innerText = 'min son?';
                            break;
                        case 'min mans dotter':
                            ans.innerText = 'min dotter?';
                            break;
                        case 'min frus far':
                            ans.innerText = 'svärfar';
                            break;
                        case 'min frus mor':
                            ans.innerText = 'svärmor';
                            break;
                        case 'min frus bror':
                            ans.innerText = 'svåger';
                            break;
                        case 'min frus syster':
                            ans.innerText = 'svägerska';
                            break;
                        case 'min frus man':
                            ans.innerText = 'jag?';
                            break;
                        case 'min frus son':
                            ans.innerText = 'min son?';
                            break;
                        case 'min frus dotter':
                            ans.innerText = 'min dotter?';
                            break;
                        case 'min brors far':
                            ans.innerText = 'kanske min far?';
                            break;
                        case 'min brors mor':
                            ans.innerText = 'kanske min mor?';
                            break;
                        case 'min brors fru':
                            ans.innerText = 'svägerska';
                            break;
                        case 'min brors son':
                            ans.innerText = 'brorson';
                            break;
                        case 'min brors dotter':
                            ans.innerText = 'brosdotter';
                            break;
                        case 'min brors bror':
                            ans.innerText = 'min bror eller jag?';
                            break;
                        case 'min brors syster':
                            ans.innerText = 'min syster eller jag?';
                            break;
                        case 'min systers far':
                            ans.innerText = 'kanske min far?';
                            break;
                        case 'min systers mor':
                            ans.innerText = 'kanske min mor?';
                            break;
                        case 'min systers man':
                            ans.innerText = 'svåger';
                            break;
                        case 'min systers son':
                            ans.innerText = 'systerson';
                            break;
                        case 'min systers dotter':
                            ans.innerText = 'systerdotter';
                            break;
                        case 'min systers bror':
                            ans.innerText = 'min bror eller jag?';
                            break;
                        case 'min systers syster':
                            ans.innerText = 'min syster eller jag?';
                            break;
                        case 'min sons fru':
                            ans.innerText = 'svärdotter';
                            break;
                        case 'min sons son':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'min sons dotter':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'min sons bror':
                            ans.innerText = 'son';
                            break;
                        case 'min sons syster':
                            ans.innerText = 'dotter';
                            break;
                        case 'min dotters man':
                            ans.innerText = 'svärson';
                            break;
                        case 'min dotters son':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'min dotters dotter':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'min dotters bror':
                            ans.innerText = 'son';
                            break;
                        case 'min dotters syster':
                            ans.innerText = 'dotter';
                            break;
                        default:
                            ans.innerText = 'Jag vet inte!';
                    }
                    break;
                case '<=>':
                    switch (ans.innerText) {
                        case 'SLÅ UPP!':
                            ans.innerText = 'ställ din fråga först.';
                            break;
                        case 'Ställ din fråga':
                            ans.innerText = 'fråga med = först.';
                            break;
                        case '':
                            ans.innerText = 'fråga med = först.';
                            break;
                        case 'farfar':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'farmor':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'morfar':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'mormor':
                            ans.innerText = 'barnbarn';
                            break;
                        case 'farbror':
                            ans.innerText = 'brorson eller brorsdotter';
                            break;
                        case 'faster':
                            ans.innerText = 'brorson eller brorsdotter';
                            break;
                        case 'morbror':
                            ans.innerText = 'systerson eller systerdotter';
                            break;
                        case 'moster':
                            ans.innerText = 'systerson eller systerdotter';
                            break;
                        case 'kusin':
                            ans.innerText = 'kusin';
                            break;
                        case 'svärfar':
                            ans.innerText = 'svärson eller svärdotter?';
                            break;
                        case 'svärmor':
                            ans.innerText = 'svärson eller svärdotter?';
                            break;
                        case 'svåger':
                            ans.innerText = 'svåger eller svägerska?';
                            break;
                        case 'svägerska':
                            ans.innerText = 'svåger eller svägerska?';
                            break;
                        case 'son':
                            ans.innerText = 'far eller mor?';
                            break;
                        case 'dotter':
                            ans.innerText = 'far eller mor?';
                            break;
                        case 'barnbarn':
                            ans.innerText = 'farfar / morfar / farmor / mormor?';
                            break;
                        case 'Jag vet inte!':
                            ans.innerText = 'Jag vet inte!!!';
                            break;
                        default:
                            ans.innerText = '...jag undrar...'; ////
                    }
            }
        };
    });
});

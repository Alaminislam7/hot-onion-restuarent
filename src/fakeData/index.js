import dinners from './dinner';
import breakFasts from './breakFast';
import lunches from './lunch';

const fakeData = [...dinners, ...breakFasts, ...lunches];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;
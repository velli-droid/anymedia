const phrases = [
    'ANY MEDIA',
    'VIDEOS',
    'AUDIOS',
    'DESIGN',
    'WEBSITES',
];

async function init (phrases) {
    let iteration = 0;
    let text;
    const node = document.querySelector('.text');

    //await sleep(1800);
    node.innerText = "";
   // await node.type(' ');

    while (iteration <100000) {
        for (let index in phrases)
        {
            if (phrases.hasOwnProperty(index)) {
                text = phrases[index];
                await node.type(text);
                await sleep(1800);
                await node.delete(text);
            }
        }
        iteration++;
    }
}


// Source code 🚩

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
        return 80;
    }

    async type (text) {
        for (let character of text) {
            this.innerText += character;
            await sleep(this.typeInterval)
        }
    }

    async delete (text) {
        for (let character of text) {
            this.innerText = this.innerText.slice(0, this.innerText.length -1);
            await sleep(this.typeInterval)
        }
    }
}

window.customElements.define('type-async', TypeAsync, { extends: 'span' });


let result = init(phrases);
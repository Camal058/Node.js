const { Transform } = require('stream');

const array = [
    { key: null, name: 'Camal' },
    { key: 1, name: 'Kerim' },
    { key: null, name: 'Miri' },
    { key: 2, name: 'Tural' }
];

const filterFunc = new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
        if (chunk.key !== null) {
            this.push(chunk);
        }
        callback();
    }
});

array.forEach((element) => {
    filterFunc.write(element);
});

filterFunc.end();

filterFunc.on('data', (chunk) => {
    console.log(chunk);
});

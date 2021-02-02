const hexy = require("hexy");

const stringLength = 20;
const stringWitdh = 60;

function numberGenerator() {
    function createNumbers() {
        let numbers = "";
        for (let i = 0; i < stringLength; i++) {
            numbers += (Math.random() * 10000).toString();
        }

        return numbers;
    }

    console.log();

    setInterval(() => {
        console.log(hexy.hexy(createNumbers(), { width: stringWitdh }));
    }, 100);
}
numberGenerator();

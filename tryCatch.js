function tentarConverter(a) {
    if (a != NaN) {
        let result = Number.parseInt(a);
        console.log(result);
    } else {
        throw new Error("Dado não possível de conversão");
    }
}

function comandos() {
    try {
        tentarConverter(10);
    } catch(error) {
        console.log("Desculpa, tente mais tarde");
    }
}
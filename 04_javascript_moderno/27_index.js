//Promisse
function testes() {
    return new Promise((resolve, reject) => {
        const error = true;
        if (error) {
            reject('Deu erro');
        } else {
            resolve('Deu certo');
        }
    });
}

testes().then((res) => {
    alert(res);
}) .catch((err) => {
    alert(err);
});

//função assincrona
async function funcaoAssincrona() {
    const response = await fetch('https://alunos.b7web.com.br/api/ping');
    const json = await response.json();
    console.log(json);
}

funcaoAssincrona();
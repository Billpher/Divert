document.addEventListener('DOMContentLoaded', function() {
    const showSection = document.querySelector('.show');
    const inicioShow = showSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = this.window.scrollY;

        console.log(posicaoAtual);

        if(posicaoAtual == 0) {
            exibeElementosHeader();
        }else if(posicaoAtual < inicioShow) {
            ocultaElementosHeader();
        }
    })
})

function ocultaElementosHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}
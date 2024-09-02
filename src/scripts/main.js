document.addEventListener('DOMContentLoaded', function() {
    const showSection = document.querySelector('.show');
    const inicioShow = showSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = this.window.scrollY;

        if(posicaoAtual == 0) {
            exibeElementosHeader();
        }else if(posicaoAtual < inicioShow) {
            ocultaElementosHeader();
        }
    })

    window.addEventListener('resize', () => {
        const larguraJanela = window.innerWidth;
        const footerHeader = document.querySelector('.footerheader');

        if(larguraJanela < 500) {
            footerHeader.classList.add('footerheader--is-not-hidden')
        }else{
            footerHeader.classList.remove('footerheader--is-not-hidden')
        }
    });

})

function ocultaElementosHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-not-hidden');
}

function exibeElementosHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-not-hidden');
}
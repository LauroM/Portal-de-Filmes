
var mockDestaques = [
    {
        cartaz: 'https://upload.wikimedia.org/wikipedia/pt/f/ff/1917_poster.jpg'
    },
    {
        cartaz: 'https://img.elo7.com.br/product/zoom/2C04FB9/big-poster-filme-aves-de-rapina-lo008-tamanho-90x60-cm-geek.jpg'
    },
    {
        cartaz: 'https://img.elo7.com.br/product/original/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg'
    },
    {
        cartaz: 'https://www.designerd.com.br/wp-content/uploads/2015/08/releituras-cartazes-filmes-famosos-Marko-Manev-7.jpg'
    },
    {
        cartaz: 'https://imagens.canaltech.com.br/252665.492817-Ted-Bundy-A-Irresistivel-Face-do-Mal.jpg'
    },
    {
        cartaz: 'https://img.elo7.com.br/product/zoom/26BBFD5/big-poster-filme-marvel-fenix-negra-lo004-tamanho-90x60-cm-geek.jpg'
    },
    {
        cartaz: 'https://pm1.narvii.com/6412/8b6b6ae81b05a817ac275d45fa09e18f10bf5c78_hq.jpg'
    },
    {
        cartaz: 'https://img.elo7.com.br/product/zoom/2677A6D/big-poster-filme-homem-aranha-de-volta-ao-lar-lo10-90x60-cm-marvel.jpg'
    },
    {
        cartaz: 'https://http2.mlstatic.com/poster-peq-imp-pap-couche-a3-do-filme-gladiador-ver2-D_NQ_NP_13756-MLB235315104_1519-F.jpg'
    }

];

var countDestaques = 0;


function carregarDestaques(){
    var divPai = document.getElementById('demo');
    
    if(countDestaques < 2){
        mockDestaques.forEach(el => {
            var divNova = document.createElement('div');
            divNova.innerHTML = `<div class="card" style="width: 12rem; margin: 5px;"> <img class="card-img-top" src="${el.cartaz}" alt="Imagem de capa do card"> </div>`;
            divPai.append(divNova);
        });
    }else{
        alert('Não encontrados mais destaques');
        document.getElementById('btn-destaques').style.visibility = 'hidden';
    }
    console.log('condador de clicks => ', countDestaques++);
}
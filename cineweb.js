
var mockDestaques = [
    [{
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
    }],
    [{
        cartaz: 'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131110-uau-posters-filmes-bumblebee.jpg'
    },
    {
        cartaz: 'https://br.web.img2.acsta.net/r_1280_720/pictures/17/04/18/19/09/596203.jpg'
    },
    {
        cartaz: 'https://br.web.img3.acsta.net/pictures/19/04/18/22/00/4180106.jpg'
    },
    {
        cartaz: 'https://conteudo.imguol.com.br/c/entretenimento/fd/2019/08/24/o-novo-poster-de-star-wars-a-ascensao-skywalker-1566668329684_v2_1296x1920.jpg'
    },
    {
        cartaz: 'https://www.criatives.com.br/wp-content/uploads/2012/04/Horror-Movie-Posters-02.jpg'
    },
    {
        cartaz: 'https://imgs.netcine.info/wp-content/uploads/2018/02/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    },
    {
        cartaz: 'https://www.mansaowayne.com.br/wp-content/uploads/2017/10/posterliga25.jpg'
    }],
];

var countDestaques = 0;

function carregarDestaques(){
    var divPai = document.getElementById('demo');
    
    if(countDestaques < 2){
        mockDestaques[countDestaques].forEach(el => {
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
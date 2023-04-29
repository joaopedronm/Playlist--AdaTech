let musicas = [
    {titulo: "You gotta pass by me - CodingTank", artista: 'Carlos Bido', src: './musicas/Addict (Instrumental) - NEFFEX.mp3',
    img: './imagens/guitar.jpg'},
    {titulo: 'HTML and CSS rules', artista: 'Rafael Pizão', src: './musicas/Moon Rock - Nathan Moore.mp3',
    img: './imagens/guitar-2.jpg'},
    {titulo: 'The JavaScript show', artista: 'Gabriel Guimarães', src: './musicas/Never You Mind - Dan Lebowitz.mp3',
    img: './imagens/drums.jpg'},
    {titulo: "It's the turn of Objects", artista: 'Carlos Henrique', src: './musicas/Valley of Spies - The Whole Other.mp3',
    img: './imagens/drums-2.jpg'},
    {titulo: "The Banana's Show", artista: 'Dannyel Kayk', src: './musicas/Sharp - Jeremy Korpas.mp3',
    img: './imagens/banana.png'},
    {titulo: "Welcome to the React", artista: 'Pablo Ruan', src: './musicas/Outta Time - RKVC.mp3',
    img: './imagens/pablo.jpg'},
    {titulo: "The end", artista: 'Raniel Mendonça, Roosevelt & Henrique Suel', src: './musicas/Freedom_ - Dan Lebowitz.mp3',
    img: './imagens/the-end.jpg'}

]

let indexMusica = 0

console.log(musicas)

let musica = document.querySelector('audio')

let duracaoMusica = document.querySelector('.fimm')
duracaoMusica.textContent = segundosEmMinutos(Math.floor(musica.duration))

let imagem = document.querySelector('img')
let nomeDaMusica = document.querySelector('.descricao h2')
let nomeDoArtista = document.querySelector('.descricao i')

function tocarMusica() {
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
}

function pausarMusica () {
    musica.pause()
    document.querySelector('.botao-play').style.display = 'block'
    document.querySelector('.botao-pause').style.display = 'none'
}

function atualizarBarra() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'

    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosEmMinutos(Math.floor(musica.currentTime))
}

function segundosEmMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60

    if(campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos + ':' + campoSegundos
}

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeDaMusica.textContent = musicas[index].titulo
        nomeDoArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        duracaoMusica.textContent = segundosEmMinutos(Math.floor(musica.duration))
    })
}

document.querySelector('.botao-play').addEventListener('click', tocarMusica)
document.querySelector('.botao-pause').addEventListener('click', pausarMusica)
musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--
    if(indexMusica < 0) {
        alert('Não há músicas anteriores')
        indexMusica++
    }
    renderizarMusica(indexMusica)
    tocarMusica()
})

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++
    if(indexMusica >= musicas.length) {
        alert('Fim da Playlist')
        indexMusica--
    }
    renderizarMusica(indexMusica)
    tocarMusica()
})
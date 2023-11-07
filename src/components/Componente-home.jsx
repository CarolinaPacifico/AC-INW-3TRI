import '../css/Home.css'
import livrinho from '../img/livrinho.jpg'
 
function ComponenteHome() {
    return (
        <>
        <div className='div-home'>
            <img src={livrinho} alt=""  height={500} width={350}/>

            <div className='div-texto'>

        <h1>Sobre Nós</h1>

        <p>
        Bem-vindo à nossa livraria online, um mundo onde as palavras ganham vida e a 
        imaginação conhece infinitos horizontes. Somos apaixonados por livros e acreditamos 
        que a literatura é uma ponte para a sabedoria, a criatividade e o entretenimento.
        </p>

        <p>
        Nossa missão é proporcionar a você uma experiência única de descoberta literária. 
        Com um vasto catálogo que abrange desde os clássicos atemporais até as últimas novidades, 
        estamos comprometidos em satisfazer todos os gostos e interesses. Através de nossa 
        plataforma, você pode explorar uma gama diversificada de gêneros, autores e títulos, 
        encontrando o livro perfeito para cada momento da sua vida.
        </p>

        <p>
        Valorizamos a comodidade e a acessibilidade, tornando a aquisição de livros uma 
        experiência simples e prazerosa. Além disso, nossa equipe de entusiastas literários 
        está sempre pronta para oferecer recomendações personalizadas e auxílio na busca por 
        obras especiais.
        </p>

        <p>
        Na nossa livraria online, a paixão pela leitura se traduz em cada página que viramos 
        e em cada história que compartilhamos. Queremos inspirar sua jornada literária e 
        fortalecer a conexão entre leitores e suas histórias favoritas.
        </p>

        </div>
        </div>
        </>
  )
}

export default ComponenteHome;
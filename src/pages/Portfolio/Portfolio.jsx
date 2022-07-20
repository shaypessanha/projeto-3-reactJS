import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from '../../components/Header/Header'
import headerImage from '../../assets/image-header.svg'
import meu_diario from '../../assets/meu-diario.gif'
import to_do_list from '../../assets/to-do-list.gif'
import github_search from '../../assets/github-search.gif'
import portifolio from '../../assets/portifolio.gif'
import axios from 'axios'

import './portfolio.css'

const list = [
  {
    id: 1,
    nome: 'Meu diário {reprograma}',
    descricao: 'Um site com conteúdos de introdução à programação.',
    conteudo: 'React, listas e components',
    imagem: meu_diario,
    link: 'https://meu-diario-shaypessanha.netlify.app'
  },
  {
    id: 2,
    nome: 'TODO list',
    descricao: 'App To-do list em Javascript e HTML',
    conteudo: 'JS, DOM e HTML5',
    imagem: to_do_list,
    link: 'https://to-do-list-shaypessanha.netlify.app/'
  },
  {
    id: 3,
    nome: 'Github Search',
    descricao: 'Um site que permite busca de perfis no Github',
    conteudo: 'JavaScript, HTML5, CSS3',
    imagem: github_search,
    link: 'https://github-search-shaypessanha.netlify.app/'
  },
  {
    id: 4,
    nome: 'Meu Portfolio',
    descricao: 'Um site em react para demonstrar meu portfolio',
    conteudo: 'React: fundamentos, components, rotas, hooks, eventos e consumos de API.',
    imagem: portifolio,
    link: 'https://github-search-shaypessanha.netlify.app/'
  }
]

function Portfolio() {
  const [repos, setRepos] = useState([])
  const baseURL = 'https://api.github.com/users/shaypessanha/repos'

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => setRepos(response.data))
  }, [])

  return (
    <>
      <Header
        image={headerImage}
        description="ilustracao mulher com site"
      >
        Meus Projetos
      </Header>

      <h2 className="titulo">Destaques</h2>
      <div className="cartao-container">
        {
          list.map(projeto => {
            return (
              <div className="cartao-wrapper" key={projeto.id}>
                <a className="cartao" href={projeto.link} target="_blank">
                  <h1>{projeto.nome}</h1>
                  <img src={projeto.imagem} alt={"gif do projeto " + projeto.nome} />
                  <p>{projeto.descricao}</p>
                  <div href={projeto.link} className="enter-repo" target="_blank">
                    <BsArrowReturnRight size={16} color="#111" />
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>
      <h2 className="titulo">Outros Projetos</h2>
      <div className="card-container">
        {
          repos.map(repo => {
            return (
              <a className="repo-card clickable-card-base" key={repo.id} href={repo.html_url} target="_blank">
                <h3>{repo.name}</h3>
                <p>{(repo.description||repo.language||('Fork: '+repo.fork))}</p>
                <div href={repo.html_url} target="_blank" className="enter-repo" >
                  <BsArrowReturnRight size={16} color="#fff" />
                </div>
              </a>
            )
          })
        }
      </div>
    </>
  )
}

export default Portfolio
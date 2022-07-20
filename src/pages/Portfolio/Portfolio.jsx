import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from '../../components/Header/Header'
import image from '../../assets/image-header.svg'
import axios from 'axios'

import './portfolio.css'

const list = [
  {
    id: 1,
    nome: 'Quero ser dev',
    descricao: 'Um site com conteúdos de introdução à programação.',
    conteudo: 'React, listas e components',
    imagem: 'https://media.giphy.com/media/NpKOhpooYL1Rr7Uuav/giphy.gif',
    link: 'https://meu-diario-shaypessanha.netlify.app'
  },
  {
    id: 2,
    nome: 'TODO list',
    descricao: 'App To-do list em Javascript e HTML',
    conteudo: 'JS, DOM e HTML5',
    imagem: 'https://media.giphy.com/media/OUxAsqI6AeAGqMQhFz/giphy.gif',
    link: 'https://to-do-list-shaypessanha.netlify.app/'
  },
  {
    id: 3,
    nome: 'Game of Thrones - Personagens',
    descricao: 'Um site em react para demonstrar e buscar personagens de Game of Thrones',
    conteudo: 'React: fundamentos, components, hooks, eventos e consumos de API.',
    imagem: 'https://media.giphy.com/media/fB9TNMAGEPmq3Z1Iye/giphy.gif',
    link: 'https://rickandmortytiktok.netlify.app/'
  },
  {
    id: 4,
    nome: 'Meu Portfolio',
    descricao: 'Um site em react para demonstrar meu portfolio',
    conteudo: 'React: fundamentos, components, rotas, hooks, eventos e consumos de API.',
    imagem: 'https://media.giphy.com/media/RaT2tOOlt1WPIb7sGA/giphy.gif',
    link: 'https://portfolio-aula-react.netlify.app/'
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
        image={image}
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
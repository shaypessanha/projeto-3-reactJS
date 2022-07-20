
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { FiTrash2, FiPlus } from 'react-icons/fi'

import image from '../../../assets/comentarios-2black.svg'
import './comentarios.css'

const commentsBaseURL = 'https://fd-basic-comments-api.herokuapp.com/comments';

function Comentarios() {
  const getLocalList = () => {
    let items = localStorage.getItem('list')
    if(items) {
      return JSON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
  }
  const [list, setList] = useState(getLocalList)
  const [newItem, setNewItem] = useState('')
  const [newAuthor, setNewAuthor] = useState('')

  function handleCreateNewItem() {
    const item = {
      id: Math.random(),
      title: newItem,
      author: newAuthor,
      date: new Date(Date.now()).toLocaleString('pt-br')
    }

    if (item.title === '' || item.author === '') {
      return
    }

    setList([...list, item])
    setNewItem('')
  }

  function handleRemoveItem(id) {
    const itemsFiltered = list.filter(item => item.id !== id)
    setList(itemsFiltered)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])


  return(
  <>
    <Header 
      image={image} 
      description="ilustracao mulher com coração"
    >
      Dicas, feedbacks e mensagens do coração
    </Header>
    <section className="list">
      <header>
        <div className="input-container">
          <input 
            type="text"
            placeholder="Seu nome"
            onChange={(e) => setNewAuthor(e.target.value)}
            value={newAuthor}
          />
          <input 
            type="text"
            placeholder="Digite aqui seu comentário"
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />
          <div className="add-container">
            <button 
              className="add-task" 
              type="submit" 
              onClick={handleCreateNewItem}
              >
                <FiPlus size={16} color="#fff" />
            </button>
          </div>
        </div>
      </header>
      <main>
        <ul className="list-items">
          {console.log("list")}
          {console.log(list)}
          {
            list.map(item => {
              return(
                <li key={item.id}>
                  <div>
                    <div>
                      <h5>{item.author}</h5>
                      <h6>{item.date}</h6>
                    </div>
                    <p>{item.comment||item.title}</p>
                  </div>
                  <button 
                    className="remove-task" 
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FiTrash2 size={16} />
                  </button>
                </li>
              )
            })
          }
        </ul>
      </main>
    </section>
  </>
  
 )
}

export default Comentarios

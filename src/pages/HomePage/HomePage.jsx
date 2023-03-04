import './HomePage.css'
import { Container, Row, Col } from 'react-bootstrap'
import aiService from '../../services/ai.service'
import { useState, useEffect, useContext } from 'react'
import AiCard from '../../components/AiCard/AiCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import { AiContext } from '../../contexts/ai.context'


const HomePage = () => {

    const [query, setQuery] = useState(null)

    const { ai, setAi } = useContext(AiContext)

    useEffect(() => {
        loadData()
    }, [query])

    const loadData = () => {

        query ?
            aiService
                .filteredAi(query)
                .then(({ data }) => {
                    setAi(data)
                })
                .catch(err => console.log(err))
            :
            setQuery(null)
    }

    const printAi = () => {

        aiService
            .getAllAi()
            .then(response => setAi(response.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        printAi()
    }, [])

    const filterAlphabeticalyAsc = () => {

        aiService
            .getAlphabeticOrder('asc')
            .then(({ data }) => {
                setAi(data)
            })
            .catch(err => console.log(err))
    }

    const filterAlphabeticalyDesc = () => {

        aiService
            .getAlphabeticOrder('desc')
            .then(({ data }) => {
                setAi(data)
            })
            .catch(err => console.log(err))
    }

    const filterVotesAsc = () => {

        aiService
            .getVotesOrder('asc')
            .then(({ data }) => {
                setAi(data)
            })
            .catch(err => console.log(err))
    }

    const filterVotesDesc = () => {

        aiService
            .getVotesOrder('desc')
            .then(({ data }) => {
                setAi(data)
            })
            .catch(err => console.log(err))
    }


    const filterCategory = (elm) => {

        aiService
            .getFindCategory(elm)
            .then(({ data }) => {
                setAi(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Container>
                <div>
                    <SearchBar setQuery={setQuery} />
                </div>
                <div >
                    <button className='margin-buttons' onClick={filterAlphabeticalyAsc}>Sort A-Z</button>
                    <button onClick={filterAlphabeticalyDesc}>Sort Z-A</button>
                </div>

                <div className='mt-3'>
                    <button className='margin-buttons' onClick={() => printAi()}>All</button>
                    <button className='margin-buttons' onClick={() => filterCategory('Fight')}>Fight</button>
                    <button className='margin-buttons' onClick={() => filterCategory('Arcade')}>Arcade</button>
                    <button className='margin-buttons' onClick={() => filterCategory('Rol')}>Rol</button>
                    <button className='margin-buttons' onClick={() => filterCategory('Adventure')}>Adventure</button>
                    <button onClick={() => filterCategory('Simulation')}>Simulation</button>
                </div>

                <Row className='mt-3'>
                    {
                        ai.map((ai, idx) => {
                            return (
                                <Col key={idx} md={{ span: 3 }}>
                                    <AiCard
                                        image={ai.image}
                                        name={ai.name}
                                        category={ai.category}
                                        owner={ai.owner}
                                        _id={ai._id}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default HomePage
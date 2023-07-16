import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useFactRandom } from './hooks/useFacRandom'

export function App () {
  const { fact, refreshFact } = useFactRandom({})
  const { urlCat, threeWords } = useCatImage({ fact })

  const handleRefreshFactRandom = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos </h1>
      {
        fact &&
          <div>
            <button onClick={handleRefreshFactRandom}>Buscar otro Fact</button>
            <p>{fact}</p>
            <span>Primeras 3 palabra: {threeWords}</span>
            <div>
              <img src={urlCat} alt={`image extractor by fact: ${fact}`} />
            </div>
          </div>
      }
    </main>
  )
}

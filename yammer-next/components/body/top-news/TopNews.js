//front-end
import { NewsBanner } from '../news-banner/NewsBanner'
//back-end
function TopNews ({ top_results }) {
  return (
    <div className='w-full grid items-center'>
      {top_results.slice(1, 3).map(result => (
        <NewsBanner key={result.title} result={result} />
      ))}
    </div>
  )
}

export default TopNews

import Post from '../post/Post'
import './posts.css'

function posts({posts}) {
  return (
    <div className='posts'>
        {posts.map((p) => (
          <Post post={p}/>
        ))}
    </div>
  )
}

export default posts
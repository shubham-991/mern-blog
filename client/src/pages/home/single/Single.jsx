import './single.css'
import Sidebar from '../../../components/sidebar/Sidebar'
import Singlepost from '../../../components/singlePost/SinglePost'


function single() {
  return (
    <div className='single'>
        {/* post */}
        
        <Singlepost/>
        <Sidebar />
    </div>
  )
}

export default single
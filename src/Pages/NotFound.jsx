import React from 'react'
import { Link } from 'react-router-dom'
import '../Assest/Css/NotFound.css'
import notFound from '../Assest/Img/404.png'

const NotFound = () => {
  return (
 <div className="not-found">
<div className="images-404">
<img src={notFound} alt="" />
</div>
<div className="aside-404">
  <h6>Oops!!!</h6>
  <p>The page you are looking for could not be found. The link to this address <br/> may be outdated or we may have moved the page since you <br/> last bookmarked it.</p>
  <p>It may also be temporarily unavailable.</p>
  <h5>ERROR CODE: 404</h5>
  <Link to='/'>Go to Home</Link>
</div>


 </div>
  )
}

export default NotFound
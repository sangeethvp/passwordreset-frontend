import { Outlet,Link } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';



const HomePage = () =>{
return(
    
    <div className="mt-5 mx-5 d-flex flex-column align-items-center bg-primary-subtle rounded-3 border-primary-subtle p-3">
        <h1 >Welcome to the Home Page</h1>
      {/* <h1 >
        <Link className="text-decoration-none fs-3" to='/register'>Register</Link>
      </h1>
      <h1 >
        <Link className="text-decoration-none fs-3" to='/login'>Login</Link>
      </h1> */}

      <Breadcrumb>
      <Breadcrumb.Item > <Link className="text-decoration-none fs-5" to='/register'>Register</Link></Breadcrumb.Item>
      <Breadcrumb.Item > <Link className="text-decoration-none fs-5" to='/login'>Login</Link></Breadcrumb.Item>
      </Breadcrumb>
      
      <Outlet/>

    </div>
)
    
}

export default HomePage
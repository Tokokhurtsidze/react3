import {Link, Outlet} from "react-router-dom"
const LinkLayout = () =>{
return (
    <div>
         <Link to={'/'}>Home</Link>
           <Link to={'/main'}>main</Link>
           <Link to={'/about'}>About</Link>

           

           <Outlet/>
    </div>
)
}
export default LinkLayout
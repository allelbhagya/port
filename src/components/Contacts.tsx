import { Link } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contacts(){
    return(
        <div>
            <div className='icons'>
             <Link to="https://github.com/allelbhagya">
            GitHub<GitHubIcon/> 
            </Link>
            </div>


        </div>
    )
}
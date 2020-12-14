import {useRouter} from 'next/router'
import AboutUs from '../aboutus';

let User=()=> {
const router = useRouter();
console.log(router)
let uid = router.query.uid;
    return(
        <div>
            User, Your id is {uid}
            <AboutUs></AboutUs>
        </div>
    )
}

export default User;
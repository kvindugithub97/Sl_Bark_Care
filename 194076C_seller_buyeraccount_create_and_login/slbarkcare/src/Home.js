import './home.css';
import {useHistory} from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    
    const Clickbuyer = () => history.push('/Buyer_acc');
    const Clickseller = () => history.push('/Seller_acc');
    const Clicklogin = () => history.push('/Login');
    return ( 
        <div className = "home">
                <h1>SlBarkCare.com</h1>
                
            <div className = "buttons">
             <div className="create_acc">
		        <button type="buyer" onClick={Clickbuyer}>Create a buyer account</button>
		        <button type="seller" onClick={Clickseller}>Create a seller account</button>
	        </div>
	        <div className="login">
		        <button type="login" onClick={Clicklogin}>Log-in as a Buyer</button>
		        <button type="seller" onClick={Clicklogin}>Log-in as a seller</button>
	        </div>

            </div>
        </div>
     );
}
 
export default Home;
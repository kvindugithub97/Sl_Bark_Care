import './seller_acc.css';
const Seller_acc = () => {

    const sellerSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className = "seller_acc">
            <h1>SlBarkCare.com</h1>
             <div className = "seller_form">
                <div className= "content">
                    <h2>Create a seller account</h2>
                    <form onSubmit>
                        <label>User Name :</label>
                            <input
                             type = "text"
                            required
                            /><br/>
                        <label>Password :</label>
                            <input
                            type = "password"
                            required
                            /><br/>
                    <   label>NIC :</label>
                            <input
                            type = "text"
                            required
                            /><br/>
                        <label>E-mail :</label>
                             <input
                            type = "email"
                            required
                            /><br/>
                        <label>Address :</label>
                            <input
                            type = "text"
                            required
                        /><br/>
                        <label>Profile Picture :</label>
                             <input
                             type = "image"
                                required
                            /><br/>
                    <label>Select your section :</label>
                    <select id="section" name="section">
  						<option value="Breading">Breading</option>
  						<option value="Dog Accessories">Dog Accessories</option>
  						<option value="veterinary">Veterinary Servises</option>
  						<option value="food">Foods</option>
  						<option value="Training">Dog Training</option>
  						<option value="extra">Extra</option>
					</select><br/>
                    <button>Create Account</button>
                    
                </form>

                </div>

            </div>

        </div>
     );
}
 
export default Seller_acc;
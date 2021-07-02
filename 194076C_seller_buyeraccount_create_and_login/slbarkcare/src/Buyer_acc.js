import './buyer_acc.css';

const Buyer_acc = () => {

   const buyerSubmit = (e) => {
      e.preventDefault();
  }
    return (
        <div className = 'buyer_acc'>
            <h1>SlBarkCare.com</h1>

            <div className = 'buyer_form'>
               <h2>Create a buyer account</h2>
                 <form onSubmit = {buyerSubmit}>
                     <label>User Name :</label>
                     <input
                        type = "text"
                        required
                     /> <br/>
                     <label>Tel :</label>
                     <input
                        type = "text"
                        required
                     /><br/>
                     <label>E-mail :</label>
                     <input
                        type = "email"
                        required
                     /><br/>
                     <label>profile picture :</label>
                     <input
                        type ="alt"
                     /><br/>
                 </form>
                 <button>Create Account</button>
            </div>
        </div>
      );
}
 
export default Buyer_acc;
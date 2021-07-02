
import React,{useState} from 'react'


const S_home = () => {
  
    const [item , setItem] = useState("");
    const [desc , setDesc] = useState("");
    const [rates , setRates] = useState("");
    const [Contacts , setContact] = useState("");



    return (  
        <div className = 'container'>
            <h2>Your Items</h2>
            <div className = "add">
                <form>
                    <div className = "add_item">
                        <label for ='item'>Item / Service :</label>
                        <input type = "text"  id = "item" 
                        onChange = {(e) => {
                            setItem (e.target.value);
                        }} /><br/>
                    </div>
                    <div className = "desc">
                        <label for ='desc'>About Item / Description:</label>
                        <input type = "text"  id = "desc"
                        onChange = {(e) => {
                            setDesc (e.target.value);
                        }}/><br/>
                    </div>
                    <div className = "rates">
                        <label for ='rates'>Rates / Item :</label>
                        <input type = "text"  id = "rates"
                        onChange = {(e) => {
                            setRates (e.target.value);
                        }}/><br/>
                    </div>
                    <div className = "contact">
                        <label for ='contacts'>Contacts :</label>
                        <input type = "Tel"  id = "contacts"
                        onChange = {(e) => {
                            setContact (e.target.value);
                        }}/><br/>
                    </div>

                    <button type =" submit"> Add to the list</button>
                </form>
            </div>

        </div>
    );
}
 
export default S_home;
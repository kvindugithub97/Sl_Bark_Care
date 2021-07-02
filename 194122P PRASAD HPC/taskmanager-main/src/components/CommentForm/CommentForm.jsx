import { useFormik } from 'formik';
import axios from 'axios';
import { v4 as uuid4 } from 'uuid';




function TaskForm() {

  const formik = useFormik({
    initialValues: {
      description: '',
      author: 'By chamika',
    },

    onSubmit: (values, {resetForm}) => {

      const taskId = uuid4(); 
      const apiUrl = `https://comment-20636-default-rtdb.firebaseio.com/comment/${taskId}.json`;
      const task = {...values, id: taskId};
   
      axios.put(apiUrl, task).then((response) => {
        if (response.status === 200){
          resetForm({values:''});
        } 
      })},
   });
  return (
    <div className="container col-sm-8 mt-4">
      <h4 className="mb-4">Add comment</h4>
      <form onSubmit={formik.handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="description">Add Comment</label>
          <textarea
            rows="4"
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
        </div>
  
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
   
   </div>
  );
  
}


export default TaskForm;

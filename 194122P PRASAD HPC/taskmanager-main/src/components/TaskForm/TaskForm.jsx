import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { v4 as uuid4 } from 'uuid';
import { Link } from 'react-router-dom';



function TaskForm() {
  const [Message, setMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      author: '',
    },

    onSubmit: (values, {resetForm}) => {

      const taskId = uuid4(); 
      const apiUrl = `https://slbark-default-rtdb.firebaseio.com/tasks/${taskId}.json`;
      const task = {...values, status: 'New', createdDate: new Date(), id: taskId};
   
      axios.put(apiUrl, task).then((response) => {
        if (response.status === 200){
          setMessage('Blog has been added');
          resetForm({values:''});
        } 
      })
      .catch((error) => {
        setMessage('There is some error');
      });
    
    },

    validate: (values) => {
      let errors ={};

      if (!values.title) {
        errors.title  = "Title cannot be blank"
      }

      if (!values.description) {
        errors.description  = 'You must enter a description';
      }

      if (!values.author) {
        errors.author  = 'Author cannot be blank cannot be blank';
      } 

      return errors;
    }
  });
  return (
    <div className="container col-sm-8 mt-4">
      <h4 className="mb-4">Add/Edit Task</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>

          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          { formik.touched.title && formik.errors.title ? (
            <div className="small text-danger">{formik.errors.title}</div>) : null}

        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
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
          { formik.touched.description && formik.errors.description ? (
            <div className="small text-danger">{formik.errors.description}</div>) : null}
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
          />
          { formik.touched.author && formik.errors.author ? (
            <div className="small text-danger">{formik.errors.author}</div>) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {Message ? (<div className="alert alert-primary mt-4">{Message} - Click here to see <Link to="/">all blogs</Link></div>) : null}
   
   </div>
  );
  
}


export default TaskForm;

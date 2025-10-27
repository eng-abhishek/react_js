import React, { useState } from "react";
function Form(){

const [formData,setFormData] = useState(
  {name:'',email:'',phone:'',dob:'',employee_id:'',department:'',designation:'Dev',joining_date:'20-05-2025',username:'',password:'',
  gender:'',address:''
  }
);

const [checkArray,SetcheckArray] = useState([]);

const [selectedImage, setSelectedImage] = useState(null);

const [ImgPreview,setImgPreview] = useState(null);

const InputHandler = (e) => {
console.log(e.target.name);
console.log(e.target.value);
setFormData({...formData,[e.target.name]:e.target.value});
}


const CheckBoxHandler = (e)=>{
 const skill_value = e.target.value;
if(e.target.checked){
  console.log(skill_value);
  SetcheckArray([...checkArray,skill_value]);
}else{
  SetcheckArray(checkArray.filter((e)=> e !== skill_value));
}
}

const FileHandler = (e) => {
  // console.log(e.target.files[0]);
  const file = e.target.files[0];

  setSelectedImage(e.target.files[0]);

  if(file){
   const reader = new FileReader;
   reader.onloadend = () => setImgPreview(reader.result);
   reader.readAsDataURL(file);
  }else{
    setImgPreview(null);
  }
}

const submitHandler = (e) => {
e.preventDefault();

console.log(formData.name);
console.log(formData.email);
console.log(formData.phone);
console.log(formData.dob);

console.log(formData.designation);
console.log(formData.joining_date);
console.log(formData.username);
console.log(formData.password);

console.log(formData.employee_id);
console.log(formData.department);
console.log(checkArray);
console.log(formData.gender);
console.log(formData.address);
console.log(formData.selectedImage);

// console.log(formData.email);
// console.log(formData.phone);
// console.log(formData.dob);
// console.log(formData.employee_id);
// console.log(formData.department);

}

return (<>
    <div className="card shadow-lg p-4 rounded-4">
    <form action="#" onSubmit={submitHandler} method="POST">
        <h5 className="mb-3 text-secondary">Personal Information</h5>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" value={formData.name} className="form-control" placeholder="Enter full name" onChange={InputHandler} required/>
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" name="email" value={formData.email} className="form-control" placeholder="Enter email address" onChange={InputHandler} required />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} className="form-control" placeholder="Enter phone number" onChange={InputHandler} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} className="form-control" onChange={InputHandler} required />
          </div>
        </div>


        <h5 className="mb-3 text-secondary">Employment Details</h5>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Employee ID</label>
            <input type="text" name="employee_id" value={formData.employee_id} onChange={InputHandler} className="form-control" placeholder="e.g., EMP1234" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Department</label>
            <select name="department" className="form-select" value={formData.department} onChange={InputHandler} required>
              <option>Select Department</option>
              <option>HR</option>
              <option>Finance</option>
              <option>IT</option>
              <option>Marketing</option>
              <option>Operations</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <input type="text" name="designation" className="form-control" value={formData.designation} onChange={InputHandler} placeholder="Enter designation" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Joining Date</label>
            <input type="date" name="joining_date" className="form-control" value={formData.joining_date} onChange={InputHandler} required />
          </div>
        </div>



        <h5 className="mb-3 text-secondary">Account Details</h5>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input type="text" name="username" className="form-control" value={formData.username} onChange={InputHandler} placeholder="Choose username" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={InputHandler} placeholder="Enter password" required />
          </div>
        </div>

        <div className="row mb-3">

          <div className="col-md-6">
            <label className="form-label">Gender</label><br/>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" checked={formData.gender === 'Male'} onChange={InputHandler} value="Male" required />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" checked={formData.gender === 'Female'} onChange={InputHandler} value="Female" required />
              <label className="form-check-label">Female</label>
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Skills</label><br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="skills[]" value="HTML" onChange={CheckBoxHandler}/>
              <label className="form-check-label">HTML</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="skills[]" value="CSS" onChange={CheckBoxHandler}/>
              <label className="form-check-label">CSS</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="skills[]" value="JavaScript" onChange={CheckBoxHandler}/>
              <label className="form-check-label">JavaScript</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea name="address" rows="3" className="form-control" onChange={InputHandler} placeholder="Enter full address" required>{formData.address}</textarea>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="file" name="profile_image" className="form-control" onChange={FileHandler} required>{formData.profile_image}</input>
        </div>

        {ImgPreview && (<div>
        <div style={{ marginTop: "20px" }}>
          <img
            src={ImgPreview}
            alt="Preview"
            width="200"
            height="200"
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
        </div>
        </div>)}

        <div className="row mb-3"></div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-5">Register</button>
        </div>
      </form>
      </div>
       </>);
}

export default Form;
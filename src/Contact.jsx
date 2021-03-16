import React, {useState} from "react";


const Contact = () => {

const [data, setData] = useState({
  firstname:"",
  phonenumber:"",
  email:"",
  msg:""
})
  const inputEvent = (event)=>{
      const name = event.target.name;
      const value = event.target.value;

      console.log(name)

      setData((perVal) => {
         return {
           ...perVal,
           [name]:value,

         }

      })

  }

  const fromSubmit =(event)=>{
    event.preventDefault();
    alert(`The name is ${data.firstname}
      Phone number is ${data.phonenumber}
      The text is is ${data.msg}`)

  }

  return (
    <div className="container-lg">
        <h2>Contact Us</h2>
      <div className="row contactBoxes">
          <div className="col-md-8 col-12">
          <form onSubmit={fromSubmit}>
              <div className="mb-3 firstName">
                  <label for="name" className="form-label"> Full Name</label>
                  <input
                  onChange={inputEvent}
                  name="firstname"
                  value={data.firstname}
                  type="text" className="form-control" id="exampleFormControlInput1"
                  placeholder="Full Name"/>
               </div>
                <div className="mb-3 PhoneNumber">
                    <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                    <input
                    onChange={inputEvent}
                    name="phonenumber"
                    value={data.phonenumber}
                    type="number" className="form-control" id=""
                    placeholder="+880"/>
                </div>
                 <div className="mb-3 email">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input
                    onChange={inputEvent}
                    name="email"
                    value={data.email}
                    type="email" className="form-control" id="exampleFormControlInput1"
                    placeholder="name@example.com"/>
                  </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea
                onChange={inputEvent}
                name="msg"
                value={data.msg}
                 className="form-control" id="exampleFormControlTextarea1" rows="3"

                 placeholder="Type message..."
                 />
              </div>
              <input type="submit" className="btn btn-outline-warning" value="Submit"/>
              </form>
          </div>
      </div>
    </div>
  )
}
export default Contact;

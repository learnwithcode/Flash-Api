import React from 'react';
import axios from 'axios';

      // const { mobile, first_name, employee_id, services } = this.state;
      // const data = { mobile, first_name, employee_id, services };
      // const conf = {
      //   method: "post",
      //   body: JSON.stringify(data),
      //   headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded","AUTHORIZATION": "Rkx7@a5FHl-L#6Fb9CzF2L-jNz7epF4mEtC"})
      // };
      // fetch('http://127.0.0.1:8000/extension/flash-api', conf).then(response => console.log(response));
var token = undefined

class App extends React.Component {
  state = {
      mobile: '',
      first_name : '',
      employee_id : '',
      services : '',
      token : '',
    
  }


  onFormSubmit = (event) => {
      event.preventDefault();
      const data = {
        mobile :this.state.mobile,
        first_name : this.state.first_name,
        employee_id : this.state.employee_id,
        services : this.state.services,
      }
      const token = this.state.token
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "AUTHORIZATION": token,
        
        
      }

      axios.post('https://fellafeeds.com/extension/flash-api', data, {headers : headers})
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      });
      
  }
  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
}
  render () {
    return (
      <form onSubmit={(event) => this.onFormSubmit(event)}>

        <div className="form-group">
          <label htmlFor="mobile">Token</label>
          <input type="text" name='token' className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Enter Token"
          value={this.state.token ? token : null}
          onChange={this.onChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input type="text" name='mobile' className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Enter Mobile"
          value={this.state.mobile}
          onChange={this.onChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
          value={this.state.first_name} 
          onChange={this.onChange}
          type="text" name='first_name' className="form-control" id="first_name" placeholder="Enter First Name"/>
        </div>

        <div className="form-group">
          <label htmlFor="employee_id">Employee Id</label>
          <input
          value={this.state.employee_id} 
          onChange={this.onChange}
          type="text" name='employee_id' className="form-control" id="employee_id" placeholder="Enter Employee Id"/>
        </div>

        <div className="form-group">
          <label htmlFor="services">Services</label>
          <input
          value={this.state.services} 
          onChange={this.onChange}
          type="text" name='services' className="form-control" id="services" placeholder="Enter Services"/>
        </div>
      <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    )
  }
}



export default App;

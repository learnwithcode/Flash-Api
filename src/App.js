import React from 'react';
import axios from 'axios';



class App extends React.Component {
  state = {
      mobile: '',
      first_name : '',
      employee_id : '',
      billing_amount : '',
      services : '',
  }

  onClick = () => {
      const data = {
        mobile :this.state.mobile,
        first_name : this.state.first_name,
        employee_id : this.state.employee_id,
        billing_amount : this.billing_amount,
        services : this.state.services
      }
      const token = "Rkx7@a5FHl-L#6Fb9CzF2L-jNz7epF4mEtC"
      const headers = {
        
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept" : "application/json, text/plain, */*",
        "Token": token,
        
        
      }
      axios.post('https://fellafeeds.com/extension/flash-api', data, {headers:headers})
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      });
  }

  render () {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input type="text" name='mobile' className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Enter Mobile"
          value={this.state.mobile}
          onChange={e => this.setState({mobile : e.target.value})}/>
        </div>

        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
          value={this.state.first_name} 
          onChange={e => this.setState({first_name : e.target.value})}
          type="text" name='first_name' className="form-control" id="first_name" placeholder="Enter First Name"/>
        </div>

        <div className="form-group">
          <label htmlFor="employee_id">Employee Id</label>
          <input
          value={this.state.employee_id} 
          onChange={e => this.setState({employee_id : e.target.value})}
          type="text" name='employee_id' className="form-control" id="employee_id" placeholder="Enter Employee Id"/>
        </div>

        <div className="form-group">
          <label htmlFor="billing_amount">Billing Amount</label>
          <input
          value={this.state.billing_amount} 
          onChange={e => this.setState({billing_amount : e.target.value})}
          type="text" name='billing_amount' className="form-control" id="billing_amount" placeholder="Enter Billing Amount"/>
        </div>

        <div className="form-group">
          <label htmlFor="services">Services</label>
          <input
          value={this.state.services} 
          onChange={e => this.setState({services : e.target.value})}
          type="text" name='services' className="form-control" id="services" placeholder="Enter Services"/>
        </div>
      <button type="submit" className="btn btn-primary" onClick={this.onClick}>Submit</button>

      </div>
    )
  }
}



export default App;

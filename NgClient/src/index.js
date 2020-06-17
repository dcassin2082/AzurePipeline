import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export class BitchAss extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [], loading: true };
  }
  componentDidMount() {
    this.populateWeatherData();
  }

  static renderEmployeesTable(employees) {
    return (
      <div className="row">
        <div className="col">
          <table className='table table-striped table-bordered table-hover' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Name</th>
                <th>Employee Code</th>
                <th>Mobile</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee =>
                <tr key={employee.EmployeeId}>
                  <td>{employee.EmployeeId}</td>
                  <td>{employee.FullName}</td>
                  <td>{employee.EmpCode}</td>
                  <td>{employee.Mobile}</td>
                  <td>{employee.Position}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : BitchAss.renderEmployeesTable(this.state.employees);

    return (
      <div>
        <h1 style={{ color: "red" }} >Employees</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
  async populateWeatherData() {
    const response = await fetch('https://localhost:44377/api/employees');
    const data = await response.json();
    this.setState({ employees: data, loading: false });
  }
}
ReactDOM.render(<BitchAss />, document.getElementById('cocksucker'));
  // ReactDOM.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );

  // async function clickMyAss() {
  //   const response = await fetch('https://localhost:44377/weatherforecast');
  //   const data = await response.json();
  //   this.setState({ forecasts: data, loading: false });

  // }
  
  // const myelement = (
  //   <div className="container">
  //     <table className='table table-striped table-bordered table-hover' aria-labelledby="tabelLabel">
  //       <thead>
  //         <tr>
  //           <th>Date</th>
  //           <th>Temp. (C)</th>
  //           <th>Temp. (F)</th>
  //           <th>Summary</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {forecasts.map(forecast =>
  //           <tr key={forecast.date}>
  //             <td>{forecast.date}</td>
  //             <td>{forecast.temperatureC}</td>
  //             <td>{forecast.temperatureF}</td>
  //             <td>{forecast.summary}</td>
  //           </tr>
  //         )}
  //       </tbody>
  //     </table>
  //   </div>
  // );
  // const msg = (
  //   <div className="container">
  //     <h1 style={{ color: "red" }}>Forecasts</h1>
  //   </div>

  // )
  // ReactDOM.render(msg, document.getElementById('shitass'));
  // ReactDOM.render(myelement, document.getElementById('root'));
  // // If you want your app to work offline and load faster, you can change
  // // unregister() to register() below. Note this comes with some pitfalls.
  // // Learn more about service workers: https://bit.ly/CRA-PWA
  // serviceWorker.unregister();



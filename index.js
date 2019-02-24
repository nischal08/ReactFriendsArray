class App extends React.Component {
  friends = [
    { name: 'Sujan', address: 'Chabahil', contact: 9813234434 },
    { name: 'Suraj', address: 'Kalopul', contact: 9841232232 },
    { name: 'Kundan', address: 'Sundarijal', contact: 9860023423 },
    { name: 'Mack', address: 'Mitrapark', contact: 9813621921 }
  ];

  render() {
    return (
      <div class='container col-md-4  mt-5'>
        <div class='card bg-danger '>
          <div class='card-header bg-danger'>
            <h3 class='text-center text-white'>{this.props.message}</h3>
          </div>
          <div class='card-body bg-light'>
            <h4>List of your friends : </h4>
            {this.friends.map(friends => (
              <Person
                name={friends.name}
                add={friends.address}
                con={friends.contact}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const Person = props => (
  <div>
    <span class='mr-1'>Name : {props.name} ,</span>
    <span class='mr-1'>Address : {props.add} ,</span>
    <span class='mr-1'>Contact : {props.con} </span>
  </div>
);

ReactDOM.render(
  <App message='Friends Array' />,
  document.getElementById('restful')
);

class Rest extends React.Component {
  friends = [
    { name: 'Sujan', year: 2054, skill: 'none' },
    { name: 'Suraj', year: 2055, skill: 'guff' },
    { name: 'Kundan', year: 2054, skill: 'yes or no' },
    { name: 'Mack', year: 2053, skill: 'mimic' }
  ];

  render() {
    return (
      <div class='container col-md-4  mt-5'>
        <div class='card bg-danger '>
          <div class='card-header bg-danger'>
            <h3>{this.props.message}</h3>
          </div>
          <div class='card-body bg-light'>
            <h4>List of your friends : </h4>
            {this.friends.map(friends => (
              <Person
                name={friends.name}
                year={friends.year}
                skill={friends.skill}
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
    <span class='mr-1'>Birth Date : {props.year} ,</span>
    <span class='mr-1'>Skill : {props.skill} </span>
  </div>
);

ReactDOM.render(
  <Rest message='Friends Array' />,
  document.getElementById('restful')
);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from "./PersonList";
import PersonEdit from "./PersonEdit";

class App extends Component {
  state = {
    people: [
      { id:'1', firstName: 'Johnny', lastName: 'Carson' },
      { id:'2', firstName: 'Jay', lastName: 'Leno' },
      { id:'3', firstName: 'Conan', lastName: 'O\'Brien' },
      { id:'4', firstName: 'Jimmy', lastName: 'Fallon' }
    ],
    selectedView: 'PersonList',
  }

  onEdit = (person) => {
    this.setState({
      selectedView: 'PersonEdit',
      selectedPerson: person
    })
  }

  onSubmit = (id, fname, lname) => {
    this.state.people.map((person) => {
        if (person.id == id) {
          person.firstName = fname;
          person.lastName = lname;
        }
    });
    this.setState({
      selectedView: 'PersonList'
    })
  }

  get currentView() {
    if (this.state.selectedView === 'PersonEdit') {
      return <PersonEdit person={this.state.selectedPerson} onSubmit={this.onSubmit}/>
    }

    return <PersonList people={this.state.people} onEdit={this.onEdit}/>
  }

  render() {
    return (
      <div className="App">
        {this.currentView}
      </div>
    )
  }
}
/*
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "list",
      person_id: 0,
      persons: []
    };

    this.changeView = this.changeView.bind(this);
    this.updatePersonName = this.updatePersonName.bind(this);
  }

  changeView(option, personId=0) {
    this.setState({
      view: option,
      person_id: personId
    });
  }

  updatePersonName(id, fname, lname) {
    this.state.persons.map((person) => {
        if (person.id == id) {
          person.first_name = fname;
          person.last_name = lname;
        }
    });
    
    this.changeView("list");
  }

  componentDidMount() {
    
    this.setState({
      persons: [{ id: 1, first_name: 'Alan', last_name: 'Turing' }, 
                { id: 2, first_name: 'Alanzo', last_name: 'Church' }, 
                { id: 3, first_name: 'Grace', last_name: 'Hopper' }]
    });
       
  }

  renderView() {
    const { view, person_id } = this.state;

    
    if (view === "list") {
      return <PersonList handleClick={this.changeView} personData={this.state.persons} />;
    } 
    else 
    {
      let curperson;
      this.state.persons.map((person) => {
          if (person.id == person_id) {
            curperson = person;
          }
      });
      return <PersonEdit handleClick={this.updatePersonName} person={curperson} />;
    }
  }

  render() {
    return (
        <div className="App">{this.renderView()}</div>
    );
  }
}*/

export default App;

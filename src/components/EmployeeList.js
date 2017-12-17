import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import _ from 'lodash';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this components will be rendere with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; //{ shift: 'Monday', name: 'Sam', id: '1jkfdh379' }
    // 1) _.map take two arg. Takes the object (state.employees) has many key/value pairs
    // + for each key/val pair, it runs the fat arrow function
    // 2) second arg is a function with 2 args that returns a single object w/ those args
    // + val === name/phone/shift uid=id of the employee record
    // 3) create new obj { ...val, uid } with all values and assigning a key of 'uid' to each
    // 4) the .map takes all those single objects and wraps it in an array.
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

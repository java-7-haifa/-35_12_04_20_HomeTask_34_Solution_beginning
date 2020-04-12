import React from "react";
import { NavLink, Route } from "react-router-dom";
import Loading from "./Loading";
import ContactView from "./ContactView";
import { getToken } from "../utils/StoreProvider";
import { getAllContacts } from "../utils/Http";
import { connect } from "react-redux";
import * as actions from "../redux/actions/actionCreator";

class Contacts extends React.Component {
  state = {
    contacts: [],
    isLoading: false,
  };

  componentDidMount() {
    // let token = getToken();
    // getAllContacts(token)
    // .then(contacts => {
    //   this.setState({contacts:contacts.contacts,isLoading:false});
    // });
  }
  addContact = () => {
    let rnd = new Date().getTime() % 100;
    this.props.add({ name: `John ${rnd}`, lastName: "Doe" });
  };
  removeContact = () => {
    let rndIndex = new Date().getTime() % this.props.contacts.length;
  
    this.props.remove(this.props.contacts[rndIndex].id);
  };

  updateContact = () => {
    let rndIndex = new Date().getTime() % this.props.contacts.length;
    this.props.update({...this.props.contacts[rndIndex],name:'New Name'});
  };
  render() {
    return (
      <>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="row">
              <button onClick={this.addContact} className="btn btn-success">Add</button>
              <button onClick={this.updateContact} className="btn btn-warning">Update</button>
              <button onClick={this.removeContact} className="btn btn-danger">Remove</button>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <div className="list-group">
                  {this.props.contacts.map((c) => {
                    return (
                      <NavLink
                        key={c.id}
                        to={`/contacts/${c.id}`}
                        className="list-group-item list-group-item-action"
                      >
                        {`${c.name} ${c.lastName}`}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
              <div className="col-6">
                <Route path="/contacts/:id" component={ContactView} />
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (contact) => dispatch(actions.addContact(contact)),
    remove: (id) => dispatch(actions.removeContact(id)),
    update: (contact) => dispatch(actions.updateContact(contact)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

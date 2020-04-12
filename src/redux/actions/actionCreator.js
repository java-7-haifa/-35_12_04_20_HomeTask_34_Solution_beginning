import * as types from "./actionType";

export function addContact(contact) {
  return {
    type: types.ADD_CONTACT,
    payload: contact,
  };
}

export function removeContact(id) {
  return {
    type: types.RM_CONTACT,
    payload: id,
  };
}

export function updateContact(contact) {
  return {
    type: types.UPDATE_CONTACT,
    payload: contact,
  };
}

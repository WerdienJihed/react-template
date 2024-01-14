import {
  handleGet,
  handleGetAll,
  handleCreate,
  handleUpdate,
  handleDelete,
} from "./jsonapi.js";

export const exists = async (resource, id) => {
  try {
    await handleGet(resource, id);
    return true;
  } catch (err) {
    const errMessage = `Error searching record in : ${resource}`;
    console.error(errMessage, err);
    if (err.message === "Record not found!") return false;
    let error = new Error();
    error.name = "ServerError";
    error.message = errMessage;
    throw error;
  }
};

export const get = async (resource, id) => {
  try {
    const data = await handleGet(resource, id);
    return data;
  } catch (err) {
    const errMessage = `Error getting record from : ${resource}`;
    console.error(errMessage, err);
    let error = new Error();
    error.name = "ServerError";
    error.message = errMessage;
    throw error;
  }
};

export const getAll = async (resource) => {
  try {
    const data = await handleGetAll(resource);
    return data;
  } catch (err) {
    const errMessage = `Error getting list from : ${resource}`;
    console.error(errMessage, err);
    let error = new Error();
    error.name = "ServerError";
    error.message = errMessage;
    throw error;
  }
};

export const add = async (resource, record) => {
  try {
    const data = await handleCreate(resource, record);
    return data;
  } catch (err) {
    const errMessage = `Error adding record to : ${resource}`;
    console.error(errMessage, err);
    let error = new Error();
    error.name = "ServerError";
    error.message = errMessage;
    throw error;
  }
};

export const update = async (resource, id, record) => {
  try {
    const data = await handleUpdate(resource, id, record);
    return data;
  } catch (err) {
    const errMessage = `Error updating record in: ${resource}`;
    console.error(errMessage, err);
    let error = new Error();
    error.name = "ServerError";
    error.message = errMessage;
    throw error;
  }
};

export const remove = async (resource, id) => {
  try {
    const data = await handleDelete(resource, id);
    return data;
  } catch (err) {
    const errMessage = `Error deleting record from : ${resource}`;
    console.error(errMessage, err);
    let error = new Error();
    error.name = "ServerError";
    error.message = errMessage;
    throw error;
  }
};

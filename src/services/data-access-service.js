import {
  handleGet,
  handleGetAll,
  handleCreate,
  handleUpdate,
  handleDelete,
} from "./jsonapi.js";

export const exists = async (resource, id) => {
  try {
    const record = await handleGet(resource, id);
    if (!record) return false;
    return true;
  } catch (err) {
    console.error(`Error searching record in : ${resource}`, err);
    throw err;
  }
};

export const get = async (resource, id) => {
  try {
    const data = await handleGet(resource, id);
    return data;
  } catch (err) {
    console.error(`Error getting record from : ${resource}`, err);
    throw err;
  }
};

export const getAll = async (resource) => {
  try {
    const data = await handleGetAll(resource);
    return data;
  } catch (err) {
    console.error(`Error getting list from : ${resource}`, err);
    throw err;
  }
};

export const add = async (resource, record) => {
  try {
    const data = await handleCreate(resource, record);
    return data;
  } catch (err) {
    console.error(`Error adding record to : ${resource}`, err);
    throw err;
  }
};

export const update = async (resource, id, record) => {
  try {
    const data = await handleUpdate(resource, id, record);
    return data;
  } catch (err) {
    console.error(`Error updating record in: ${resource}`, err);
    throw err;
  }
};

export const remove = async (resource, id) => {
  try {
    const data = await handleDelete(resource, id);
    return data;
  } catch (err) {
    console.error(`Error deleting record from : ${resource}`, err);
    throw err;
  }
};

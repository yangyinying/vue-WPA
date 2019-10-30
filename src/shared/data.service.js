import * as axios from 'axios';

import { format } from 'date-fns';
import { inputDateFormat } from './constants';

import { API } from './config';

const getNodes = async function() {
  try {
    const response = await axios.get(`${API}/nodes.json`);

    let data = parseList(response);

    const nodes = data.map(h => {
      h.originDate = format(h.originDate, inputDateFormat);
      return h;
    });
    console.log(nodes);
    return nodes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getNode = async function(id) {
  try {
    const response = await axios.get(`${API}/nodes/${id}.json`);
    console.log(response.status);
    let node = parseItem(response, 200);
    return node;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error('Cannot parse list');
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error('Cannot parse item');
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const dataService = {
  getNodes,
  getNode,
};

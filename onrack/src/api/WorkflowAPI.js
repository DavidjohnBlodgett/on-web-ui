'use strict';

import { API } from '../config';
import http from 'superagent';

export default {

  getWorkflows() {
    return new Promise(function (resolve, reject) {
      http.get(API + 'workflows')
        .accept('json')
        .end((err, res) => {
          if (err) { return reject(err); }
          resolve(res && res.body);
        });
    });
  },

  postWorkflows(body) {
    return new Promise(function (resolve, reject) {
      http.post(API + 'workflows')
        .accept('json')
        .type('json')
        .send(body)
        .end((err, res) => {
          if (err) { return reject(err); }
          resolve(res && res.body);
        });
    });
  },

  getWorkflow(id) {
    return new Promise(function (resolve, reject) {
      http.get(API + 'workflows/' + id)
        .accept('json')
        .end((err, res) => {
          if (err) { return reject(err); }
          resolve(res && res.body);
        });
    });
  },

  patchWorkflow(id, body) {
    return new Promise(function (resolve, reject) {
      http.patch(API + 'workflows/' + id)
        .accept('json')
        .type('json')
        .send(body)
        .end((err, res) => {
          if (err) { return reject(err); }
          resolve(res && res.body);
        });
    });
  },

  deleteWorkflow(id) {
    return new Promise(function (resolve, reject) {
      http.del(API + 'workflows/' + id)
        .accept('json')
        .end((err, res) => {
          if (err) { return reject(err); }
          resolve(res && res.body);
        });
    });
  }

};

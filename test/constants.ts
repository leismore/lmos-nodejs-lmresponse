import { LMResponseData as Res } from '../src/index.js';

// Valid Responses
const res_valid_a:Res = {
  statusCode: '200',
  headers: {
    'Content-Type': 'application/json',
    'Content-Language': 'en-GB'
  },
  body: {
    title: 'The Oxford History of Britain',
    description: 'The Oxford History of Britain tells...'
  }
};

const res_valid_b:Res = {
  statusCode: '204'
};

const res_valid_c: Res = {
  statusCode: '204',
  headers: {
    'Etag': 'W/"v1.0.0"'
  }
};

const res_valid_d: Res = {
  statusCode: '200',
  body: 'The Oxford History of Britain'
};

// Invalid Responses

// Type A
const res_invalid_a_statusCode_headers:Res = {
  statusCode: '20',
  headers: {
    'Content-Type': 'application/json',
    'Content-Language': ''
  },
  body: {
    title: 'The Oxford History of Britain',
    description: 'The Oxford History of Britain tells...'
  }
};

const res_invalid_a_statusCode:Res = {
  statusCode: '20',
  headers: {
    'Content-Type': 'application/json',
    'Content-Language': 'en-GB'
  },
  body: {
    title: 'The Oxford History of Britain',
    description: 'The Oxford History of Britain tells...'
  }
};

const res_invalid_a_headers:Res = {
  statusCode: '200',
  headers: {
    'Content-Type': '',
    'Content-Language': 'en-GB'
  },
  body: {
    title: 'The Oxford History of Britain',
    description: 'The Oxford History of Britain tells...'
  }
};

// Type B
const res_invalid_b:Res = {
  statusCode: '24'
};

// Type C
const res_invalid_c_statusCode_headers: Res = {
  statusCode: '04',
  headers: {
    'Etag': ''
  }
};

const res_invalid_c_statusCode: Res = {
  statusCode: '04',
  headers: {
    'Etag': 'W/"v1.0.0"'
  }
};

const res_invalid_c_headers: Res = {
  statusCode: '204',
  headers: {
    'Etag': ''
  }
};

// Type D
const res_invalid_d: Res = {
  statusCode: '00',
  body: 'The Oxford History of Britain'
};

export {
  res_valid_a, res_valid_b, res_valid_c, res_valid_d,
  res_invalid_a_statusCode_headers, res_invalid_a_statusCode, res_invalid_a_headers,
  res_invalid_b,
  res_invalid_c_statusCode_headers, res_invalid_c_statusCode, res_invalid_c_headers,
  res_invalid_d
};

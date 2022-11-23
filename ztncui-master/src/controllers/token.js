/*
   - Codesec network controller UI
  Copyright (C) 2017-2021  Codesec Networks (https://codesecure.in)
  Licensed under GPLv3 - see LICENSE for details.
*/

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

let _token = process.env.ZT_TOKEN;

exports.get = async function() {
  if (_token) {
    return _token;
  } else {
    try {
      _token = await readFile('/var/lib/zerotier-one/authtoken.secret', 'utf8');
      return _token;
    } catch(err) {
      throw(err);
    }
  }
}

#!/usr/bin/env node

const opn = require('opn')

const url = 'https://pluscoders.com'

opn(url, { wait: false })
    .then(() => console.log(`opening ${url}`))
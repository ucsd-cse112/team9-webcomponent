const assert = require('chai').assert

const jsdom = require('jsdom-global')();
const doc = require('document-register-element');

const inputBox = require('../web-component/outputStream');

describe('output-stream element', () => {
    let cs;

    before(() => {

    });

    after(() => {

    });

    beforeEach(() => {
        cs = document.createElement('output-stream');   
        cs.connectedCallback();
    });

    it('creates element from document.createElement', () => {
        assert.equal('OUTPUT-STREAM', cs.nodeName); 
    });

    it('should find textarea element in shadowDom', () => {
        const output = cs.shadowRoot.querySelector('textarea');
        
        assert.equal(output.getAttribute('id'), 'msg');
    });
});
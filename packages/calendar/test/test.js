import React from 'react';
import { expect } from 'chai';
import { shallow,mount } from 'enzyme';
import Component from '../src/index.js';

describe("A suite", function() {
	it("minimal test for component", function() {
  	const wrapper = mount(<Component />);
      expect(wrapper.unrendered.type.displayName).to.equal('KendoCalendar');
    });
});

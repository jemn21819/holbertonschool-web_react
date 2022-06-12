import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('test', () => {
    let wrapper;
    beforeEach(() => {
		wrapper = shallow(<Notifications/>);
	});

    it('tests dor <Notifications/> component', () => {
        expect(wrapper).toHaveLength(1);
	});

	it('tests for App-header', () => {
        expect(wrapper.find('li')).toHaveLength(3);
    });

    

    it("tests for App-header", () => {
		expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
	});
	
});
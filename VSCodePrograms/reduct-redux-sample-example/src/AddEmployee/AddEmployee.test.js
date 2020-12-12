import React from 'react';
import AddEmployee from './AddEmployee';
import renderer from 'react-test-renderer';

describe('AddEmployee', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(
            <AddEmployee />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
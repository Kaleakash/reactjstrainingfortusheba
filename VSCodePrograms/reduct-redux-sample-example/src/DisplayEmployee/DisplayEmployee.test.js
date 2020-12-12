import React from 'react';
import DisplayEmployee from './DisplayEmployee';
import renderer from 'react-test-renderer';

describe('DisplayEmployee', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(
            <DisplayEmployee />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
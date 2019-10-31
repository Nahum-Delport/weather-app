import React from 'react';
import Display from '../Components/Display/index.js';
import renderer from 'react-test-renderer';

test("renders correctly", () => {
	const tree = renderer.create(<Display />)
	expect(tree).toMatchSnapshot();
});
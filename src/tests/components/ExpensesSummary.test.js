import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary />);
  expect(wrapper).toMatchSnapshot();
});

test('total count with single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={12} />);
  expect(wrapper).toMatchSnapshot();
});

test('total count with multiple expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={456} />);
  expect(wrapper).toMatchSnapshot();
});

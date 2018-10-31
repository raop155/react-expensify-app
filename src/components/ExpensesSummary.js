import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Viewing {this.props.expenseCount}
                    {this.props.expenseCount > 1 ? ' expenses ' : ' expense '}
                    totalling {numeral(this.props.expensesTotal / 100).format('$0,0.00')}
                </h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

import ExpenseItem from './components/ExpenseItem';
function App() {
    const expenses = [
      {
        title: "Car Insurance",
        amount: 729,
        date: new Date("2015-03-25").toLocaleString(),
      },
      {
        title: "Personal items",
        amount: 1029,
        date: new Date("2015-03-26").toLocaleString(),
      },
      {
        title: "Others",
        amount: 1729,
        date: new Date("2015-03-27").toLocaleString(),
      },
    ];
    return (
      <div>
        <h2>Get started with React!</h2>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
      </div>
    );
}

export default App;
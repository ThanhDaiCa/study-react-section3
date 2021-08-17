import ExpenseItem from './components/ExpenseItem';

function App() {
  const array = [
    {title: 'Mua keo', amount: 100.10, date: new Date(2021, 8, 17)},
    {title: 'Mua sua', amount: 10.10, date: new Date(2021, 8, 1)},
    {title: 'Mua ca', amount: 200.10, date: new Date(2021, 8, 7)},
    {title: 'Mua Thit', amount: 500.10, date: new Date(2021, 8, 4)}
  ];


  return (
    <div>

     <ExpenseItem title={array[0].title} amount={array[0].amount} date={array[0].date}/>
     <ExpenseItem title={array[1].title} amount={array[1].amount} date={array[1].date}/>
     <ExpenseItem title={array[2].title} amount={array[2].amount} date={array[2].date}/>
     <ExpenseItem title={array[3].title} amount={array[3].amount} date={array[3].date}/>
    </div>
  );
}

export default App;

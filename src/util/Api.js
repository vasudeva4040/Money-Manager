const getBalance = (setBalance) => {
    fetch('http://192.168.29.45:3000/api/balance?user=1')
    .then(response => response.json())
    .then(data =>{
        // console.log('fetched data',data)
        const newBalance = data[0].currentBalance
        setBalance(newBalance)})
    .catch(error => console.error('error loading data',error))
}

const getRecentTransactions = (setDataList) => {
    fetch('http://192.168.29.45:3000/api/recents?user=1')
    .then(response => response.json())
    .then(data =>{
        // console.log('fetched data',data) 
        setDataList(data)})
    .catch(error => console.error('error loading data',error))
}

const addExpense = (newItem) => {
    fetch('http://192.168.29.45:3000/api/expense' ,{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(data => console.log('added item',data))
    .catch(error => console.log('Error',error))
}

const addIncome = (newItem) => {
    fetch('http://192.168.29.45:3000/api/income' ,{
      method:'PUT',
      headers:{'content-Type':'application/json'},
      body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(data => console.log('new Income',data))
    .catch(error => console.log('Error',error))
}

module.exports = { getBalance,getRecentTransactions,addExpense,addIncome }
// import { useState } from "react"

// export default function Caculation(){
//     let [invest, setInvest] = useState(0);
//     let [rate, setRate] = useState(0);
//     let [goal, setGoal] = useState(0);

//     const handleChangInputInvest = (event) => {
//        setInvest(event.target.value)
//     }

//     const handleChangInputRate = (event) => {
//        setRate(event.target.value)
//     }

//     const handleChangInputGoal = (event) => {
//         setGoal(event.target.value)
//     }

//     const createTable = (event) => {

//     }

//     return(
//         <>
//             <h1>Caculation</h1>
//             <label htmlFor="">Invest</label>
//             <input type="text" name="" id="" onChange={(event) => handleChangInputInvest(event)}/>
//             <br />
//             <label htmlFor="">Rate</label>
//             <input type="text" name="" id="" onChange={(event) => handleChangInputRate(event)}/>
//             <br />
//             <label htmlFor="">Goal</label>
//             <input type="text" name="" id="" onChange={(event) => handleChangInputGoal(event)}/>
//             <br />
//             <button onClick={(event) => createTable(event)}>Cal</button>

//             <div>
//                 {
//                     listResult.map((result) =>{
//                         return(
//                             div key={}
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }



import { useState } from "react"

export default function Caculation() {
  const [investMoney, setInvestMoney] = useState("")
  const [rate, setRate] = useState("")
  const [goal, setGoal] = useState("")
  const [tableData, setTableData] = useState([])

  const handleClick = () => {
    let year = new Date().getFullYear() + 1
    let money = parseFloat(investMoney)
    let rateValue = parseFloat(rate)
    let goalValue = parseFloat(goal)

    let newData = []
    while (money < goalValue) {
      let endYearMoney = Math.round(money * (1 + rateValue / 100))
      newData.push({
        year: year,
        money: money,
        rate: rateValue,
        endYear: endYearMoney,
      });
      money = endYearMoney
      year++;
    }

    setTableData(newData)
  };

  return (
    <div className="container">
      
      <h2>Investment Calculator</h2>
      
      <div>
        <label>Invest : </label>
        <input type="number" value={investMoney} onChange={(e) => setInvestMoney(e.target.value)} />
      </div>

      <div>
        <label>Rate (%): </label>
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </div>

      <div>
        <label>Goal: </label>
        <input type="number" value={goal} onChange={(e) => setGoal(e.target.value)} />
      </div>

      <button onClick={handleClick} className="button">Click</button>

      {tableData.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate (%)</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.money}</td>
                <td>{row.rate}</td>
                <td>{row.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


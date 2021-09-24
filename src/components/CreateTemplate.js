import React , {useState} from "react";
import {Textfield} from 'react-mdl'
import './CreateTemplate.css'

const _defaultCosts = [
    {
      name: "",
      price: "",
      target: 5,
    },
  ];

function CreateTemplate() {
    const userSetInput = 1;
    const [division, setDivision] = useState();
    const [empset, empsetSelection] = useState();
    const [percentage, setPercentage] = useState({set1:70, set2:30});
    const [target, setTarget] = useState(100);
    // const [empName, setEmpName] = useState('')
  
    const [costs, setCosts] = useState(_defaultCosts);
  
    const handleCostsChange = (event) => {
      const _tempCosts = [...costs];
      _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;
  
      setCosts(_tempCosts);
    };
  
    const handleNewTable = (event) => {
      if (event.key === "Enter") {
        setCosts((prevCosts) => [
          ...prevCosts,
          { name: "", weightage: 0, target: 5 },
        ]);
      }
    };

   const onselectSet =(e)=>{
       console.log('coming'+e)
         let pre = percentage
         empset ==1 ? pre.set1= parseInt(e) : pre.set2 = parseInt(e)
         console.log(pre)
         setPercentage(pre)
    }

  
      
    console.log(setCosts);
    console.log(setPercentage);
    console.log(setDivision);
  return (
    <div className="createTemplate__topDiv">
      <h4>Create Template</h4>
      
      <div className="kpiTemplate__divTwo">
      <form className="Kpi__form_Top">
        
        <div className="kpiForm__maindiv">
          <div className="divisionFlex">
            <label htmlFor="empDivision" className="joinLabel">
              Employee Division
            </label>
            <select
              onChange={(e) => setDivision(e.target.value)}
              value={division}
              className="joinInput"
            >
              <input type="text" />
              <option>Select Division</option>
              <option>HR</option>
              <option>Development</option>
              <option>Sales</option>
              <option>Delivery Team</option>
              <option>Staffing</option>
              {/* <option value={customKeyValue} >&lt;Enter New Division&gt;</option> */}
            </select>
          </div>
          <div>
            <label className="joinLabel"> Employee Set Selection </label>
            <select
              onChange={(e) => empsetSelection(e.target.value)}
              className="joinInput"
              value={empset}
            >
              <option>Select Set</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div>
          <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
  </div>
            <label className="joinLabel">Set Percentage</label>
            
            <input
              className="joinInput"
              value={empset == 1 ? percentage.set1 :empset ==2 ? percentage.set2 : null}
              onChange={(e) => onselectSet(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label />
          {/* <button className="primary" type="submit">
          Submit
        </button> */}
        </div>
      </form>
      <div className="table">
        <div className="table-content">
          <div className="table-header">
            <div className="table-row">
              <div className="table-data">
                <div>KPI Name</div>
              </div>
              <div className="table-data">
                <div>Weightage</div>
              </div>
              <div className="table-data">
                <div>Target</div>
              </div>
            </div>
          </div>
          <div className="table-body">
            {costs.map((item, index) => (
              <div className="table-row" key={index}>
                <div className="table-data">
                  <input
                    name="name"
                    data-id={index}
                    type="text"
                    value={item.name}
                    //   onChange={handleCostsChange}
                  />
                </div>
                <div className="table-data">
                  <input
                    name="price"
                    data-id={index}
                    type="number"
                    value={item.target}
                    //   onChange={handleCostsChange}
                    onKeyDown={handleNewTable}
                  />
                  %
                </div>
                <div className="table-data">
                  <input
                    name=""
                    data-id={index}
                    type="number"
                    value={item.target}
                    //   onChange={handleCostsChange}
                    onKeyDown={handleNewTable}
                  />
                  %
                </div>
              </div>
            ))}
          </div>
          <div className="table-footer">
            <div className="table-row">
              {/* <div className="table-data">
              <div>Score :</div>
            </div> */}
              {/* <div className="table-datanew">
              <div>{getTotalCosts()}</div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
        
      </div>
  
  );
}

export default CreateTemplate;

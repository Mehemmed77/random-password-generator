import iconCheck from "../images/icon-check.svg";


const Checkbox = ({ func,name }) => {
    return <input type="checkbox" name={name} onChange={func}/>;
};

export default function CheckboxComponent({setCheckboxes, setCounter}){
    
    const handleCheckboxChange = (e) => {
        setCheckboxes(prevState => ({
            ...prevState,
            [e.target.name]: e.target.checked
        }))

        if(e.target.checked) {
            setCounter(prevCounter => prevCounter + 1)
        }
        
        else setCounter(prevCounter => prevCounter - 1)
    }

    return(
        <div className="checkboxContainer">
            <div>
                <Checkbox func={handleCheckboxChange} name={"uppercase"}></Checkbox>
                <label>Include Uppercase Letters</label>
                <img src={iconCheck} alt="" className='iconCheck'/>
            </div>

            <div>
                <Checkbox func={handleCheckboxChange} name={"lowercase"}></Checkbox>
                <label>Include Lowercase Letters</label>
                <img src={iconCheck} alt="" className='iconCheck'/>
            </div>

            <div>
                <Checkbox func={handleCheckboxChange} name={"numbers"}></Checkbox>
                <label>Include numbers</label>
                <img src={iconCheck} alt="" className='iconCheck'/>
            </div>

            <div>
                <Checkbox func={handleCheckboxChange} name={"symbols"}></Checkbox>
                <label>Include symbols</label>
                <img src={iconCheck} alt="" className='iconCheck'/>
            </div>
        </div>
    )
}
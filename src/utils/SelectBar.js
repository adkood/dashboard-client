import react from "react";
import { useDispatch } from "react-redux";
import { outletActions } from "../store";

const SelectBar = ({ width = "100%", height = "100%", heading = "Heading", HeadingBgColor = "white", OptiongBgColor = "lightskyblue", Headingcolor = "lightskyblue", optionColor = "white", options1 = [], options2 = [], fontSize = '1rem', type = "" }) => {

    const dispatch = useDispatch();

    const yearChangeHandler = (e) => {
        if (type === 'quantity') {
            dispatch(outletActions.setQuantityYearState(e.target.value));
        }
        else if (type === 'value') {
            dispatch(outletActions.setValueYearState(e.target.value));
        }
        else {
            dispatch(outletActions.setRefillYearState(e.target.value));
        }

    }

    const meatChangeHandler = (e) => {
        console.log(e.target.value);
        if (type === 'quantity') {
            dispatch(outletActions.setQuantityMeatState(e.target.value));
        }
        else if (type === 'value') {
            dispatch(outletActions.setValueMeatState(e.target.value));
        }
        else {
            dispatch(outletActions.setRefillMeatState(e.target.value));
        }
    }

    return (
        <div style={{ width: `${width}`, height: `${height}`, color: `${Headingcolor}`, fontSize: `${fontSize}`, display: "flex", backgroundColor: `${HeadingBgColor}` }}>
            <section style={{ width: "70%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h2>{heading}</h2>
            </section>
            <section style={{ width: "30%", height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                {options1.length > 0 && <select onChange={meatChangeHandler} style={{ width: "46%", height: "70%", borderRadius: "4px", color: `${optionColor}`, backgroundColor: `${OptiongBgColor}`, borderStyle: "none" }}>
                    <option value={"all"}>select</option>
                    {options1.map((ele, i) => {
                        return <option value={i + 1}>{ele}</option>
                    })}
                </select>}
                {options2.length > 0 &&
                    <select onChange={yearChangeHandler} style={{ width: "46%", height: "70%", borderRadius: "4px", color: `${optionColor}`, backgroundColor: `${OptiongBgColor}`, borderStyle: "none" }}>
                        <option value={"all"}>select</option>
                        {options2.map((ele) => {
                            return <option value={ele}>{ele}</option>
                        })}
                    </select>
                }
            </section>
        </div>
    );
}

export default SelectBar;
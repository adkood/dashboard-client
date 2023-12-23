import react from "react";

const SelectBar = ({ width = "100%", height = "100%", heading = "Heading", HeadingBgColor = "white", OptiongBgColor = "lightskyblue", Headingcolor = "lightskyblue", optionColor = "white", options1 = [], options2 = [], fontSize = '1rem' }) => {
    return (
        <div style={{ width: `${width}`, height: `${height}`, color: `${Headingcolor}`, fontSize: `${fontSize}`, display: "flex", backgroundColor: `${HeadingBgColor}` }}>
            <section style={{ width: "70%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h2>{heading}</h2>
            </section>
            <section style={{ width: "30%", height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                {options1.length > 0 && <select style={{ width: "46%", height: "70%", color: `${optionColor}`, backgroundColor: `${OptiongBgColor}`, borderStyle: "none" }}>
                    <option value={"select"}>select</option>
                    {options1.map((ele) => {
                        return <option value={ele}>{ele}</option>
                    })}
                </select>}
                {options2.length > 0 &&
                    <select style={{ width: "46%", height: "70%", color: `${optionColor}`, backgroundColor: `${OptiongBgColor}`, borderStyle: "none" }}>
                        <option value={"select"}>select</option>
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
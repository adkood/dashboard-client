import "../utils/Main.css";
import SelectBar from "../utils/SelectBar";
import VerticalTextContainer from "../utils/VerticalTextContainer";
import QuantityBarData from "./QuantityBarData";
import PopularPieData from "./PopularPieData";
import ValueBarData from "./ValueBarData";
import RefillCountData from "./RefillCountData";

import { MdInventory2 } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";


const OutletDisplay = () => {
    return (
        <div className="App">
            <section className="sideBar">
                <VerticalTextContainer width={"90%"} height={"53%"} text="DASHBOARD" fontSize="2rem" />
                <button className="btn__outlet"><VerticalTextContainer width={"100%"} height={"100%"} text="OUTLET 1" bgColor="aliceblue" color="lightskyblue" /></button>
                <button className="btn__outlet"><VerticalTextContainer width={"100%"} height={"100%"} text="OUTLET 2" bgColor="aliceblue" color="lightskyblue" /></button>
            </section>
            <div className="outlet">
                <section className="outlet__barData">
                    <section className="outlet__barData__inside">
                        <section className="outlet__barData__inside_selectBar">
                            <SelectBar heading="QUANTITY SOLD (Kg)" options2={["2021", "2022", "2023"]} />
                        </section>
                        <QuantityBarData />
                    </section>
                    <section className="outlet__barData__inside">
                        <section className="outlet__barData__inside_selectBar">
                            <SelectBar heading="VALUE MADE (Rs)" options2={["2021", "2022", "2023"]} />
                        </section>
                        <ValueBarData />
                    </section>
                </section>
                <section className="outlet__barData">
                    <section className="outlet_PieData">
                        <section className="outlet__PieData__inside">
                            <PopularPieData />
                        </section>
                        <section className="outlet__PieData__inside">
                            <button className="btn__insideOutlet">Analize{<VscGraph size={"3rem"}/>}</button>
                            <button className="btn__insideOutlet">+ Inventory{<MdInventory2 size={"3rem"}/>}</button>
                        </section>
                    </section>
                    <section className="outlet__barData__inside">
                        <section className="outlet__barData__inside_selectBar">
                            <SelectBar heading="REFILL COUNT" options2={["2021", "2022", "2023"]} />
                        </section>
                        <RefillCountData />
                    </section>
                </section>
            </div>
        </div>
    );
}

export default OutletDisplay;
import "../utils/Main.css";
import VerticalTextContainer from "../utils/VerticalTextContainer";
import QuantityBarData from "./QuantityBarData";
import RefillPieChartData from "./RefillPieChartData";
import ValueBarData from "./ValueBarData";

const OutletDisplay = () => {
    return (
        <div className="App">
            <section className="sideBar">
               <VerticalTextContainer width={"90%"} height={"53%"} text="DASHBOARD" fontSize="2rem"/>
               <button className="btn__outlet"><VerticalTextContainer width={"100%"} height={"100%"} text="OUTLET 1" bgColor="aliceblue" color="lightskyblue"/></button>
               <button className="btn__outlet"><VerticalTextContainer width={"100%"} height={"100%"} text="OUTLET 2" bgColor="aliceblue" color="lightskyblue"/></button>
            </section>
            <div className="outlet">
                <section className="outlet__barData">
                    <section className="outlet__barData__inside">
                        <section className="outlet__barData__inside_selectBar">
                            <section className="outlet__barData__inside_selectBar__leftSide"></section>
                            <section className="outlet__barData__inside_selectBar__rightSide"></section>
                        </section>
                        <QuantityBarData />
                    </section>
                    <section className="outlet__barData__inside">
                        <section className="outlet__barData__inside_selectBar">

                        </section>
                        <ValueBarData />
                    </section>
                </section>
                <section className="outlet__barData">
                    <section className="outlet__PieData__inside">
                        <section className="outlet__barData__inside_selectBar">
                            <section className="outlet__barData__inside_selectBar__leftSide"></section>
                            <section className="outlet__barData__inside_selectBar__rightSide"></section>
                        </section>
                        <RefillPieChartData />
                    </section>
                    <section className="outlet__PieData__inside__bottom">
                        <button className="btn">Analitics</button>
                        <button className="btn">Add in Inventory</button>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default OutletDisplay;
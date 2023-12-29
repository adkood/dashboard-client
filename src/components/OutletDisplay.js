import "../utils/Main.css";
import SelectBar from "../utils/SelectBar";
import VerticalTextContainer from "../utils/VerticalTextContainer";
import QuantityBarData from "./QuantityBarData";
import PopularPieData from "./PopularPieData";
import ValueBarData from "./ValueBarData";
import RefillCountData from "./RefillCountData";

// icons
import { MdInventory2 } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";

// redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { outletActions } from "../store";

const OutletDisplay = () => {

    const outletState = useSelector((state) => state.outlet.outletState);
    const dispatch = useDispatch();

    const onOutletClickHandler = (type) => {
        dispatch(outletActions.setOutletState(type));
    }

    return (
        <div className="App">
            <section className="sideBar">
                <VerticalTextContainer width={"90%"} height={"53%"} text="DASHBOARD" fontSize="2rem" />
                <button onClick={() => { onOutletClickHandler('all') }} className={`${outletState === 'all' ? "btn__outlet__Selected" : "btn__outlet"}`}><VerticalTextContainer width={"100%"} height={"100%"} text="ALL" bgColor="aliceblue" color={outletState === 'all' ? "orange" : "lightskyblue"} /></button>
                <button onClick={() => { onOutletClickHandler('1') }} className={`${outletState === '1' ? "btn__outlet__Selected" : "btn__outlet"}`}><VerticalTextContainer width={"100%"} height={"100%"} text="O 1" bgColor="aliceblue" color={outletState === '1' ? "orange" : "lightskyblue"} /></button>
                <button onClick={() => { onOutletClickHandler('2') }} className={`${outletState === '2' ? "btn__outlet__Selected" : "btn__outlet"}`}><VerticalTextContainer width={"100%"} height={"100%"} text="O 2" bgColor="aliceblue" color={outletState === '2' ? "orange" : "lightskyblue"} /></button>
            </section>
            <div className="outlet">
                <section className="outlet__barData">
                    <section className="outlet__barData__inside">
                        <section className="outlet__barData__inside_selectBar">
                            <SelectBar heading="QUANTITY SOLD (Kg)" options1={["Duck", "Chicken", "Mutton", "Pork", "Turkey"]} options2={["2021", "2022", "2023"]} type={"quantity"} />
                        </section>
                        <QuantityBarData />
                    </section>
                    <section className="outlet__barData__inside">
                        <section className="outlet__barData__inside_selectBar">
                            <SelectBar heading="VALUE MADE (Rs)" options1={["Duck", "Chicken", "Mutton", "Pork", "Turkey"]} options2={["2021", "2022", "2023"]} type={"value"} />
                        </section>
                        <ValueBarData />
                    </section>
                </section>
                <section className="outlet__barData">
                    <section className="outlet_PieData">
                        <section className="outlet__PieData__inside">
                            <section className="outlet__PieData__inside__heading">
                                <h2>POPULARITY CHART</h2>
                                <CiHeart color="red" size={"2.5rem"} />
                            </section>
                            <PopularPieData />
                        </section>
                        <section className="outlet__PieData__inside">
                            <button className="btn__insideOutlet">Analize your data{<VscGraph size={"5rem"} />}</button>
                        </section>
                    </section>
                    <section className="outlet__barData__inside">
                        <section className="outlet__barData__inside_selectBar">
                            <SelectBar heading="REFILL COUNT" options1={["Duck", "Chicken", "Mutton", "Pork", "Turkey"]} options2={["2021", "2022", "2023"]} type={"refill"} />
                        </section>
                        <RefillCountData />
                    </section>
                </section>
            </div>
        </div>
    );
}

export default OutletDisplay;
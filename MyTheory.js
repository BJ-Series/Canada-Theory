import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "CanadaTheory";
var name = "Canada";
var description = "The draft bulids on next release is not draft.";
var authors = "BJ-Series";
var version = "1.0.0";

var currency;

var c1

currency = theory.createCurrency();

var init = () => {
    {
        let getDesc = (level) => "c_1=" + level;
        let getInfo = (level) => "c_1=" + level;
        c1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(50, 1.5)));
        c1.getDescription = (_) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getInfo(c1.level), getInfo(c1.level + amount));
    }
}

var getC1 = (level) => level;

init();

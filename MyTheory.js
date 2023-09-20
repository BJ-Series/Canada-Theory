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

var c1, c2;

currency = theory.createCurrency();

var init = () => {
    {
        let getDesc = (level) => "c_1=" + getC1(level);
        let getInfo = (level) => "c_1=" + getC1(level);
        c1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(50, 1.37)));
        c1.getDescription = (_) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getInfo(c1.level), getInfo(c1.level + amount));
    }
    {
        let getDesc = (level) => "c_2=" + getC2(level);
        let getInfo = (level) => "c_2=" + getC2(level);
        c2 = theory.createUpgrade(1, currency, new ExponentialCost(100, 5));
        c2.getDescription = (_) => Utils.getMath(getDesc(c2.level));
        c2.getInfo = (amount) => Utils.getMathTo(getInfo(c2.level), getInfo(c2.level + amount));
    }
}

var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;

    currency.value += getC1(c1.level) * getC2(c2.level);
}

var getC1 = (level) => level;
var getC2 = (level) => BigNumber.TWO.pow(level);

init();

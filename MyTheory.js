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

currency = theory.createCurrency();

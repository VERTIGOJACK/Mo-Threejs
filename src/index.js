import panzoom from "panzoom";
import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";

const zoomelement = document.getElementById("panzoom");
panzoom(zoomelement);

const myflicker = document.getElementById("my-flicking");
const flick = new Flicking(myflicker, { circular: true });

console.log(flick);
console.log(flick);

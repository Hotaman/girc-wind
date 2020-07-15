import React, { useState } from "react";
import useSWR from "swr";
import { Line } from "react-chartjs-2";
import fetcher from "../lib/fetch";

const ShowLines = ({ windData }) => {
    // logOut(); // get out of there

    // Lets break out the data first
    const windAvg = [];
    const windMax = [];
    const windDir = [];
    const pntTS = [];
    windData.forEach((d, i) => {
        // reverse the points so most recient is to the right
        const p = windData.length - 1 - i;
        windAvg[p] = parseFloat(d.windAvg);
        windMax[p] = parseFloat(d.windMax);
        windDir[p] = d.windDir;
        const tp = new Date(d.msgTime);
        pntTS[p] = `${tp.toLocaleDateString()} - ${tp.toLocaleTimeString()}`;
    });

    // now create the data sets
    const data = {
        labels: pntTS, //[ "-60 minutes", "-45 minutes", "-30 minutes", "-15 minutes", "Now" ],
        datasets: [
            {
                label: "2 minute average mph",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,152,92,1)",
                borderColor: "rgba(75,152,92,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,92,192,1)",
                pointBackgroundColor: "rgba(75,92,192,1)",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(200,0,0,1)",
                pointHoverBorderColor: "rgba(220,0,0,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: windAvg,
            },
            {
                label: "10 Minute Max Gust",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(175,0,92,1)",
                borderColor: "rgba(175,0,92,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,92,192,1)",
                pointBackgroundColor: "rgba(75,92,192,1)",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(0,0,255,1)",
                pointHoverBorderColor: "rgba(0,0,255,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: windMax,
            },
        ],
    };

    return (
        <div style={{ width: "1024px", height: "768px" }}>
            <Line data={data} />
        </div>
    );
};

const WindChart = ({ numRec }) => {
    const [ numDocs, setNumDocs ] = useState(30);
    console.log(`The requested rec #: ${numRec}`);
    const { data, error } = useSWR(`/api/winddata/${numDocs}`, fetcher);
    console.log(`the error: ${error}`, error);
    if (error) return <div>failed to load data!</div>;
    if (!data) return <div>loading data...</div>;
    //console.log("Here is the returned data:");
    //console.log(data);
    //return <div>hello {data.name}!</div>

    const setHours = e => {
        setNumDocs(parseInt(e.target.value));
    };

    return (
        <div style={{ "text-align": "center" }}>
            Select Display Period {" "}
            <select id="numDocs" name="numDocs" onChange={setHours}>
                <option value="30" selected={numDocs == 30}>
                    1 Hour
                </option>
                <option value="60" selected={numDocs == 60}>
                    2 Hours
                </option>
                <option value="90" selected={numDocs == 90}>
                    3 Hours
                </option>
            </select>
            <ShowLines windData={data} />
        </div>
    );
};

export default WindChart;

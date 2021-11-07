import styled, { css } from 'styled-components';
import Chart from 'react-apexcharts';
import { useState } from 'react';

const Card = styled.div`
    height: 20rem;
    width: 25rem;
    border-radius: 1rem;
    background: #ebebeb;
`
const ChartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const CardTitle = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 30px;
`

const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: black;
`


const SimpleCard = function(){
    const [options, setOptions] = useState({
        chart: {
            animations: {
              enabled: false,
            },
          },
          grid: {
            padding: {
              top: 20,
              left: 0,
              right: 0,
              bottom: 20,
            },
          },
          stroke: {
            show: false,
          },
          tooltip: { enabled: false },
          legend: { show: false },
          dataLabels: { enabled: false },
          plotOptions: { pie: { donut: { size: "100%" } } },
    
    });

    const series = [20, 50, 30];

    return(
        <Card>
            <CardTitle>Simple Card</CardTitle>
            <CardContent>Simple Card</CardContent>
            <ChartDiv>
                <Chart options={options}
                series={series}
                type="pie"
                width="100%"
                height="auto"
                >
                </Chart>
            </ChartDiv>
        </Card>
    );
}

export default SimpleCard;
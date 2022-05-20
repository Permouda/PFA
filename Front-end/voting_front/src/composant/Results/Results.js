import React from 'react'
import { useEffect, useState } from 'react';
import "./Results.css"
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
ChartJs.register(
    Tooltip, Title, ArcElement, Legend
  );


/* 
  
const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
};
 */

export default function Results() {
    const [data, setData] = useState({
        datasets: [{
            data: [10, 20, 30],
            backgroundColor:[
              'red',
              'blue',
              'yellow'
            ]
        },
      ],
      labels: [
          'Red',
          'Yellow',
          'Blue'
      ], 
    });


    useEffect(()=> {
        const fetchData = () =>  {/* change url */
          fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
            const res = data.json();
            return res
          }).then((res) => {
            console.log("resss", res)
            const label = [];
            const data = [];
            for(var i of res) {
                label.push(i.name);
                data.push(i.id)
                /* change id by score */
            }
            setData(
              {
                datasets: [{
                    data:data,
                   /*  backgroundColor:[
                      'hsl(125,10.3%,54.1%)',
                      'hsl(325,11%,42.7%)',
                      'hsl(343.2,31.6%,53.5%)',
                      'hsl(22.6,66.9%,75.1%',
                      'hsl(32.1,100%,77.3%)'

                    ] */
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                      ],
                      hoverOffset: 4
                },
              ],
              labels:label, 
            }
            )
    
          }).catch(e => {
            console.log("error", e)
          }) 
        }
      fetchData();
      }, [])
  return (
    <div className='Pie_1'>
        <div className='Pie_2'>
    <Doughnut data={(data)} className="Pie"/>
        </div>
    </div>
  )
}

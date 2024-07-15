import { ChartComponent, DateTime, Inject, Legend, SplineAreaSeries, SeriesCollectionDirective, 
  SeriesDirective } from '@syncfusion/ej2-react-charts'
import React from 'react'
import { useStateContext } from '../../context/ContextProvider'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { Header } from '../../components'




const Area = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category={'Chart'} title={'Inflation Rate in Percentage'}/>

      <ChartComponent
        id='line-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{border: {width: 0}}}
        tooltip={{enable: true}}
        background={currentMode === 'Dark' ? '#33373E': '#fff'}
      >
        <Inject services={[
          SplineAreaSeries,
          DateTime,
          Legend
        ]} 
        />

          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>

      </ChartComponent>
    </div>
  )
}

export default Area
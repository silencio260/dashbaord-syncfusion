import React from 'react'
import { Search, ColumnDirective, ColumnsDirective, ContextMenu, Edit, ExcelExport, Filter, 
  GridComponent, Inject, Page, PdfExport, Resize, Sort, 
  Toolbar} from '@syncfusion/ej2-react-grids'
import { contextMenuItems, employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'


const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header 
        category='Page'
        title='Employees'
      />

      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        width={'auto'}
        toolbar={['Search']}
      >
        <ColumnsDirective>
            {employeesGrid.map((item, index) => (
              <ColumnDirective 
                key={index}
                {...item}
              />
            ))}
        </ColumnsDirective>
        <Inject 
          services={[
            Page,    
            Search,  
            Toolbar  
          ]}
        />
      </GridComponent>
    </div>
  )
}


export default Employees


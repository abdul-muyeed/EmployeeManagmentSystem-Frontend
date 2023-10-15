
export default function Home() {
    const tablefields = [
        "name",
        "position",
        "office",
        "age",
        "start date",
        "salary"

    ]
    const tableData = [
        {
            name: 'Tiger Nixon',
            position: 'System Architect',

            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320,800',
        },
        {
            name: 'Tiger Nixon',
            position: 'System Architect',

            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320,800',
        },
        {
            name: 'Tiger Nixon',
            position: 'System Architect',

            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320,800',
        }
    ]
  return (
    <>
      <div className="w-full  mx-auto px-2 flex justify-start items-center">






<div id='recipients' className="p-8 m-5 w-fit  border rounded shadow-lg bg-white">


    <table id="example" className="stripe hover" >
        <thead>
            <tr className="">
                {
                    tablefields.map((item, index) => {
                        return (
                            <th key={index} >{item}</th>
                        )
                    })
                }
                
            </tr>
        </thead>
        <tbody className="border-b border-gray-300">
            {
                tableData.map((item, index) =>{
                    return (
                        <tr key={index} className="hover:bg-indigo-300">
                            <td>{item.name}</td>
                            <td>{item.position}</td>
                            <td>{item.office}</td>
                            <td>{item.age}</td>
                            <td>{item.date}</td>
                            <td>{item.salary}</td>
                        </tr>
                    )
                } )
            }
            
        </tbody>

    </table>


</div>


</div>
    </>
  )
}
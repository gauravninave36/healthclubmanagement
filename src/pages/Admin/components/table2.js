const Table2 = (props) => {
  const height = props.height
  const width = props.width
  return (
    <div
      className='table2'
      style={{
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '20px',
        marginBottom: '20px',
      }}>
      <div
        className='tableg99 table-responsive'
        style={{
          border: '10px solid #cff4fc',
          borderRadius: '20px',
          width: width + 'px',
          height: height + 'px',
          overflowY: 'auto',
        }}>
        <table className='table table-hover'>
          <thead>
            <tr className='table-info'>
              <th scope='col' style={{ borderTopLeftRadius: '10px' }}>
                #
              </th>
              <th scope='col'>First</th>
              <th scope='col'>Last</th>
              <th scope='col' style={{ borderTopRightRadius: '10px' }}>
                Handle
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan=''>Larry the Bird</td>
              <td>@twitter</td>
             
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table2

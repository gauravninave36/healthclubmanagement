const TableMessage = (props) => {
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
              <th scope='col' style={{ borderTopRightRadius: '10px' }}>
                Customer message
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableMessage

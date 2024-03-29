const Formaddemployeepage = () => {
  return (
    <div
      class='col-md-7 col-lg-8 table1'
      style={{
        marginLeft: '11%',
        marginRight: '11%',
        marginTop: '20px',
        marginBottom: '20px',
      }}>
      <form class='needs-validation' novalidate=''>
        <div class='row g-3'>
          <div class='col-sm-6'>
            <label for='firstName' class='form-label'>
              First name
            </label>
            <input
              type='text'
              class='form-control'
              id='firstName'
              placeholder=''
              required=''></input>
            <div class='invalid-feedback'>Valid first name is required.</div>
          </div>

          <div class='col-sm-6'>
            <label for='lastName' class='form-label'>
              Last name
            </label>
            <input
              type='text'
              class='form-control'
              id='lastName'
              placeholder=''
              required=''></input>
            <div class='invalid-feedback'>Valid last name is required.</div>
          </div>
          <div class='col-12'>
            <label for='email' class='form-label'>
              Email
            </label>
            <input
              type='email'
              class='form-control'
              id='email'
              placeholder='you@example.com'></input>
            <div class='invalid-feedback'>
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div class='col-6'>
            <label for='address' class='form-label'>
              Address
            </label>
            <input
              type='text'
              class='form-control'
              id='address'
              placeholder='1234 Main St'
              required=''></input>
            <div class='invalid-feedback'>
              Please enter your shipping address.
            </div>
          </div>
          <div class='col-6'>
            <label for='state' class='form-label'>
              Designation
            </label>
            <select class='form-select' id='state' required=''>
              <option value=''>Choose...</option>
              <option>California</option>
            </select>
            <div class='invalid-feedback'>Please provide a valid state.</div>
          </div>
          <div class='col-6'>
            <label for='address2' class='form-label'>
              Address 2 <span class='text-muted'>(Optional)</span>
            </label>
            <input
              type='text'
              class='form-control'
              id='address2'
              placeholder='Apartment or suite'></input>
          </div>
          <div class='col-6'>
            <label for='Phone' class='form-label'>
              Phone
            </label>
            <input
              type='text'
              class='form-control'
              id='phone'
              placeholder='8326484762'></input>
          </div>

          <div class='col-md-5'>
            <label for='country' class='form-label'>
              Country
            </label>
            <select class='form-select' id='country' required=''>
              <option value=''>Choose...</option>
              <option>United States</option>
            </select>
            <div class='invalid-feedback'>Please select a valid country.</div>
          </div>

          <div class='col-md-4'>
            <label for='state' class='form-label'>
              State
            </label>
            <select class='form-select' id='state' required=''>
              <option value=''>Choose...</option>
              <option>California</option>
            </select>
            <div class='invalid-feedback'>Please provide a valid state.</div>
          </div>

          <div class='col-md-3'>
            <label for='zip' class='form-label'>
              Zip
            </label>
            <input
              type='text'
              class='form-control'
              id='zip'
              placeholder=''
              required=''></input>
            <div class='invalid-feedback'>Zip code required.</div>
          </div>
          <div class='col-mb-6'>
            <label for='photo' class='form-label'>
              Photo
            </label>
            <input
              type='file'
              class='form-control'
              id='inputGroupFile02'></input>
          </div>
        </div>

        <hr class='my-4'></hr>

        <button class='w-100 btn btn-primary btn-lg' type='submit'>
          Add employee
        </button>
      </form>
    </div>
  )
}

export default Formaddemployeepage

import React from 'react'

function Counter() {
  return (
    <>
        <section className="w3l-stats py-5" id="stats">
  <div className="gallery-inner container py-lg-0 py-3">
    <div className="row stats-con pb-lg-3">
      <div className="col-lg-4 col-6 stats_info counter_grid">
        <p className="counter">730</p>
        <h4>Custom Products</h4>
      </div>
      <div className="col-lg-4 col-6 stats_info counter_grid1">
        <p className="counter">680</p>
        <h4>Our Farms</h4>
      </div>
      <div className="col-lg-4 col-6 stats_info counter_grid mt-lg-0 mt-5">
        <p className="counter">812</p>
        <h4>Happy Customers</h4>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Counter
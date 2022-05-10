import React from 'react'
import About from './components/About'
import Counter from './components/Counter'
import Footer from './components/Footer'
import Header from './components/Header'
import Minisidebar from './components/Minisidebar'
import Modal from './components/Modal'
import NewModal from './components/NewModal'
import Plans from './components/Plans'
import Properties from './components/Properties'
import Reviews from './components/Reviews'
import Slidersection from './components/Slidersection'
import StartProject from './components/StartProject'
import Videos from './components/Videos'
import Whatwedo from './components/Whatwedo'

function Main() {
  return (
    <>
      {/* <div class="pull-right toggle-right-sidebar">
        <span class="fa title-open-right-sidebar tooltipstered fa-angle-double-right"></span>
      </div> */}

      <div id="right-sidebar" className="right-sidebar-notifcations nav-collapse">
      <div className="bs-example bs-example-tabs right-sidebar-tab-notification" data-example-id="togglable-tabs"></div>
        </div>
        {/* <Minisidebar /> */}
        {/* <div className="right-sidebar-panel-content animated fadeInRight" tabindex="5003"
        style="overflow: hidden; outline: none;">
    </div> */}
        <Header />
        <Slidersection />
        <About />
        <Whatwedo />
        <Counter />
        <Properties />
        <Plans />
        <Reviews />
        <Videos />
        <StartProject />
        <Footer />
        <Modal />
        <NewModal />
      {/* </div> */}
    </>
  )
}

export default Main
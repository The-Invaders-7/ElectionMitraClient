import './Home.css';
import logo from '../../Images/logo.svg'
import home from '../../Images/home.svg'

function Home() {
  return (
    <>
    <div className='icons'>
        <div className="mt-4 flex">
           <img src={home} className="im1"/>
        </div>
        {/* <div className="mt-4 flex"> */}
            <div className="p-5">
            <img src={logo} className="im2"/>

                <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-4 gap-4 md:gap-8">
                <div class="container2"> A web application which facilitates voters to download their voting receipt in a minimum time possible. </div>
                <div class="container2"> This application help to Keep records of voters since data is stored digitally rather than getting involved in the paper work </div>
                <div class="container2"> This product is made using three independent applications, which work in sync to solve the given problem statement. </div>
                </div>
            </div>
        {/* </div> */}
    </div>
    </>
  );
}

export default Home;

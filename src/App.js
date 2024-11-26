import './App.css';
import './index.css';
import logo from './images/cafe-removebg-preview.png';
import serv1 from './images/bubble1.png';
import serv2 from './images/bubble2.png';
import serv3 from './images/bubble3.png';
import serv4 from './images/bubble4.png';
import serv5 from './images/bubble7.png';
import serv6 from './images/bubble6.png';
import abou1 from './images/bubble8.png';
import abou2 from './images/bubble9.png';
import cont1 from './images/tarobubbletea-removebg-preview.png';
import cont2 from './images/coffeebubbletea-removebg-preview.png';
import MyNavigation from './components/navbar';
import MySection from './components/seccion';
import MyServices from './components/service';
import MyAbout from './components/about';
import MyContact from './components/contact';
import MyFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <body className="bg-[#fff8f3] w-full">
        <header className="text-gray-600 body-font mt-20">
          <div className="bg-[#5fb4b5] flex flex-wrap flex-col md:flex-row items-center px-5 py-5 fixed top-0 left-0 right-0">
            <MyNavigation />
            <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center">
              <img src={logo} className="w-32" alt="" />
            </a>
          </div>
        </header>

        <section id="home" className="bg-[#fefdcd] w-full">
          <MySection />
        </section>

        <section id="services" className="flex flex-col items-center font-raleway text-xl w-full py-5 px-6 md:px-0">
        <MyServices />
        <div className="flex flex-wrap md:flex-row w-full"> 
          <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={serv1} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
               <img src={serv2} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
              <img src={serv3} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
               <img src={serv4} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
            <img src={serv5} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
            <img src={serv6} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
        </section>

        <section id="about_us" className="flex flex-col md:flex-row w-full font-raleway">
          
           <div class="flex flex-col items-center md:justify-end md:items-end">
               <img src={abou1} className="w-1/2 md:w-full lg:w-4/5 md:pr-5 pt-6 md:pt-20" alt="" /> 
            </div>
            <MyAbout />
            <div class="flex flex-col items-center md:justify-end md:items-end">
              <img src={abou2} className="w-1/2 md:w-full lg:w-4/5 md:pr-5 pt-6 md:pt-20" alt="" /> 
            </div>
        </section>

        <section id="contact" className="font-raleway flex flex-row bg-[#e0de90] w-full">
        <div class="hidden md:block">
         <img src={cont1}  alt="" />  
             </div>
          <MyContact />
          <div class="hidden md:block">
           <img src={cont2}  alt="" />  
        </div>
        </section>

        <footer className="bg-[#5b4b45] text-white flex flex-row justify-center md:justify-between items-center py-6 md:py-12 px-28 md:px-8 lg:px-28 w-full">  
          <MyFooter />
          <img src={logo} className="w-32" alt="" />
        </footer>
      </body>
    </div>
  );
}
export default App;


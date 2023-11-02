
import './App.css';

function App() {
  return (
    <>
    <div className="m-4 px-20 shadow-md p-4">
    <div>
      <h1 className="text-2xl text-pink-800 px-4">Family Wellness</h1>
      <p className="px-4 text-xs my-3">MESSAGE THERAPY</p>
    </div>
    <nav className="bg-gray-500 p-3 mx-3">
    <div className="container mx-auto flex justify-between items-center">
        <a href="#" class="text-white hover:bg-pink-800 hover:px-10 py-2">Home</a>
        <a href="#" class="text-white hover:bg-pink-800 hover:px-10 py-2">About</a>
        <a href="#" class="text-white hover:bg-pink-800 hover:px-10 py-2">Services</a>
       <a href="#" class="text-white hover:bg-pink-800 hover:px-10 py-2">FAQ</a>
        <a href="#" class="text-white hover:bg-pink-800 hover:px-10 py-2">Contact</a>
      </div>
  </nav>
  <div className="bg-gray-100">
    <div className="w-full flex justify-center">
      <img src="https://images.pexels.com/photos/13013532/pexels-photo-13013532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Your Image" className="p-4 w-full max-h-80" />
    </div>
  </div>
  <div className="h-60 bg-pink-800 w-full px-8">
   <h1 className="text-2xl text-white flex justify-center p-2 my-3">Think Health.Think Massage</h1>
   <p className="text-center px-40 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
   <div className="flex justify-center">
    <button className="bg-pink-800  text-white font-bold py-2 px-4 rounded border border-white hover:bg-blue-500 m-4">LEARN MORE ABOUT US</button>
    <button className="bg-pink-800  text-white font-bold py-2 px-4 rounded border border-white hover:bg-blue-500 m-4">CONTACT US TODAY</button>
   </div>
  </div>
  <div className="border-b-4 border-gray-300 bg-gray-300">
    <p className="px-16 py-2 text-pink-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
    <p className="px-16 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
    <p className="px-16 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
  </div>
  <div className="px-80 m-4">
    <h1 className="text-2xl text-pink-800 text-center m-2">Family Wellness Message Therapy</h1>
    <p className="text-xs text-center px-40 m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
  </div>
  <footer className="bg-gray-300 p-3 mx-3">
  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  </footer>
  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
  </div>
  </>
  );
}

export default App;

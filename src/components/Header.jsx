import myPhoto from '../assets/My_Photo.jpg'

function Header(){
    return(
       <header className="bg-blue-700 text-white p-6 rounded-md flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">SUNIL CHAUHAN</h1>
          <p>MERN Stack Developer</p>  
        </div>
        
        <div>
          <img src={myPhoto} className="w-20 rounded-full"/>
        </div>
       </header>
    )
}

export default Header


export default function Footer() {
  return (
     <div className="relative mt-50">
        <div className="w-3/4 mx-auto border border-gray-200 p-5 rounded-xl bg-gray-50 absolute -mt-40 ml-40">
              <div className="  bg-cover bg-center h-[300px] rounded-x py-20" style={{backgroundImage:"url('../../src/assets/images/bg-shadow.png')"}}>
              <div className="flex flex-col items-center gap-5">
                <h3 className="text-4xl font-bold">Subscribe to our Newsletter</h3>
                <p className="text-xl">Get the latest updates and news right in your inbox!</p>
                <div className="flex gap-4">
                    <input className="border py-1 px-4 border-gray-300  rounded-sm w-[380px]" type="text"placeholder="Enter your email"/>
                    <button className="font-bold py-2 px-5 bg-amber-300 rounded-sm cursor-pointer">Subscribe</button>
                </div>
              </div>
         </div>
        </div>
        <div className="bg-black pt-40 flex flex-col items-center pb-10">
            <div className="mt-20 mb-10">
                <img className="w-25" src="../../src/assets/images/logo.png" alt="" />
            </div>
            <div className="grid grid-cols-3 mx-20 gap-20 mt-5">
               <div>
                  <h6 className="text-xl text-white mb-5">About Us</h6>
                  <p className="text-white">We are a passionate team dedicated to providing the best services to our customers.</p>  
               </div>
               <div>
                <h6 className="text-xl text-white mb-5">Quick Links</h6>
                 <ol className="text-white list-disc">
                   <li>Home</li>
                   <li>Services</li>
                   <li>About</li>
                   <li>Contact</li>
                 </ol>
               </div>
               <div>
                <h6 className="text-xl text-white">Subscribe</h6>
                <p className="text-white mt-5 mb-5">Subscribe to our newsletter for the latest updates.</p>
                <div>
                    <input className="bg-white py-1 px-4 rounded-l-sm" type="email"  placeholder="Enter your email"/>
                    <button className="text-black font-bold py-1 px-4 bg-amber-300 rounded-r-sm">Subscribe</button>
                </div>
               </div>
            </div>
        </div>
     </div>
  )
}



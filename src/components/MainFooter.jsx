

const MainFooter = () => {
    return (
        <div>
            <footer className="bg-white shadow-md py-10 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Buy Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">BUY</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Pre-order</li>
            <li>Smartphone</li>
            <li>Laptop</li>
            <li>Tablet</li>
            <li>Accessories</li>
            <li>Wearable</li>
            <li>Headphone</li>
            <li>Perfume</li>
            <li>Fashion Watch</li>
            <li>Toys Zone</li>
            <li>Grooming</li>
            <li>Mosquito Bat</li>
            <li>Camera</li>
            <li>Projector</li>
          </ul>
        </div>

        {/* Sell Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">SELL</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Personalized Sell</li>
            <li>Smartphone</li>
            <li>Laptop</li>
            <li>Tablet</li>
            <li>Wearable</li>
            <li>Motorcycle</li>
            <li>Car</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">USEFUL LINKS</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Posts</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="font-bold text-lg mb-3">CONTACT US</h3>
          <ul className="text-gray-600 space-y-2">
            <li>📧 info@amarbazar.com.bd</li>
            <li>📞 +880 964 320 7212</li>
            <li>📍 Chartola Mor, Alomnagar, Rangpur</li>
          </ul>
          <h3 className="text-gray-600 mt-6 ">Follow Us</h3>
          <div className="flex space-x-3 mt-2 w-22 ">
            <a href=""><img src="./../public/icon/facebook.png"/></a>
            <a href=""><img src="./../public/icon/social.png"/></a>
            <a href=""><img src="./../public/icon/youtube.png"/></a>
            
          </div>
        </div>
      </div>

      {/* Payment Icons */}
      <div className="flex justify-center mt-6 mx-50">
      <img className="" src="./public/img/footer-ssl.7ea84e9c.webp" alt="" />
      </div>
      
      
    </footer>
    <div className="text-center my-4">  
    <p>© 2025 ABL. All Rights Reserved</p>
    </div>
        </div>
    );
};

export default MainFooter;
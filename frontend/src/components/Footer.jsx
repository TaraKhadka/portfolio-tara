import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <div>
         <footer id="footer" class="footer light-background">

            <div class="container">
               <div class="copyright text-center ">
                  <p>© <span>Copyright</span> <strong class="px-1 sitename">Tara</strong> <span>All Rights Reserved<br /></span></p>
               </div>
               <div class="credits">
                  Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link> Distributed by <Link to="https://themewagon.com">ThemeWagon</Link>
               </div>
            </div>

         </footer>
      </div>
   )
}

export default Footer
import "./index.css"
import banner from "/public/assets/banner.png"
export function Banner() {
  return(
    <div className="banner">
      <img src={banner} alt="The principal banner image" />
    </div>    
  )
}
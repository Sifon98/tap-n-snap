import React, {useState, useEffect} from 'react';
import Style from './CSS/footer.module.scss'
  
const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
      var toggleVisible = document.addEventListener("scroll", e => {
          const scrolled = document.documentElement.scrollTop;
          if (scrolled > 200){
            setVisible(true)
          } 
          else if (scrolled <= 200){
            setVisible(false)
          }
      })

      return () => {
        document.removeEventListener("scroll", toggleVisible)
      }
  }, [visible])
  
  const scrollToTop = () => {
    if (visible == true){
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    }else {
      console.log("No action until scroll");
    }
  };
  
  return (
    <button className={`${ visible ? Style.scrollBtn : Style.scrollBtnHide}`} onClick={scrollToTop}>
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}
  
export default ScrollButton;
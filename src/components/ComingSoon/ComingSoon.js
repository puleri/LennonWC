import css from './ComingSoon.module.css'
import bg from './comingSoon.png'
import insta from './Instagram.png'
import linked from './LinkedIn2.png'

function ComingSoon() {
  return (
    <div className={css.container}>
        <div className={css.socialGroup}>
            <a href='https://www.instagram.com/lennonwindowcleaning/'> 
              <img src={insta} className={css.insta} />
            </a>
        </div>
    </div>
  );
}

export default ComingSoon;

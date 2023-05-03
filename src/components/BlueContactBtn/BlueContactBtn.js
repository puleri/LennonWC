import css from './BlueContact.module.css'

function BlueContactBtn(props) {
  return (
        <a className={css.btn} href={props.href}><h3 className={css.btnText}>Contact us</h3></a>
  );
}

export default BlueContactBtn;

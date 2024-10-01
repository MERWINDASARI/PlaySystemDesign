import styles from "./ui.module.css";
import { BsCpuFill } from "react-icons/bs";
export default function UI() {
  return (
    <div className={styles.UIBody}>
      <button>
        <BsCpuFill size={40} />
      </button>
    </div>
  );
}

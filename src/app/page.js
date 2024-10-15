import styles from "./page.module.css";
import ExampleComponent from "@/components/ExampleComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <ExampleComponent></ExampleComponent>
    </div>
  );
}

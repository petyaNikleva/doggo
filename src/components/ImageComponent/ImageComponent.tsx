import Image from "next/image";
import styles from './ImageComponent.module.css';

type ImageComponentProps = {
    url:string
}

const ImageComponent = ({ url }: ImageComponentProps) => {
  return (
    <Image
      src={url}
      alt="Dog pic"
      className={styles.dogImg}
      width={250}
      height={250}
    />
  );
};

export default ImageComponent;

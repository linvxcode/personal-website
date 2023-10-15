import Image from "../Img/Image";

const ImageExp = ({project}) => {
  return (
    <div>
      <Image
        src={project.imgSrc}
        alt="img"
        width={400}
        height={400}
        loading="lazy"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};

export default ImageExp;

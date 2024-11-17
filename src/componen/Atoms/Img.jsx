const Img = ({ style, children, src, alt }) => {
  return (
    <Image className={style} src={src} alt={alt}>
      {children}
    </Image>
  );
};

export default Img;

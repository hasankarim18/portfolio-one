const PortFolioDetails = ({ item }) => {
  const { title, image, live, theme, technologies, points } = item;
  return (
    <div className="w-full">
      <div>
        <h2 className="text-3xl">{title}</h2>
        <div className="mt-4 h-60 overflow-scroll ">
          Image Slide
          <img src={image} alt="" />
        </div>
        <div>
            <h2 className="text-xl mt-4" >{theme}</h2>
        </div>
        <div className="mt-4">
            {
                points.map((p, i) => <p className="mb-2" key={i}>{i+1}. {p}</p>)
            }
        </div>
        <div className="mt-4">
            <div><strong>Technologies Used</strong></div>
            <div>
                {
                    technologies.map((t,i) => <span className="badge m-2" key={i}>{t}</span>)
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolioDetails;

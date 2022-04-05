import { Carousel } from "react-carousel-minimal";

const HeroSlider = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1613377512409-59c33c10c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "Find Suitable Hospitals",
    },
    {
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWwlMjBiZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      caption: "Best in Emergency",
    },
    {
      image:
        "https://images.unsplash.com/photo-1625869736621-784a42674da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3BpdGFsJTIwYmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      caption: "Helps Save lives",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    backgroundColor: "rgba(30, 40, 73, 0.692)",
    width: "30%",
    margin: "0 36%"
  };


  return (
    <>
        <Carousel
          data={data}
          time={5000}
          width="100%"
          height="500px"
          captionStyle={captionStyle}
          slideNumber={false}
          captionPosition="bottom"
          automatic={true}
          pauseIconColor="black"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            textAlign: "center",
            maxHeight: "500px",
          }}
        />
    </>
  );
};

export default HeroSlider;

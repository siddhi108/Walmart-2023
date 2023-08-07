import images from "../Images/index";
import Image from "next/image";

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal,
}) => {
  const team = [
    {
      avatar: images.compShipment,
    },
    {
      avatar: images.getShipment,
    },
    {
      avatar: images.startShipment,
    },
   
  ];

  const openModelBox = (text) => {
    if (text === 1) {
      setCompleteModal(true);
    } else if (text === 2) {
      setGetModel(true);
    } else if (text === 3) {
      setStartModal(true);
    } else if (text === 4) {
      setOpenProfile(true);
    }
  };
  return (
    
    <section className="py-0 pb-14">
      <div 
      className="max-w-screen-xl mx-auto px-4 md:px-8"
      >
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, i) => (
              <li key={i}>
                <div
                  onClick={() => openModelBox(i + 1)}
                  className="w-25 h-25 sm:h-25 md:h-25"
                >
                  <Image
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md shadow-lg shadow-indigo-500/40 rounded-xl"
                    alt=""
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

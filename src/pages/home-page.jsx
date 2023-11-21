import Form from "../controls/Form";
import celebrations from "../ui-images/celebrations.png";
import asset1 from "../ui-images/asset-1.png";
import yellowtone from "../ui-images/yellow-tone.png";
export default function Home() {
  return (
    <div className="bg-bg-landing w-screen bg-cover bg-no-repeat text-center p-2 relative">
      <img className="mx-auto" src={celebrations} alt="" />
      <p className="text-white text-lg mb-2">Register to create</p>
      <Form />
      <img
        src={asset1}
        className="absolute left-4 bottom-12 md:left-20"
        alt="ASEET"
      />
      <img
        src={yellowtone}
        className="absolute right-10 bottom-12 h-24 md:right-40"
        alt="YELLOW TONE"
      />
    </div>
  );
}

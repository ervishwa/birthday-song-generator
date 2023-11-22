import { useNavigate } from "react-router-dom";
import Button from "../controls/Button";

export default function LyricsPage() {
  const navigate = useNavigate();

  const createSong = () => {
    navigate("/download");
  };
  return (
    <div className="p-4 text-center">
      <p className="text-white text-3xl m-4">Your song's lyrics are ready!</p>
      <Button name="Version 1" theme="primary" size="xs"></Button>
      <div className="bg-white text-blue-950 text-2xl overflow-scroll h-[600px] rounded-xl p-8 text-start m-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        doloribus, consectetur tenetur officiis animi deserunt culpa itaque cum
        ullam, sint earum neque! Id nisi debitis sapiente quo reiciendis, vero
        ratione velit deleniti illo nam quas tempore! Impedit minima nesciunt
        animi officia, nisi, aperiam distinctio nihil eius saepe sed porro
        nulla. Quam optio iusto corporis sint, vel laboriosam obcaecati ipsa
        natus consequuntur beatae! Ipsum laudantium exercitationem quibusdam
        consequuntur similique labore nulla ullam eum numquam quidem! Magni
        iusto exercitationem sequi sit ab vel officia beatae tempora nihil
        ratione accusantium nam inventore possimus facere provident enim
        voluptatem modi excepturi repudiandae eaque nisi, quo eligendi? Alias
        nostrum eveniet iure neque? Quas illum odio ab rem iste, non, incidunt
        asperiores maiores hic in blanditiis eveniet cum beatae minima molestiae
        cupiditate quis! Quam unde repellendus aperiam cumque ullam minus
        repudiandae culpa deserunt nemo saepe magni iusto ratione enim
        praesentium, omnis libero explicabo temporibus impedit at sed, excepturi
        commodi? Odit obcaecati sit nesciunt excepturi minima! Inventore enim
        autem fugit, odio eaque cumque consequatur, neque praesentium eligendi
        molestiae libero, magni quas aperiam ullam quasi aliquam asperiores
        fugiat quo! Molestias, sit, voluptate quidem facere doloremque officia
        repudiandae sunt excepturi eaque ipsum nobis blanditiis ratione quia
        distinctio! Ipsum, provident nisi.
      </div>
      <div className="flex gap-2 mt-16">
        <Button name="Recreate Lyrics" theme="tertiary" size="sm" />
        <Button
          name="Create Song"
          theme="primary"
          size="sm"
          onClick={createSong}
        />
      </div>
    </div>
  );
}

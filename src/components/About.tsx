import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const api_url =
    "https://www.admin.dariusmolotokas.lt/wp-json/wp/v2/pages/10?_fields=id,content,title";

  useEffect(() => {
    getData();
  }, []);

  let [title, changeTitle] = useState("");
  let [body, changeBody] = useState("");

  async function getData() {
    let { data } = await axios.get(api_url);
    data.content.rendered = data.content.rendered.replace("<p>", "");
    data.content.rendered = data.content.rendered.replace("</p>", "");
    changeTitle(data.title.rendered);
    changeBody(data.content.rendered);
  }

  return (
    <>
      <div
        className="flex flex-col mt-8 mb-16 px-4
      min-[1024px]:flex-row min-[1024px]:w-[900px] min-[1024px]:mx-auto min-[1024px]:mb-auto
      min-[1440px]:w-[1110px]
      "
      >
        <div className="min-[1024px]:w-[30%] pb-4 min-[1024px]:mr-14">
          <img src="../../images/profile.jpg" />
        </div>
        <div className="flex flex-col justify-center min-[1024px]:w-[70%]">
          <h1 className="text-4xl mb-4 text-gray-800">{title}</h1>
          <p className="leading-relaxed tracking-wide text-gray-500 max-w-[600px]">
            {body}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

import { useEffect, useState } from "react";

function PostList() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch("http://tuttecose.loc/api/posts")
      ).json();

      setData(data);
    };

    fetchData();
  }, []);

  if (!data) return 'loading...';

  // @ts-ignore:next-line
  return data.map(item => console.log(item));
}

export default PostList;
